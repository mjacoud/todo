import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const INITIAL_STATE: string = ([inputTitle, setInpuTitle] = useState(""));

const sliceTasks = createSlice({
  name: "Tasks",
  initialState: INITIAL_STATE,
  reducers: {},
});

export default sliceTasks.reducer;
export const {} = sliceTasks.actions;
