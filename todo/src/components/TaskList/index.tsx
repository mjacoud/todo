import React from "react";

import { Task } from "../Task";

import { v4 as uuidv4 } from "uuid";
import { Tasks, useTasks } from "../../redux/Slices/slicesTasks";
import { useSelector } from "react-redux";
import { useViews } from "../../redux/Slices/slicesViews";

export const TaskList = () => {
  const taskList = useSelector(useViews);

  return (
    <>
      {taskList.map((view) =>
        view.view.map((task) => <Task key={uuidv4()} data={task} />)
      )}
    </>
  );
};
