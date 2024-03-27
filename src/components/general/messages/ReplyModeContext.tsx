import React, { createContext, useContext, useState } from 'react';
import { ReplyMode } from "../../../types/enums";

interface ReplyModeContextType {
    replyMode: ReplyMode;
    setReplyMode: React.Dispatch<React.SetStateAction<ReplyMode>>;
}

export const ReplyModeContext = createContext<ReplyModeContextType>({
    replyMode: ReplyMode.allMessages,
    setReplyMode: () => { console.log("Using context without provider"); }, // no-op default setter
});

export const useReplyMode = () => useContext(ReplyModeContext);

interface ReplyModeProviderProps {
    children: React.ReactNode;
}

export const ReplyModeProvider: React.FC<ReplyModeProviderProps> = ({ children }) => {
    const [replyMode, setReplyMode] = useState<ReplyMode>(ReplyMode.allMessages);

    return (
        <ReplyModeContext.Provider value={{ replyMode, setReplyMode }}>
            {children}
        </ReplyModeContext.Provider>
    );
};