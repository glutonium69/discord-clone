import ChatBeginChannel from "./ChatBeginChannel";
import ChatBeginDm from "./ChatBeginDm";
import MessageBody from "./Message";

export default function Chat({msgArr, removeElement}) {

    return (
        <div className="chats">
            <ChatBeginDm />
            {
                msgArr.map( (msg,idx) => (
                    <MessageBody 
                        key={idx} 
                        msg={msg}
                        id={idx} 
                        removeElement={removeElement}
                    />
                ))
            }
        </div>
    );
}