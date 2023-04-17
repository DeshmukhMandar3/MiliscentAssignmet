import { combineReducers, legacy_createStore, compose } from "redux";
import { Reducer } from "./reducer";

const rootReducer = combineReducers({
  manager: Reducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;

export const store = legacy_createStore(rootReducer, composeEnhancer());
