export default function Members() {

    return (
        <div className="members">

            <Header />

            <div className="badges"></div>
            <div className="user-info">

                <Name />
                <div className="divider"></div>
                <About />
                <div className="divider"></div>
                <Note />

            </div>
            <div className="additional-info">
                
            </div>
        </div>
    );
}


function Header(){
    return(
        <div className="header">
            <div className="img">
                <img src="https://media.discordapp.net/attachments/965024495658221598/1179858081002299494/Artorias.png?ex=657b4f77&is=6568da77&hm=7724bd1ba7cc827d101bd54a2421a06fc05e125040bc00e3b5274847affb1dae&=&format=webp&quality=lossless&width=286&height=419" alt="" />
                <div className="appearance" data-appearance="idle"></div>
            </div>
        </div>
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
            <input type="text" placeHolder="Click to add a notes" />
        </div>
    )
}