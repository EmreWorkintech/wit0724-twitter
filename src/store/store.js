import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { postReducer } from "./reducers/postReducer";
import logger from "redux-logger";

export const myStore = createStore(postReducer, applyMiddleware(logger));
