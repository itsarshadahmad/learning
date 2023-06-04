// reducer is used for complex state management where it has state and action as parameter.
// We can check actions by using its type to act on changes & payload has changes or changed value;
const reducer = (state = 0, action) => {
	if (action.type == "deposit") {
		return state + action.payload;
	} else if (action.type == "withdraw") {
		return state - action.payload;
	} else {
		return state;
	}
};

export default reducer;
