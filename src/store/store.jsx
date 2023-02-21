import { configureStore } from "@reduxjs/toolkit";
import incDecReducer from "./reducer/index";

export default configureStore({
  reducer: incDecReducer,
});

// fuck its not working
