import "./App.css";
import { Balance } from "./Balance";
import { UpdateBalance } from "./UpdateBalance";
import { useSelector } from "react-redux";

function App() {
	// Accessing state value from store
	const amount = useSelector((state) => state.amount);

	return (
		<div className="App">
			<Balance />
			{amount < 0 ? (
				<h3 style={{ color: "red" }}>
					Insufficient Balance
				</h3>
			) : null}
			<UpdateBalance />
		</div>
	);
}

export default App;
