import React, { Component } from "react";

export const Task = ({tasks}) => {

  return (
    <>
      <div className="task">
        <div className="edit">
          <input type="checkbox"></input>
          <div className="task-title">{tasks.taskTitle}</div>
        </div>
        <div className="edit">
          <a
            href=""
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <img src="./src/assets/editing.png" className="edit-img"></img>
          </a>
          <a
            href=""
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <img src="./src/assets/delete.png" className="edit-img"></img>
          </a>
        </div>
      </div>
    </>
  );
};
