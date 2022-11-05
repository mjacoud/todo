import React, { Component, useState } from "react";
import { TaskList } from "../TaskList";

export const Task = ({tasks},taskTest) => {


  return (
    <>
      <div className={`task ${tasks.priority}`}>
        <div className="edit">
          <input type="checkbox"></input>
          <div className="task-title">{tasks.taskTitle}</div>
        </div>
        <div className="edit">
          <p className="format-date">{tasks.date}</p>
          <a
            className="edit-layout"
            href=""
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <img src="./src/assets/editing.png" className="edit-img"></img>
          </a>
          <a
            className="edit-layout"
            href=""
            onClick={(e) => {
              e.preventDefault();
              taskTest(tasks);

            }}
          >
            <img src="./src/assets/delete.png" className="edit-img"></img>
          </a>
        </div>
      </div>
    </>
  );
};
