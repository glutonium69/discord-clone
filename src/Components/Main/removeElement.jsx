const removeElement = (e) => {
    e.preventDefault();
    const targetElementId = e.target.getAttribute("data-id");
    setMsgArr(preMsgArr => preMsgArr.toSpliced(targetElementId, 1));
}

export default removeElement;