import { useEffect, useState } from "react"

const handleChatAndChatBody = (chatInput, setChatInput) => {

	const [msgArr, setMsgArr] = useState([]);

	function handlePost() {
        
		setMsgArr((pre) => [...pre, chatInput.main__chat_input]);

		setChatInput((preChatInput) => ({
			...preChatInput,
			main__chat_input: "",
		}));
	}

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
		if (chatInput.main__chat_input === "clear") {
			setMsgArr([]);
			return;
		} // temp code to clear the chat so i don't need to refresh the page every time

		handlePost();
		setTimeout(scrollChatUp, 0);
	}

	useEffect(() => {
		window.addEventListener("keydown", callFunctions);

		return () => {
			window.removeEventListener("keydown", callFunctions);
		};
	});

	return { msgArr };
};

export default handleChatAndChatBody;