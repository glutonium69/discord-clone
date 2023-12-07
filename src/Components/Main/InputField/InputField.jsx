import { Media, Gift, Gif, Sticker, Emojis } from "./Icons"
import getRandomEmoji from "./getRandomEmoji";

const otherIcons = [Gift, Gif, Sticker, Emojis];

export default function InputField({handleInput, inputValue}) {

    const { randomEmoji, updateEmoji } = getRandomEmoji()

    return (
        <div className="input-field">
            <div className="img">{Media}</div>
            <input
                type="text"
                placeholder="Message @He is spiderman"
                name="main__chat_input"
                onChange={(e) => handleInput(e)}
                value={inputValue.main__chat_input}
            />
            <InputIcons 
                randomEmoji={randomEmoji}
                updateEmoji={updateEmoji}
            />
        </div>
    );
}

function InputIcons({ randomEmoji, updateEmoji }){
    return (
        otherIcons.map((icon, idx) => (
            <div
                className={icon != Emojis ? "img" : "img emoji"}
                key={idx}
                onMouseOver={icon === Emojis ? updateEmoji : undefined}
            >
                {icon != Emojis ? icon : randomEmoji}
            </div>
        ))
    )
}