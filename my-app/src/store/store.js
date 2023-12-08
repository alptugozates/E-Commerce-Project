import { applyMiddleware, legacy_createStore as createStore } from "redux";
import logger from "redux-logger";
import { thunk } from "redux-thunk";

export const store = createStore(reducer, applyMiddleware(thunk, logger));

function reducer() {
  return;
}
