import UserInfo from "./UserInfo"
import MutualInfo from "./MutualInfo"


export default function Members() {

    return (
        <div className="members">
            <Header />
            <Badges />
            <UserInfo />
            <MutualInfo />
        </div>
    );
}


function Header(){
    return(
        <div className="header">
            <div className="img pfp">
                <img src="https://media.discordapp.net/attachments/965024495658221598/1179858081002299494/Artorias.png?ex=657b4f77&is=6568da77&hm=7724bd1ba7cc827d101bd54a2421a06fc05e125040bc00e3b5274847affb1dae&=&format=webp&quality=lossless&width=286&height=419" alt="" />
                <div className="appearance" data-appearance="idle"></div>
            </div>
        </div>
    )
}


function Badges() {
	return (
		<div className="badges">
			<img
				src="https://cdn.discordapp.com/badge-icons/6de6d34650760ba5551a79732e98ed60.png"
				alt=""
			/>
			<img
				src="https://cdn.discordapp.com/badge-icons/011940fd013da3f7fb926e4a1cd2e618.png"
				alt=""
			/>
		</div>
	);
}
