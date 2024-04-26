import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid'; // Import UUID for generating unique IDs
import { RootState } from '../../app/store';
import MessageInfo from "../../types/messages/MessageInfo";
import Conversation from "../../components/chat/middle-section/chat-messages/Conversation";
import MessageThreadInfo from "../../types/messages/MessageThreadInfo";

import { createSelector } from 'reselect';
import {ReplyMode} from "../../types/enums";

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
    threads: MessageThreadInfo[];
    loading: 'idle' | 'pending' | 'succeeded' | 'failed';
    error: string | null;
    replyMode: ReplyMode;
    activeThreadID: string;
}

const initialState: ChatState = {
    messages: [],
    conversations: [],
    threads: [],
    loading: 'idle',
    error: null,
    replyMode: ReplyMode.allMessages,
    activeThreadID: '',
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
                const newThread = new MessageThreadInfo(action.payload.firstReply.id);
                newThread.addMessage(action.payload.firstReply);
                state.threads.push(newThread);
            },
            addConversation(state, action: PayloadAction<ConversationType>) {
                state.conversations.push(action.payload);
            },
            appendMessageToThread(state, action: PayloadAction<{ messageToAdd: MessageInfo, threadId: string }>) {
                const threadIndex = state.threads.findIndex(thread => thread.id === action.payload.threadId);
                if (threadIndex !== -1) {
                    const thread = state.threads[threadIndex];
                    // Rehydrate the existing messages in the thread
                    const rehydratedMessages = thread.messages.map(msg =>
                        new MessageInfo(msg.id, msg.sender, msg.contents, new Date(msg.date), msg.parentThreadID));
                    // Create a new MessageThreadInfo instance with the new message added
                    const newThread = new MessageThreadInfo(thread.id, rehydratedMessages, thread.name);
                    newThread.addMessage(action.payload.messageToAdd);
                    // Replace the old thread object with the new one
                    state.threads[threadIndex] = newThread;
                }
            },
            setReplyMode(state, action: PayloadAction<{ replyMode: ReplyMode, activeThreadID: string }>) {
                state.replyMode = action.payload.replyMode;
                state.activeThreadID = action.payload.activeThreadID;
            },
            clearActiveThreadID(state) {
                state.activeThreadID = '';
            }
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

export const { setReplyMode, clearActiveThreadID, addMessage, appendMessageToThread, addConversation, createThread } = chatSlice.actions;
export default chatSlice.reducer;

const getMessages = (state: RootState) => state.chat.messages;

export const selectAllMessages = createSelector(
    [getMessages], // input selector array
    (messages) => {
        // Rehydrate each plain object into a MessageInfo instance
        return messages
            .map(msg => new MessageInfo(msg.id, msg.sender, msg.contents, new Date(msg.date), msg.parentThreadID))
            .sort((a, b) => a.date.getTime() - b.date.getTime());
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
export const selectThreadById = createSelector(
    [selectAllThreads, (state, threadId) => threadId],
    (threads, threadId) => {
        const thread = threads.find(thread => thread.id === threadId);
        if (thread) {
            // Rehydrate the thread with MessageInfo instances
            const rehydratedMessages = thread.messages.map(msg =>
                new MessageInfo(msg.id, msg.sender, msg.contents, new Date(msg.date), msg.parentThreadID));
            return new MessageThreadInfo(thread.id, rehydratedMessages, thread.name);
        }
        return null;
    }
);


// Selectors
export const selectReplyMode = (state: RootState) => state.chat.replyMode;
export const selectActiveThreadID = (state: RootState) => state.chat.activeThreadID;