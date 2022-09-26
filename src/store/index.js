import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import time from "./time";

const rootReducer = combineReducers({
	time,
});

const middleware = [thunk];
const store = createStore(
	rootReducer,
	{},
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
