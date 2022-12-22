import React, { useState } from "react";

/* REACT BOOTSTRAP */

import { Row, Col, Button, Form, ButtonGroup } from "react-bootstrap";
import { Modal } from "../EditTaskModal";

/* REDUX */

import { useDispatch, useSelector } from "react-redux";

/* COMPONENTE */

export const View = ({ data }) => {
  /*---------------COMPONENT-----------------*/

  return (
    <>
      <button className="defaultView-item">
        {data.title}
        <div className={data.view.length > 0 ? "NumberOfTasks" : ""}>
          {`${data.view.length > 0 ? data.view.length : ""}`}
        </div>
      </button>
    </>
  );
};
