import { useState } from "react";
import { Emojis } from "./Icons"

export default function getRandomEmoji(){

    const [randomEmoji, setRandomEmoji] = useState(findRandomEmoji);

    const updateEmoji = () => {
        setRandomEmoji(findRandomEmoji)
    }

    return { randomEmoji, updateEmoji }
}

function findRandomEmoji(){
    let randomIndex = Math.floor(Math.random() * Emojis.length);
    return Emojis[randomIndex]
}