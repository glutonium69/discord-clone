import ChatBeginChannel from "./ChatBeginChannel";
import ChatBeginDm from "./ChatBeginDm";
import MessageBody from "./Message";

export default function Chat({msg, removeElement}) {

    return (
        <div className="chats">
            <ChatBeginDm />
            {
                msg.map( (msg,idx) => (
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