import {unmute, mute, deafen, settings} from "./Icons"

export default function Personal() {

    let userName = "glutonium";
    let status = "Don't read the status"


    const icons = (
        <div className="icons">
            <div className="img">{unmute}</div>
            <div className="img">{deafen}</div>
            <div className="img">{settings}</div>
        </div>
    );

    const profileInfo = (
        <div className="profile-info">
            <span className="user-name">
                {userName.length <= 13 ? userName : userName.slice(0, 13) + "..."}
            </span>
            <span className="status">
                {status.length <= 13 ? status : status.slice(0, 13) + "..."}
            </span>
        </div>
    );

    const imgPfp = (
        <div className="img pfp">
            <img
                src="https://cdn.discordapp.com/avatars/845398823571947580/04e17494d7b24833f738bb09101f1a9e.webp?size=160"
                alt=""
            />
            <div className="appearance" data-appearance="offline"></div>
        </div>
    );

    const profile = (
        <a href="#" className="profile">
            {imgPfp}
            {profileInfo}
        </a>
    );


    return (
        <div className="personal">
            {profile}
            {icons}
        </div>
    );
}
