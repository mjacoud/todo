import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export interface Tasks {
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
    date: "Dec 20 2022",
    completed: false,
  },
  {
    id: uuidv4(),
    taskTitle: "Nadar",
    taskDescription: "Walk Fast",
    priority: "priority-yellow",
    date: "Dec 14 2022",
    completed: false,
  },
];

const sliceTasks = createSlice({
  name: "Tasks",
  initialState: INITIAL_STATE,
  reducers: {
    addTask: (state, { payload }: PayloadAction<Tasks>) => {
      {
        [...state, state.push(payload)];
      }
    },

    deleteTask: (state, { payload }: PayloadAction<string>) => {
      return state.filter((task) => task.id !== payload);
    },
    updateTaskDescription: (state, { payload }: PayloadAction<Tasks>) => {
      const getIndex = state.findIndex((task) => task.id == payload.id);
      [...state, (state[getIndex].taskDescription = payload.taskDescription)];
    },
    updateTaskTitle: (state, { payload }: PayloadAction<Tasks>) => {
      const getIndex = state.findIndex((task) => task.id == payload.id);
      [...state, (state[getIndex].taskTitle = payload.taskTitle)];
    },
    updateTaskPriority: (state, { payload }: PayloadAction<Tasks>) => {
      const getIndex = state.findIndex((task) => task.id == payload.id);
      [...state, (state[getIndex].priority = payload.priority)];
    },
    updateTaskDueDate: (state, { payload }: PayloadAction<Tasks>) => {
      const getIndex = state.findIndex((task) => task.id == payload.id);
      [...state, (state[getIndex].date = payload.date)];
    },
    updateTaskCompletion: (state, { payload }: PayloadAction<Tasks>) => {
      const getIndex = state.findIndex((task) => task.id == payload.id);
      [...state, (state[getIndex].completed = payload.completed)];
    },
  },
});

export default sliceTasks.reducer;
export const {
  addTask,
  deleteTask,
  updateTaskDescription,
  updateTaskTitle,
  updateTaskPriority,
  updateTaskDueDate,
  updateTaskCompletion,
} = sliceTasks.actions;

export const useTasks = (state: any) => {
  return state.tasks as Tasks[];
};
