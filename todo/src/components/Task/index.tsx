import React, { useState } from "react";
import { Row, Col, Button, Form, ButtonGroup } from "react-bootstrap";

import { Modal } from "../EditTaskModal";

import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteTask,
  useTasks,
  updateTaskDescription,
  updateTaskPriority,
} from "../../redux/Slices/slicesTasks";

export const Task = ({ data }) => {
  const [isChecked, setIsChecked] = useState(false);

  /*------------EDIT TASK Modal Display------------*/

  const [isEditTaskModalOpen, setIsEditTaskModalOpen] = React.useState(false);

  /*------------EDIT TASK Description Modal Button ------------*/

  /*Dispatch */

  const dispatch = useDispatch();

  /*----------------- CHANGE DESCRIPTION -------------*/

  /* STATE - DESCRIPTION MODAL*/

  const [isDescriptionInputAvailable, setIsDescriptionInputAvailable] =
    React.useState(true);

  /* STATE - DESCRIPTION UPDATE */

  const [newDescription, setNewDescription] = useState(data.taskDescription);

  /* HANDLER - EDIT DESCRIPTION INPUT*/

  const handleIsDescriptionInputAvailable = (isDescriptionInputAvailable) => {
    if (isDescriptionInputAvailable == true) {
      setIsDescriptionInputAvailable(false);
    } else {
      setIsDescriptionInputAvailable(true);
    }
  };

  /* DISPATCH - EDIT DESCRIPTION */
  dispatch(updateTaskDescription({ ...data, taskDescription: newDescription }));

  /* HANDLER - CHANGE EDIT DESCRIPTION STATE */

  const handleTaskDescriptionUpdate = (e) => {
    e.preventDefault();
    setNewDescription(e.target.value);
  };

  /*----------------- CHANGE PRIORITY -------------*/

  /* STATE - PRIORITY UPDATE */

  const [newPriority, setNewPriority] = useState(data.priority);

  const onChangePriority = () => {
    dispatch(updateTaskPriority(data.id));
  };

  /*----------------- DELETE TASK -------------*/

  const onDeleteTask = (e) => {
    e.preventDefault();
    dispatch(deleteTask(data.id));
  };

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

  return (
    <>
      <div className={`task ${newPriority}`}>
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
        data={data}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
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
                    value={newDescription}
                    onChange={handleTaskDescriptionUpdate}
                    style={
                      isDescriptionInputAvailable
                        ? { width: "5rem" }
                        : { width: "" }
                    }
                  />
                  <a
                    href=""
                    onClick={(e) => {
                      e.preventDefault();
                      handleIsDescriptionInputAvailable(
                        isDescriptionInputAvailable
                      );
                      dispatch(
                        updateTaskDescription({
                          ...data,
                          taskDescription: newDescription,
                        })
                      );
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
                    <Button
                      variant="success"
                      onClick={() => {
                        setNewPriority("priority-green");
                        onChangePriority;
                        setIsEditTaskModalOpen(false);
                      }}
                    >
                      Low
                    </Button>
                    <Button
                      variant="warning"
                      onClick={() => {
                        setNewPriority("priority-yellow");
                        onChangePriority;
                        setIsEditTaskModalOpen(false);
                      }}
                    >
                      Medium
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => {
                        setNewPriority("priority-red");
                        onChangePriority;
                        setIsEditTaskModalOpen(false);
                      }}
                    >
                      High
                    </Button>
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
