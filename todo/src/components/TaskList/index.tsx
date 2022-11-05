import React from "react"

import { Task } from "../Task"

import {v4 as uuidv4} from 'uuid'

export const TaskList = ({tasks}:any) => {

  const taskTest = ({tasks}) => {tasks.map((tasks)=>{return console.log(tasks.id)})}

 return (
 <>
  {tasks.map((tasks)=> <Task taskTest={taskTest} tasks={tasks} key={uuidv4()}/>) }
</>
)}
