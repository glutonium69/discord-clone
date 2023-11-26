import Servers from "./Components/Servers/Servers";
import Dm from "./Components/Dm/Dm";
import Main from "./Components/Main/Main";

export default function App() {

  return (
		<div className="wrapper">
			<Servers />
			<Dm />
			<Main />
		</div>
	);
}