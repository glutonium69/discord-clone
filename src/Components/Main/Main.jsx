import Header from "./Header/Header";
import Chat from "./Chat/Chat";
import InputField from "./InputField/InputField";
import Members from "./Members/Members";
import { useState, useEffect } from "react";

export default function Main() {

    const [chatInput, setChatInput] = useState({
        main__chat_input: "",
        main__header_input: "",
    });

    function handleInput(e){

        let inputName = e.target.name;
        let inputValue = e.target.value;

        setChatInput( preChatInput => ({
            ...preChatInput,
            [inputName]: inputValue
        }))
    }

    const [msgArr, setMsgArr] = useState([]);

    function handlePost(){

        setMsgArr( pre => [...pre, chatInput.main__chat_input])

        setChatInput(preChatInput => ({
            ...preChatInput,
            main__chat_input: ""
        }))
    }

    function scrollChatUp(){
        const chatBody = document.querySelector(".chats");

        const chatBodyGapValue = window
					.getComputedStyle(chatBody)
					.getPropertyValue("gap");

        const messageBodyHeight = document.querySelector(".message-body:last-of-type").getBoundingClientRect().height;

        const howMuchToScroll = messageBodyHeight + parseFloat(chatBodyGapValue);
        
        chatBody.scrollBy(0, howMuchToScroll);
    }

    function callFunctions(e){
        if (e.key != "Enter" || chatInput.main__chat_input === "") return;
        if( chatInput.main__chat_input === "clear" ) { setMsgArr([]); return } // temp code to clear the chat so i dont need to refresh the page every time
        
        handlePost()
        setTimeout(scrollChatUp,0);
    }

    useEffect(() => {

        window.addEventListener("keydown", callFunctions)

        return () => {
            window.removeEventListener("keydown", callFunctions)
        }
    })

    return (
        <div className="main">
            <Header handleInput={handleInput} inputValue={chatInput} />
            <div className="chat-input-members-wrapper">
                <div className="chat-input-wrapper">
                    <Chat msg={msgArr} />
                    <InputField handleInput={handleInput} inputValue={chatInput} />
                </div>
                <Members />
            </div>
        </div>
    );
}