import { CommonIcons, IconsInDM, IconsInServer } from "./Icons";

const [Help, Inbox, PinnedMsg, SearchIcon] = CommonIcons();
const [AddFriend, UserPfp, VideoCall, VoiceCall] = IconsInDM();
const [MemberList, Notification, Threads] = IconsInServer();

export default function Header() {
    
    return (
			<div className="header">
				<UserInfo />
				<Accessibility />
			</div>
		);
}

function UserInfo() {

    const viewName = (
        <div className="view-name">
            <div className="img pfp">
                <img src="https://cdn.discordapp.com/avatars/492543441826349066/42c165aa65a0695ad140866b425bf9c3.webp?size=48" alt="" />
                <div className="appearance" data-appearance="online"></div>
            </div>
            <span className="username">He is spiderman</span>
        </div>
    )

    const otherName = (
        <div className="other-name">
            <span className="aka">aka</span>
            <span className="other-names">bitch, ass, guakamole niqqa</span>
        </div>
    )

    return (
        <div className="user-info">
            {viewName}
            <div className="divider"></div>
            {otherName}
        </div>
    );
}

function Accessibility(){

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
            <input type="text" className="input-bar" placeholder="Search" />
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