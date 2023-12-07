import { CommonIcons, IconsInDM, IconsInServer } from "./Icons";

const [Help, Inbox, PinnedMsg, SearchIcon] = CommonIcons();
const [AddFriend, UserPfp, VideoCall, VoiceCall] = IconsInDM();
const [MemberList, Notification, Threads] = IconsInServer();

export default function Accessibility({handleInput, inputValue}){

    const leftIcons = (
        <>
            <div className="img">{VoiceCall}</div>
            <div className="img">{VideoCall}</div>
            <div className="img">{PinnedMsg}</div>
            <div className="img">{AddFriend}</div>
            <div className="img">{UserPfp}</div>
        </>
    )

    const rightIcons = (
        <>
            <div className="img">{Inbox}</div>
            <div className="img">{Help}</div>
        </>
    )

    const input = (
        <div className="input">
            <input 
                type="text" 
                className="input-bar" 
                placeholder="Search"
                name="main__header_input"
                onChange={(e) => handleInput(e)} 
                value={inputValue.main__header_input}
            />
            <div className="img">{SearchIcon}</div>
        </div>
    )

    return(
        <div className="accessibility">
            {leftIcons}
            {input}
            {rightIcons}
        </div>
    )
}
