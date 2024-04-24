import MessageThreadInfo from "../../../../../types/messages/MessageThreadInfo";

let currentlyActiveThread:MessageThreadInfo | undefined = undefined;

export const setActiveThread = (thread:MessageThreadInfo | undefined) => {
    currentlyActiveThread = thread;
}

export const getActiveThread = () => currentlyActiveThread;

export function scrollToThread() {
    if (currentlyActiveThread) {
        const threadElement = document.getElementById(`chat-message-thread-${currentlyActiveThread.id}`);

        if (threadElement) {
            threadElement.scrollIntoView();
        }
    }
}