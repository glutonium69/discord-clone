

export default function ListItems({icon, text}) {

    return (
			<li>
				<div className="img">
					{icon || <img
						src="https://cdn.discordapp.com/avatars/492543441826349066/42c165aa65a0695ad140866b425bf9c3.webp?size=48"
						alt=""
					/>}
				</div>
				<div className="name">{text || "He is spiderman"}</div>
			</li>
		);
}