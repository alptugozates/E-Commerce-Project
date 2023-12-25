import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";

import logger from "redux-logger";
import globalReducer from "../reducers/globalReducer";
import userReducer from "../reducers/userReducer";
import productReducer from "../reducers/productReducer";
import storeReducer from "../reducers/storeReducer";
import { shoppingCartReducer } from "../reducers/shoppingCartReducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
  global: globalReducer,
  user: userReducer,
  product: productReducer,
  shoppingCart: shoppingCartReducer,
  store: storeReducer,
});

const middleware = [thunk, logger];

export const store = createStore(rootReducer, applyMiddleware(...middleware));
