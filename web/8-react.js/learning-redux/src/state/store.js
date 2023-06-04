import { applyMiddleware, legacy_createStore as createStore } from "redux";
import reducer from "./reducers";
import thunk from "redux-thunk";

// Creating store by putting reducer, currentState, and middleware of thunk
export const store = createStore(reducer, {}, applyMiddleware(thunk));
