import {loadState, saveState} from "../LocalStorage/localStorage";
import { legacy_createStore as createStore, Store } from "redux";
import {ActionsType, counterReducer} from "./counter-redusers";

export type ReduxStateType = ReturnType<typeof counterReducer>
export type StoreType = Store<ReduxStateType, ActionsType>

const persistedState = loadState();
export const store = createStore(
  counterReducer,
  persistedState
);

//@ts-ignore
window.store = store