import Header from "./Header/Header";
import Chat from "./Chat/Chat";
import InputField from "./InputField/InputField";
import Members from "./Members/Members";

export default function Main() {

    return (
        <div>
            <Header />
            <Chat />
            <InputField />
            <Members />
        </div>
    );
}