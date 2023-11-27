export default function ListItems({icon, text, appearance, pfp}) {

    let img = <img src={pfp} alt="" />;

    return (
			<li>
				<div className={ icon ? "img" : "img pfp"}>
					{icon || img}

                    <div className="appearance" data-appearance={appearance}></div>
				</div>
				<span className="name">{text}</span>
			</li>
		);
}