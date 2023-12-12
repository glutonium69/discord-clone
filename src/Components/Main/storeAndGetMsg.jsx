import { useEffect, useRef } from "react"

const storeAndGetMsg = (msgArr, setMsgArr) => {

    const isFirstRender = useRef(true);

    // get the previously stored msg arr on first render if any exists
    useEffect(() => {
        const storedMsgArr = localStorage.getItem("msgArr");
        storedMsgArr && setMsgArr(JSON.parse(storedMsgArr));
    },[])

    // every time msgArr state changes, update the msgArr in local storage
    useEffect(() => {
        // makes sure it doesn't run on first render
        if (msgArr.length !== 0 || !isFirstRender.current) {
            localStorage.setItem("msgArr", JSON.stringify(msgArr));
            scrollChatUpOnLoad()
        }
        isFirstRender.current = false;
    }, [msgArr]);
}


function scrollChatUpOnLoad(){
    const chatBody = document.querySelector(".chats");
    chatBody.scrollTop = chatBody.scrollHeight;
}

export default storeAndGetMsg;