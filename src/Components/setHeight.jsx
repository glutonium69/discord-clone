import { useEffect } from "react";

/**
 * Sets the height of an element based on the window height, subtracting the heights of other specified elements.
 *
 * @param {string} elementClass - The class name of the element to set the height for.
 * @param {Array} args - Additional class names of elements whose heights should be subtracted from the window height.
 * @return {undefined} This function does not return a value.
 */
export default function setHeight(elementClass = "", ...args){
    
    useEffect(() => {
        
        function set(){
            
            const element = document.querySelector(`.${elementClass}`);
            let totalSubtractionHeight = 0;

            args.length > 0 &&  args.forEach(arg => {
                totalSubtractionHeight += document.querySelector(`.${arg}`).getBoundingClientRect().height
            })

            element.style.height = window.innerHeight - totalSubtractionHeight  + "px";
        }
        set()

        window.addEventListener("resize",set)
        return () => window.removeEventListener("resize", set)

    },[])
}