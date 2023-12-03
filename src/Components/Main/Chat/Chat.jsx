import ChatBeginChannel from "./ChatBeginChannel";
import ChatBeginDm from "./ChatBeginDm";
import MessageBody from "./Message";
import { useEffect } from "react";

export default function Chat() {

    // useEffect(() => {

    //     function setLength(){

    //         const chat = document.querySelector(".chats");
    //         const header = document.querySelector(".main .header").getBoundingClientRect().height;
    //         const inputField = document.querySelector(".main .input-field").getBoundingClientRect().height;
    
    //         chat.style.height = window.innerHeight - header - inputField + "px";
    //     }

    //     // setLength();

    //     window.addEventListener("resize",setLength)
    //     return () => window.removeEventListener("resize", setLength)

    // },[]);



    return (
        <div className="chats">
            <ChatBeginDm />
            <MessageBody />
            <MessageBody />
            <MessageBody />
            <MessageBody />
            <MessageBody />
        </div>
    );
}