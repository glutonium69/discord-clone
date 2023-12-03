export default function MessageBody() {

    return (
        <div className="message-body">

            <SenderPfp />

            <div className="message-info">
                <SenderInfo />
                <Message />
            </div>
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

const Message = () => (
    <span className="message">nventore, ipsum explicabo accusamus nesciunt nobis illo unde laudantium, aliquam quas assumenda saepe? Temporibus fuga voluptas perspiciatis illo, neque sint accusantium pariatur quo necessitatibus, est itaque. Laboriosam voluptate, eligendi quos minima et enim temporibus qui consequuntur facere blanditiis autem perspiciatis saepe rerum! Pariatur voluptas placeat saepe perspiciatiss, est itaque. Laboriosam voluptate, eligendi quos minima et enim temporibus qui consequuntur facere blanditiis autem perspiciatis saepe rerum! Pariatur voluptas placeat saepe perspiciatiss, est itaque. Laboriosam voluptate, eligendi quos minima et enim temporibus qui consequuntur facere blanditiis autem perspiciatis saepe rerum! Pariatur voluptas placeat saepe perspiciatiss, est itaque. Laboriosam voluptate, eligendi quos minima et enim temporibus qui consequuntur facere blanditiis autem perspiciatis saepe rerum! Pariatur voluptas placeat saepe perspiciatis repudiandae quis cupiditate. Quas exercitationem assumenda cupiditate officiis aliquam dicta eligendi libero, blanditiis hic quasi aut maiores molestias? Totam, ut voluptatem excepturi tempore deserunt recusandae! Blanditiis facilis delectus veniam voluptatibus earum saepe odit, voluptates recusandae amet neque esse? Necessitatibus nisi ea facere rem culpa, eveniet autem voluptates, s, est itaque. Laboriosam voluptate, eligendi quos minima et enim temporibus qui consequuntur facere blanditiis autem perspiciatis saepe rerum! Pariatur voluptas placeat saepe perspiciatisducimus in deserunt eligendi vel, asperiores voluptas.</span>
)