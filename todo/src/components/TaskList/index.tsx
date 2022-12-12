import React from "react";

import { Task } from "../Task";

import { v4 as uuidv4 } from "uuid";
import { Tasks, useTasks } from "../../redux/Slices/slicesTasks";
import { useSelector } from "react-redux";

export const TaskList = () => {
  const taskList = useSelector(useTasks);

  return (
    <>
      {taskList.map((tasks) => (
        <Task key={uuidv4()} data={tasks} />
      ))}
    </>
  );
};
