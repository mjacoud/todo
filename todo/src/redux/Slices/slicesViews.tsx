import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { Tasks, useTasks } from "./slicesTasks";

const taskList = useSelector(useTasks);

export interface View {
  title: string;
  view: Tasks[];
}

const INITIAL_STATE: View[] = [
  { title: "home", view: taskList },
  { title: "Today", view: [] },
  { title: "This Week", view: [] },
  { title: "This Months", view: [] },
];

const sliceViews = createSlice({
  name: "Views",
  initialState: INITIAL_STATE,
  reducers: {
    addTask: (state, { payload }: PayloadAction<Tasks>) => {
      {
        [...state, state.push()];
      }
    },
  },
});

export default sliceViews.reducer;
export const { addTask } = sliceViews.actions;

export const useViews = (state: any) => {
  return state.views as View[];
};
