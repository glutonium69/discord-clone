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

    function click(e){

        if(e.key != "Enter" || chatInput.main__chat_input === "") return;

        setMsgArr( pre => [...pre, chatInput.main__chat_input])

        setChatInput(preChatInput => ({
            ...preChatInput,
            main__chat_input: ""
        }))
    }

    useEffect(() => {

        window.addEventListener("keydown", click)

        return () => {
            window.removeEventListener("keydown", click)
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