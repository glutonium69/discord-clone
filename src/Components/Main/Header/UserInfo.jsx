export default function UserInfo() {
	const viewName = (
		<div className="view-name">
			<div className="img pfp">
				<img
					src="https://cdn.discordapp.com/avatars/492543441826349066/42c165aa65a0695ad140866b425bf9c3.webp?size=48"
					alt=""
				/>
				<div className="appearance" data-appearance="online"></div>
			</div>
			<span className="username">He is spiderman</span>
		</div>
	);

	const otherName = (
		<div className="other-name">
			<span className="aka">aka</span>
			<span className="other-names">bitch, ass, baby..</span>
		</div>
	);

	return (
		<div className="user-info">
			{viewName}
			<div className="divider"></div>
			{otherName}
		</div>
	);
}
