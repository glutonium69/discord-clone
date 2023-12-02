export default function MessageBody() {

    return (
        <div className="message-container">
            <SenderInfo />
            <Message />
        </div>
    );
}

const SenderInfo = () => {

    let date = new Date();

    let curr_month = date.getMonth() >= 10 ? date.getMonth() : `0${date.getMonth()}`
    let curr_date = date.getDate() >= 10 ? date.getDate() : `0${date.getDate()}`
    let curr_year = date.getYear() >= 10 ? date.getYear() : `0${date.getYear()}`
    let curr_hours = date.getHours() >= 10 ? date.getHours() : `0${date.getHours()}`
    let curr_minutes = date.getMinutes() >= 10 ? date.getMinutes() : `0${date.getMinutes()}`

    return(
        <div className="sender-info">
            <div className="img pfp">
                <img
                    src="https://cdn.discordapp.com/avatars/845398823571947580/04e17494d7b24833f738bb09101f1a9e.webp?size=160"
                    alt=""
                />
            </div>
            <span>glutonium</span>
            <span>{`${curr_month}/${curr_date}/${curr_year}  ${curr_hours}:${curr_minutes}`}</span>
        </div>
    )
};

const Message = () => (
    <span className="message">Man... Why are you gae?</span>
)