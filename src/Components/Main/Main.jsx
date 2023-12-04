import Header from "./Header/Header";
import Chat from "./Chat/Chat";
import InputField from "./InputField/InputField";
import Members from "./Members/Members";
import useChatInput from "./inputStateAndHandler";
import handleChatAndChatBody from "./handleChatAndChatBody";

export default function Main() {    

    // function that handles the state for all inputs and returns the state variable, setState function and the handleInput function that runs at onChange event for inputs
    const { chatInput, setChatInput, handleInput } = useChatInput(); 
    // function that takes the current input state and setState function as argument and returns an array of all the messages as well as handles the scroll up of chatBody 
    const { msgArr } = handleChatAndChatBody(chatInput, setChatInput);


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