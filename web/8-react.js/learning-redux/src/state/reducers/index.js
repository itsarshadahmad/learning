import { combineReducers } from "redux";
import amountReducer from "./amountReducer";

// combines multiple reducer into one
const reducers = combineReducers({
	amount: amountReducer,
});

export default reducers;
