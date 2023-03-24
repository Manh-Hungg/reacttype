import { store, RootState } from "../config";
import { RoomDto } from "../../interface/room";
import { fetchRoomListApi } from "../../services/room";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface RoomState {
  roomList: RoomDto[];
}

const DEFAULT_STATE = {
  roomList: [],
} as RoomState;

export const fetchRoomListAction = createAsyncThunk(
  "roomReducer/fetchRoomListAction",
  async (_, store) => {
    const rootState = store.getState() as RootState;
    if (rootState.roomReducer.roomList.length) {
      return rootState.roomReducer.roomList;
    }
    const result = await fetchRoomListApi();
    return result.data.content;
  }
);

const roomSlice = createSlice({
  name: "roomReducer",
  initialState: DEFAULT_STATE,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(
      fetchRoomListAction.fulfilled,
      (state: RoomState, action: PayloadAction<RoomDto[]>) => {
        state.roomList = action.payload;
      }
    );
  },
});
export const roomReducer = roomSlice.reducer;
