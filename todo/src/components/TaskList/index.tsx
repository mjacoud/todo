import React from "react"

import { Task } from "../Task"

import {v4 as uuidv4} from 'uuid'

export const TaskList = ({tasks}:any) => {
 return (
 <>
  {tasks.map((tasks)=> <Task tasks={tasks} key={uuidv4()}/>) }
</>
)}
