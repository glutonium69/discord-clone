import Header from "./Header/Header";
import Chat from "./Chat/Chat";
import InputField from "./InputField/InputField";
import Members from "./Members/Members";
import { useState } from "react";

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

    return (
			<div className="main">
				<Header handleInput={handleInput} inputValue={chatInput} />
				<div className="chat-member-wrapper">
                    <Chat />
                    <Members />
                </div>
				<InputField handleInput={handleInput} inputValue={chatInput} />
			</div>
		);
}