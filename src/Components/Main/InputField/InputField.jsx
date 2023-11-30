import { Media, Gift, Gif, Sticker, Emojis } from "./Icons"

const otherIcons = [Gift, Gif, Sticker, Emojis];

export default function InputField() {

    const elements = 
        otherIcons.map((icon, idx) => (

			<div className={icon != Emojis ? "img" : "img emoji"} key={idx}>

				{icon != Emojis
					? icon
					: icon[Math.floor(Math.random() * Emojis.length)]}

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