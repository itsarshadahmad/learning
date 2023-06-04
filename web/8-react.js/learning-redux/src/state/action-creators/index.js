// dispatch sets changes which is action which has type of action and payload which reflect change or value.
export const depositMoney = (amount) => {
	return (dispatch) => {
		dispatch({
			type: "deposit",
			payload: amount,
		});
	};
};

export const withdrawMoney = (amount) => {
	return (dispatch) => {
		dispatch({
			type: "withdraw",
			payload: amount,
		});
	};
};
