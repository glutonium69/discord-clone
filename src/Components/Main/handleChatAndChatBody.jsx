import { useEffect, useState } from "react"
import getTimeAndDate from "../getTimeAndDate";

const handleChatAndChatBody = (chatInput, setChatInput) => {

	const [msgArr, setMsgArr] = useState([]);

    // updates the msgArr and sets the current input value to ""
	function handlePost() {

        const { currDateFull, currTimeFull } = getTimeAndDate()
        
		setMsgArr((pre) => [
			...pre,
			{
				id: 0,
				timeDate: {
					time: currTimeFull,
					date: currDateFull,
				},
				msg: chatInput.main__chat_input,
			},
		]);

        // sets the current input value to ""
		setChatInput((preChatInput) => ({
			...preChatInput,
			main__chat_input: "",
		}));
	}

    // every msg takes up some space and there's a defined gap between every two msgs
    // this function makes sure when a msg is sent the element holding all chat is shifted upward based on the gap and the space the latest msg takes
	function scrollChatUp() {
		const chatBody = document.querySelector(".chats");

		const chatBodyGapValue = window
			.getComputedStyle(chatBody)
			.getPropertyValue("gap");

		const messageBodyHeight = document
			.querySelector(".message-body:last-of-type")
			.getBoundingClientRect().height;

		const howMuchToScroll = messageBodyHeight + parseFloat(chatBodyGapValue);

		chatBody.scrollBy(0, howMuchToScroll);
	}

	function callFunctions(e) {
		if (e.key != "Enter" || chatInput.main__chat_input === "") return;

		handlePost();
        // makes sure that it runs after the msg in mounted in DOM
        // so it can access the latest msg sent
		setTimeout(scrollChatUp, 0);
	}

	useEffect(() => {
		window.addEventListener("keydown", callFunctions);

		return () => {
			window.removeEventListener("keydown", callFunctions);
		};
	});

	return { msgArr, setMsgArr };
};

export default handleChatAndChatBody;