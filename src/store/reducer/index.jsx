import { createSlice } from "@reduxjs/toolkit";

export const addDeleteSlice = createSlice({
  name: "addremove",
  initialState,
  reducers: {
    Add: (state, action) => {
      return state, action.payload;
    },
    Delete: (state, action) => {
      return (state = state.filter(x => {
        return x.id != action.payload.id;
      }));
    },
  },
});
export const { Add, Delete } = addDeleteSlice.actions;
export default addDeleteSlice.reducer;
