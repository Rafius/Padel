import { combineReducers, Reducer } from "redux";
import { reducer as matches } from "./matches";


export const createRootReducer = () =>
  combineReducers({
    matches,
  });
