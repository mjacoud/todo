import React from "react";

import { Task } from "../Task";

import { v4 as uuidv4 } from "uuid";

export const TaskList = ({
  tasks,
  handleTaskStatus,
  handleTaskDeletion,
}: any) => {
  return (
    <>
      {tasks.map((tasks) => (
        <Task
          tasks={tasks}
          handleTaskStatus={handleTaskStatus}
          handleTaskDeletion={handleTaskDeletion}
          key={uuidv4()}
        />
      ))}
    </>
  );
};
