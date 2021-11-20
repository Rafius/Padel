import { combineReducers, Reducer } from "redux";
import { reducer as matches } from "./matches";

export interface ApplicationState {
  matches: Reducer;
}

export const createRootReducer: Function = (): Reducer =>
  combineReducers<ApplicationState>({
    matches,
  });
