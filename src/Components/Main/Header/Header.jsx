import UserInfo from "./UserInfo";
import Accessibility from "./Accessibility";

export default function Header({handleInput, inputValue}) {
    
    return (
			<div className="header">
				<UserInfo />
				<Accessibility 
                    handleInput={handleInput}
                    inputValue={inputValue}
                />
			</div>
		);
}


