import ChatBeginChannel from "./ChatBeginChannel";
import ChatBeginDm from "./ChatBeginDm";
import MessageBody from "./Message";

export default function Chat() {


    return (
        <div className="chats">
            <ChatBeginDm />
            <MessageBody />
        </div>
    );
}