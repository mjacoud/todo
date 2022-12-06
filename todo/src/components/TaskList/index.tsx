import React from "react";

import { Task } from "../Task";

import { v4 as uuidv4 } from "uuid";
import { useTasks } from "../../redux/slicesTasks";
import { useSelector } from "react-redux";

export const TaskList = () => {
  const tasksTeste = useSelector(useTasks);

  return (
    <>
      {tasksTeste.map((tasks) => (
        <Task
          key={uuidv4()}
          data={tasks}
          handleTaskDeletion={undefined}
          handleTaskPriorityChange={undefined}
          handleInputTitle={undefined}
          inputTitle={undefined}
          setInputTitle={undefined}
          handleTaskTitleChange={undefined}
        />
      ))}
    </>
  );
};
