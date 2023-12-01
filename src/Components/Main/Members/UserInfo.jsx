export default function UserInfo(){
    return(
        <div className="user-info">
            <Name />
            <Divider />
            <About />
            <Divider />
            <Note />
        </div>
    )
}

function Divider(){
    return(
        <div className="divider"></div>
    )
}

function Name(){
    return(
        <div className="names">
            <span className="user-name">He is spiderman</span>
            <span className="acc-name">master420</span>
            <span className="pronoun">bitch, azzhole, degen</span>
        </div>
    )
}

function About(){
    return(
        <div className="about">
            <span className="about-me">ABOUT</span>
            <span>/text</span>
            <span className="discord-member-since">DISCORD MEMBER SINCE</span>
            <span>21 Sept 2018</span>
        </div>
    )
}

function Note(){
    return(
        <div className="note">
            <span className="note">NOTE</span>
            <input type="text" placeholder="Click to add a notes" />
        </div>
    )
}