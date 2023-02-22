import { createSlice } from "@reduxjs/toolkit";

export const addDeleteSlice = createSlice({
  name: "addremove",
  initialState: {
    item: [],
  },
  reducers: {
    Add: (state, action) => {
      state.item = [...state.item, action.payload];
    },
    Delete: (state, action) => {
      state.item.filter(x => {
        x.id != action.payload.product.id;
      });
    },
  },
});
export const { Add, Delete } = addDeleteSlice.actions;
export default addDeleteSlice.reducer;
