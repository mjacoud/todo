import { configureStore } from "@reduxjs/toolkit";
import slicesTasks from "./Slices/slicesTasks";
import slicesViews from "./Slices/slicesViews";

export const store = configureStore({
  reducer: { /* tasks: slicesTasks,  */ views: slicesViews },
});
