import MessageSender from "./MessageSender";

export default interface MessageInfo {
    id: string;
    sender: MessageSender;
    messageContents: string;
    date: Date;

}