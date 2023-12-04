import { useState } from "react";

const useChatInput = () => {

	const [chatInput, setChatInput] = useState({
		main__chat_input: "",
		main__header_input: "",
	});

	const handleInput = (e) => {
		let inputName = e.target.name;
		let inputValue = e.target.value;

		setChatInput((preChatInput) => ({
			...preChatInput,
			[inputName]: inputValue,
		}));
	};

	return { chatInput, setChatInput, handleInput };
};

export default useChatInput;
