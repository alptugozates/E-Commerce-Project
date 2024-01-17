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
import { thunk } from "redux-thunk";
import cartReducer from "../reducers/cartReducer";

const rootReducer = combineReducers({
  globalReducer: globalReducer,
  userReducer: userReducer,
  productReducer: productReducer,
  storeReducer: storeReducer,
  cartReducer: cartReducer,
});

const middleware = [thunk, logger];

export const store = createStore(rootReducer, applyMiddleware(...middleware));
