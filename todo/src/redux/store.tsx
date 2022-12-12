import { configureStore } from "@reduxjs/toolkit";
import slicesTasks from "./Slices/slicesTasks";

export const store = configureStore({
  reducer: { tasks: slicesTasks },
});
