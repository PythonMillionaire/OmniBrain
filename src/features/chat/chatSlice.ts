import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid'; // Import UUID for generating unique IDs
import { RootState } from '../../app/store';
import MessageInfo from "../../types/messages/MessageInfo";
import Conversation from "../../components/chat/middle-section/chat-messages/Conversation";
import MessageThreadInfo from "../../types/messages/MessageThreadInfo";

import { createSelector } from 'reselect';

// Define the type for a conversation
interface ConversationType {
    id: string;
    participantIds: string[];
    messageIds: string[];
    title?: string;
}

interface ChatState {
    messages: MessageInfo[];
    conversations: ConversationType[];
    threads: MessageThreadInfo[]; // Store threads
    loading: 'idle' | 'pending' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: ChatState = {
    messages: [],
    conversations: [],
    threads: [],
    loading: 'idle',
    error: null,
};



export const fetchConversations = createAsyncThunk(
    'chat/fetchConversations',
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch(`https://api.example.com/conversations`);
            if (!response.ok) {
                throw new Error('Failed to load conversations');
            }
            return await response.json();
        } catch (err: unknown) {
            if (err instanceof Error) {
                return rejectWithValue(err.message);
            }
            return rejectWithValue('An unknown error occurred');
        }
    }
);

const chatSlice = createSlice({
    name: 'chat',
    initialState,
        reducers: {
            addMessage(state, action: PayloadAction<MessageInfo>) {
                state.messages.push(action.payload);
            },
            createThread(state, action: PayloadAction<{ firstReply: MessageInfo }>) {
                const newId = uuidv4();
                const newThread = new MessageThreadInfo(newId);
                newThread.addReply(action.payload.firstReply);
                state.threads.push(newThread);
            },
            addConversation(state, action: PayloadAction<ConversationType>) {
                state.conversations.push(action.payload);
            },
            appendMessageToConversation(state, action: PayloadAction<{ conversationId: string, messageId: string }>) {
                const conversation = state.conversations.find(convo => convo.id === action.payload.conversationId);
                if (conversation && !conversation.messageIds.includes(action.payload.messageId)) {
                    conversation.messageIds.push(action.payload.messageId);
                }
            },
        },
    extraReducers: (builder) => {
        builder
            .addCase(fetchConversations.pending, (state) => {
                state.loading = 'pending';
            })
            .addCase(fetchConversations.fulfilled, (state, action) => {
                action.payload.forEach((conversation: ConversationType) => {
                    state.conversations.push({ ...conversation, id: uuidv4() });
                });
                state.loading = 'succeeded';
            })
            .addCase(fetchConversations.rejected, (state, action) => {
                state.loading = 'failed';
                state.error = action.payload as string;
            });
    }
});

export const { addMessage, addConversation, appendMessageToConversation, createThread } = chatSlice.actions;
export default chatSlice.reducer;

const getMessages = (state: RootState) => state.chat.messages;

export const selectAllMessages = createSelector(
    [getMessages], // input selector array
    (messages) => {
        return [...messages].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    }
);

// Retrieves all conversations directly as they are stored in an array
export const selectAllConversations = (state: RootState) => state.chat.conversations;

// Finds a conversation by ID within the array
export const selectConversationById = (state: RootState, id: string) => {
    return state.chat.conversations.find(conversation => conversation.id === id);
};

// Retrieves all threads directly as they are stored in an array
export const selectAllThreads = (state: RootState) => state.chat.threads;

// Finds a thread by ID within the array
export const selectThreadById = (state: RootState, threadId: string) => {
    return state.chat.threads.find(thread => thread.id === threadId);
};
