import React, {createContext, useContext, useState} from 'react';
import {ReplyMode} from "../../../types/enums";
import {setActiveThread} from "../../chat/middle-section/chat-input/functionality/ReplyModeFunctionality";
import MessageThreadInfo from "../../../types/messages/MessageThreadInfo";

interface ReplyModeContextType {
    replyMode: ReplyMode;
    setReplyMode: (newMode: ReplyMode, newActiveThreadID: string) => void;
    activeThreadID: string;
}

export const ReplyModeContext = createContext<ReplyModeContextType>({
    replyMode: ReplyMode.allMessages,
    setReplyMode: () => { console.log("Using context without provider"); }, // no-op default setter
    activeThreadID: '',
});

export const useReplyMode = () => useContext(ReplyModeContext);

interface ReplyModeProviderProps {
    children: React.ReactNode;
}

export const ReplyModeProvider: React.FC<ReplyModeProviderProps> = ({ children }) => {
    const [replyMode, setReplyModeState] = useState<ReplyMode>(ReplyMode.allMessages);
    const [activeThreadID, setActiveThreadID] = useState<string>('');

    const setReplyMode = (newMode: ReplyMode, newActiveThreadID: string) => {
        if (newMode === ReplyMode.allMessages) {
            setActiveThreadID(''); // Ensure activeThread is cleared when switching modes
        } else {
            setActiveThreadID(newActiveThreadID); // Update activeThread for thread mode
        }
        setReplyModeState(newMode); // Update the reply mode last to ensure state consistency
    };


    return (
        <ReplyModeContext.Provider value={{ replyMode, activeThreadID: activeThreadID, setReplyMode }}>
            {children}
        </ReplyModeContext.Provider>
    );
};