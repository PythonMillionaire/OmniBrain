const copyMessageContents = async (eventTarget: EventTarget) => {
    try {
        // The target is the element that triggered the event
        const target = eventTarget as HTMLElement;

        // Find the closest ancestor with the class .chat-message-inner-container
        const innerContainer = target.closest('.chat-message-inner-container');
        if (!innerContainer) {
            console.error('Could not find the .chat-message-inner-container ancestor.');
            return;
        }

        // Find the .chat-message-wrapper within the found ancestor
        const messageWrapper = innerContainer.querySelector('.chat-message-wrapper');
        if (!messageWrapper) {
            console.error('Could not find the .chat-message-wrapper descendant.');
            return;
        }

        // Find the .chat-message inside the .chat-message-wrapper
        const chatMessage = messageWrapper.querySelector('.chat-message');
        if (!chatMessage) {
            console.error('Could not find the .chat-message descendant.');
            return;
        }

        // Finally, get the .chat-message-contents inside the .chat-message
        const messageContents = chatMessage.querySelector('.chat-message-contents');
        if (!messageContents) {
            console.error('Could not find the .chat-message-contents to copy.');
            return;
        }

        // Use the Clipboard API to copy the text contents
        await navigator.clipboard.writeText(messageContents.textContent || '');
        console.log('Message copied to clipboard successfully.');
    } catch (error) {
        console.error('Failed to copy message:', error);
    }
};

export default copyMessageContents;