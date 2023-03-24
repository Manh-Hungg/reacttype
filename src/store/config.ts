import { roomReducer } from "./reducers/roomReducer";
import { AnyAction, combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk, { ThunkDispatch } from "redux-thunk";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReduder = combineReducers({
  roomReducer: roomReducer,
});

export const store = configureStore({
  reducer: persistReducer({ key: "root", storage: storage }, rootReduder),
  devTools: true,
  middleware: [thunk],
});
store.getState();

export type RootState = ReturnType<typeof store["getState"]>;
export type RootDispatch = typeof store["dispatch"] &
  ThunkDispatch<RootState, any, AnyAction>;
