import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

interface Tasks {
  id: string;
  taskTitle: string;
  taskDescription: string;
  priority: string;
  date: string;
  completed: boolean;
}

const INITIAL_STATE: Tasks[] = [
  {
    id: uuidv4(),
    taskTitle: "correr",
    taskDescription: "Walk Fast",
    priority: "priority-green",
    date: "Nov 10",
    completed: false,
  },
  {
    id: uuidv4(),
    taskTitle: "Nadar",
    taskDescription: "Walk Fast",
    priority: "priority-yellow",
    date: "Nov 10",
    completed: false,
  },
];

const sliceTasks = createSlice({
  name: "Tasks",
  initialState: INITIAL_STATE,
  reducers: {
    addTasks: (state, { payload }: PayloadAction<Tasks>) => {
      {
        [...state, state.push(payload)];
      }
    },
  },
});

export default sliceTasks.reducer;
export const { addTasks } = sliceTasks.actions;

export const useTasks = (state: any) => {
  return state.tasks as Tasks[];
};
