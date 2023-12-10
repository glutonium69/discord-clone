import ChatBeginChannel from "./ChatBeginChannel";
import ChatBeginDm from "./ChatBeginDm";
import MessageBody from "./Message";

export default function Chat({msgArr, removeElement}) {

    return (
        <div className="chats">
            <ChatBeginDm />
            {
                msgArr.map( (msgObj,idx) => (
                    <MessageBody 
                        key={idx} 
                        msgObj={msgObj}
                        id={idx} 
                        removeElement={removeElement}
                    />
                ))
            }
        </div>
    );
}