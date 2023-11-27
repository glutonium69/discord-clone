export default function ListItems({icon, text, appearance}) {

    return (
			<li>
				<div className={ icon ? "img" : "img pfp"}>
					{icon || <img
						src="https://cdn.discordapp.com/avatars/492543441826349066/42c165aa65a0695ad140866b425bf9c3.webp?size=48"
						alt=""
					/>}
                    <div className="appearance" data-appearance={appearance}></div>
				</div>
				<div className="name">{text}</div>
			</li>
		);
}