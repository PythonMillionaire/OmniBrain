import { MessageExtremity } from "../../../../../../types/enums";

// Adjusted function to accept an element reference
const scrollToMessageExtremity = (element: EventTarget, extremity: MessageExtremity) => {
    try {
        const chatMessageContainer = (element as HTMLElement).closest('.chat-message-outer-container') as HTMLElement;
        const chatMessagesSection = document.getElementById('chat-messages-section');

        if (chatMessageContainer && chatMessagesSection) {
            const containerTop = chatMessageContainer.getBoundingClientRect().top;
            const sectionTop = chatMessagesSection.getBoundingClientRect().top;
            const currentScroll = chatMessagesSection.scrollTop;
            // Calculate the top position of chatMessageContainer relative to chatMessagesSection's current scroll
            const relativeTopPosition = containerTop - sectionTop + currentScroll;

            // Adjust for any offset if necessary. For top scrolling, offset moves it up (hence, subtracted)
            const offset = 40;

            if (extremity === MessageExtremity.bottom) {
                // Scroll to the bottom of chatMessageContainer
                const bottomPosition = relativeTopPosition + chatMessageContainer.offsetHeight - chatMessagesSection.offsetHeight + offset;
                chatMessagesSection.scrollTo({ top: bottomPosition, behavior: 'smooth' });
            } else if (extremity === MessageExtremity.top) {
                // Scroll to the top of chatMessageContainer, offset moves it down (hence, added)
                const topPosition = relativeTopPosition - offset;
                chatMessagesSection.scrollTo({ top: topPosition, behavior: 'smooth' });
            }
        } else {
            console.error("Required elements could not be found.");
        }
    } catch (e) {
        console.error("Failed to scroll to the extremity", e);
    }
};


export default scrollToMessageExtremity;
