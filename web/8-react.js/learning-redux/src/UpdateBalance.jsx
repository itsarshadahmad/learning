import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index";

export const UpdateBalance = () => {
	// dispatching action using actionCreator to setup changes and binding all dispatch actions
	const dispatch = useDispatch();
	// return dispach function to set dispatch changes accordingly
	const { withdrawMoney, depositMoney } = bindActionCreators(
		actionCreators,
		dispatch
	);

	return (
		<div>
			<h3>Add Balance</h3>
			<button onClick={() => depositMoney(100)}>+</button>
			<p>Update Balance</p>
			<button onClick={() => withdrawMoney(100)}>-</button>
		</div>
	);
};
