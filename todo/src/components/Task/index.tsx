import React, { useState } from "react";
import { Row, Col, Button, Form, ButtonGroup } from "react-bootstrap";

import { Modal } from "../EditTaskModal";

import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, useTasks } from "../../redux/slicesTasks";

export const Task = ({ data }) => {
  const [isChecked, setIsChecked] = useState(false);

  /*------------EDIT TASK Modal Display------------*/

  const [isEditTaskModalOpen, setIsEditTaskModalOpen] = React.useState(false);

  /*------------EDIT TASK Description Modal Button ------------*/

  /*State*/
  const [isDescriptionInputAvailable, setIsDescriptionInputAvailable] =
    React.useState(true);

  /*Handler*/
  const handleIsDescriptionInputAvailable = (isDescriptionInputAvailable) => {
    if (isDescriptionInputAvailable == true) {
      setIsDescriptionInputAvailable(false);
    } else {
      setIsDescriptionInputAvailable(true);
    }
  };

  /*Dispatch */

  const dispatch = useDispatch();

  /* Handle Task Deletion */

  const onDeleteTask = (e) => {
    e.preventDefault();
    dispatch(deleteTask(data.id));
    console.log(data.id);
  };

  const taskList = useSelector(useTasks);
  /*------------EDIT TASK Date Modal Button ------------*/

  /*State*/
  const [isDateInputAvailable, setIsDateInputAvailable] = React.useState(true);

  /*Handler*/
  const handleIsDateInputAvailable = (isDateInputAvailable) => {
    if (isDateInputAvailable == true) {
      setIsDateInputAvailable(false);
    } else {
      setIsDateInputAvailable(true);
    }
  };

  /*---------------COMPONENT-----------------*/
  const tasksTeste = useSelector(useTasks);
  console.log(tasksTeste.length);

  return (
    <>
      <div className={`task ${data.priority}`}>
        <div className="edit">
          <input
            type="checkbox"
            onChange={(e) => setIsChecked(e.target.checked)}
            checked={isChecked}
          ></input>
          <div className={`task-title ${isChecked ? "task-completed" : ""}`}>
            {data.taskTitle}
          </div>
        </div>
        <div className="edit">
          <p className="format-date">{data.date}</p>
          <a
            className="edit-layout"
            href=""
            onClick={(e) => {
              e.preventDefault();
              setIsEditTaskModalOpen(true);
            }}
          >
            <img src="./src/assets/editing.png" className="edit-img"></img>
          </a>
          <a className="edit-layout" href="" onClick={onDeleteTask}>
            <img src="./src/assets/delete.png" className="edit-img"></img>
          </a>
        </div>
      </div>
      {/* {/***************** EDIT MODAL ***************/}

      <Modal
        title={data.taskTitle}
        show={isEditTaskModalOpen}
        onHide={() => setIsEditTaskModalOpen(false)}
      >
        <form
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <div className="modal-edit-layout">
            <div className="modal-edit-fields">
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="editTaskDescription"
              >
                <Form.Label
                  column
                  sm="2"
                  className="edit-label"
                  style={{ paddingRight: "6rem" }}
                >
                  Description
                </Form.Label>
                <Col className="layout-edit-modal">
                  <Form.Control
                    as={isDescriptionInputAvailable ? "input" : "textarea"}
                    plaintext={isDescriptionInputAvailable}
                    readOnly={isDescriptionInputAvailable}
                    value={data.taskDescription}
                    style={
                      isDescriptionInputAvailable
                        ? { width: "5rem" }
                        : { width: "" }
                    }
                  />
                  <a
                    href=""
                    onClick={(e) => {
                      handleIsDescriptionInputAvailable(
                        isDescriptionInputAvailable
                      );
                      e.preventDefault();
                    }}
                  >
                    <span className="material-symbols-outlined">edit</span>
                  </a>
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="editTaskDate">
                <Form.Label column sm="2" className="edit-label">
                  Date
                </Form.Label>
                <Col className="layout-edit-modal">
                  <a
                    href=""
                    onClick={(e) => {
                      handleIsDateInputAvailable(isDateInputAvailable);
                      e.preventDefault();
                    }}
                  >
                    <span className="material-symbols-outlined">edit</span>
                  </a>
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="editTaskStatus">
                <Form.Label column sm="2" className="edit-label">
                  Status
                </Form.Label>
                <Col className="layout-edit-modal">
                  <Form.Control
                    plaintext
                    readOnly
                    value={data.completed ? "Completed" : "Incomplete"}
                    style={{ width: "5rem" }}
                  />
                  <a href="">
                    <span className="material-symbols-outlined">edit</span>
                  </a>
                </Col>
              </Form.Group>
            </div>
            <div className="modal-edit-priority">
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="editTaskPriority"
              >
                <Col className="btn-priority">
                  <ButtonGroup vertical size="lg" aria-label="Priority">
                    <Button variant="success">Low</Button>
                    <Button variant="warning">Medium</Button>
                    <Button variant="danger">High</Button>
                  </ButtonGroup>
                </Col>
              </Form.Group>
            </div>
          </div>
        </form>
      </Modal>
    </>
  );
};
