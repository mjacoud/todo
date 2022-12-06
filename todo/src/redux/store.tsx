import { configureStore } from "@reduxjs/toolkit";
import sliceTasks from "./slicesTasks";

export const store = configureStore({
  reducer: { tasks: sliceTasks },
});
