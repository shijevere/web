import { combineReducers } from "redux";
import cartReducer from "./cartSlice";
import businessReducer from "./bussinessSlice";

export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    ...injectedReducers,
    cart: cartReducer,
    businessProfile: businessReducer,
  });

  return rootReducer;
}
