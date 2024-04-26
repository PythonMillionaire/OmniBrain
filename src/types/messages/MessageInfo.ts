import MessageSender from "./MessageSender";

export default class MessageInfo {
    constructor(
        public id: string,
        public sender: MessageSender,
        public contents: string,
        public date: Date = new Date(),
        public parentThreadID: string = ''
    ) {}
}
