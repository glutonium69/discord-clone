function removeElementFunction(msgArr, setMsgArr){
/**
 * A function to remove an element from an array of messages and update the state.
 *
 * @param {Array} msgArr - The array of messages.
 * @param {function} setMsgArr - The state setter function to update the array of messages.
 * @return {function} - The removeElement function that removes the element and updates the state.
 */

    const removeElement = (e) => {
        e.preventDefault();
        // gets the data-id of the target element so we know its index in the msgThisMin[]
        const targetElementId = e.target.getAttribute("data-id");
        // gets the parents data-id so we know it's position in the msgArr[]
        const targetElementParentId = e.target.closest(".message-body").getAttribute("data-id");
        // temporary array to hold the msg object that is being updated
        let tempObj = [...msgArr]
        // removing the msg from the msgThisMin[]
        tempObj[targetElementParentId].msgThisMin.splice(targetElementId, 1);
        // updating state
        setMsgArr(tempObj);
        // if all the msg in the msgThisMin is deleted then deleting the msg object 
        tempObj[targetElementParentId].msgThisMin.length === 0 && setMsgArr(preMsgArr => preMsgArr.toSpliced(targetElementParentId, 1));

    }
    return removeElement
}

export default removeElementFunction;