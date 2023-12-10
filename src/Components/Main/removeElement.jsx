
/**
 * Generates a function comment for the given function body in a markdown code block with the correct language syntax. 
 *
 * @param {function} setMsgArr - The function that sets the message array.
 * @return {function} - The generated function comment.
 */
function removeElementFunction(setMsgArr){

    const removeElement = (e) => {
        e.preventDefault();
        const targetElementId = e.target.getAttribute("data-id");
        setMsgArr(preMsgArr => preMsgArr.toSpliced(targetElementId, 1));
    }
    return removeElement
}

export default removeElementFunction;