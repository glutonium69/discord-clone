import { useState } from "react";
import { Media, Gift, Gif, Sticker, Emojis } from "./Icons"

const otherIcons = [Gift, Gif, Sticker, Emojis];

export default function InputField() {

    const [randomEmoji, setRandomEmoji] = useState(Emojis[Math.floor(Math.random() * Emojis.length)])

    function handleEmojiHover(){
        setRandomEmoji(Emojis[Math.floor(Math.random() * Emojis.length)])
    }

    const elements = otherIcons.map((icon, idx) => (
			<div
				className={icon != Emojis ? "img" : "img emoji"}
				key={idx}
				onMouseOver={handleEmojiHover}
			>
				{icon != Emojis ? icon : randomEmoji}
			</div>
		));

    return (
        <div className="input-field">
            <div className="img">{Media}</div>
            <input type="text" placeholder="Message He Is Spiderman" />
            {elements}
        </div>
    );
}