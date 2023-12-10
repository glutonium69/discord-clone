import { reactions, edit, settings } from "./MessageOptionsIcons";

export default function MessageBody({msg, id, removeElement}) {


    return (
			<div className="message-body" data-id={id} onContextMenu={removeElement}>
				<SenderPfp />

				<div className="message-info">
					<SenderInfo />
					<Message msg={msg} />
				</div>

				<MessageOptions />
			</div>
		);
}

const SenderPfp = () => (
	<div className="img-holder">
        <div className="img">
            <img
                src="https://cdn.discordapp.com/avatars/845398823571947580/04e17494d7b24833f738bb09101f1a9e.webp?size=160"
                alt=""
            />
        </div>
	</div>
);

const SenderInfo = () => {

    let date = new Date();

    let curr_month = date.getMonth() >= 10 ? date.getMonth() : `0${date.getMonth()}`
    let curr_date = date.getDate() >= 10 ? date.getDate() : `0${date.getDate()}`
    let curr_year = date.getYear() >= 10 ? date.getYear() : `0${date.getYear()}`
    let curr_hours = date.getHours() >= 10 ? date.getHours() : `0${date.getHours()}`
    let curr_minutes = date.getMinutes() >= 10 ? date.getMinutes() : `0${date.getMinutes()}`

    return(
        <div className="sender-name-time">
            <span className="sender-name">glutonium</span>
            <span className="send-date">{`${curr_month}/${curr_date}/${curr_year}`}</span> 
            <span className="send-time">{`${curr_hours}:${curr_minutes}`}</span>
        </div>
    )
};

const Message = ({msg}) => (
    <span className="message">{msg}</span>
)

const MessageOptions = () => {

    return (
        <div className="message-options">
            <div className="img">{reactions}</div>
            <div className="img">{edit}</div>
            <div className="img">{settings}</div>
        </div>
    )
}