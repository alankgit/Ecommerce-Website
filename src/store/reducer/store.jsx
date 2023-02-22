import { configureStore } from "@reduxjs/toolkit";
import storeRedux from "./index";

export default configureStore({
  reducer: storeRedux,
});

// fuck its not working
