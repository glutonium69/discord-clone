import { reactions, edit, settings } from "./MessageOptionsIcons";
import getTimeAndDate from "../../getTimeAndDate"

export default function MessageBody({msgObj, id, removeElement}) {

    return (
			<div className="message-body" data-id={id} onContextMenu={removeElement}>
				<SenderPfp />

				<div className="message-info">
                    <SenderInfo timeDate={msgObj.timeDate} />
					<Message msgThisMin={msgObj.msgThisMin} />
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

const SenderInfo = ({ timeDate: {time, date} }) => {

    const { currDateFull } = getTimeAndDate();

    return(
        <div className="sender-name-time">
            <span className="sender-name">glutonium</span>
            <span className="send-date">{date === currDateFull ? `Today at` : date}</span> 
            <span className="send-time">{time}</span>
        </div>
    )
};

const Message = ({msgThisMin}) => (
    <>
        {msgThisMin.map(
            (msg, index) => <span key={index} className="message">{msg}</span>
        )}
    </>
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