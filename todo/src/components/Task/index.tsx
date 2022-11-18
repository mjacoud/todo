import react from "react";
import React, { Component, useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Stack,
  Form,
  ButtonGroup,
} from "react-bootstrap";

import { Modal } from "../EditTaskModal";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { format } from "date-fns";

export const Task = ({
  tasks,
  handleTaskStatus,
  handleTaskDeletion,
  handleTaskPriorityChange,
}) => {
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

  return (
    <>
      <div className={`task ${tasks.priority}`}>
        <div className="edit">
          <input
            type="checkbox"
            onChange={(e) => setIsChecked(e.target.checked)}
            checked={isChecked}
          ></input>
          <div className={`task-title ${isChecked ? "task-completed" : ""}`}>
            {tasks.taskTitle}
          </div>
        </div>
        <div className="edit">
          <p className="format-date">{tasks.date}</p>
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
          <a
            className="edit-layout"
            href=""
            onClick={(e) => {
              e.preventDefault();
              handleTaskDeletion(tasks.id);
            }}
          >
            <img src="./src/assets/delete.png" className="edit-img"></img>
          </a>
        </div>
      </div>
      {/* {/***************** EDIT MODAL ***************/}

      <Modal
        title={tasks.taskTitle}
        tasks={tasks}
        show={isEditTaskModalOpen}
        onHide={() => setIsEditTaskModalOpen(false)}
        centered
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
                    value={tasks.taskDescription}
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
                    value={tasks.completed ? "Completed" : "Incomplete"}
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
                      onClick={() =>
                        handleTaskPriorityChange(tasks.id, "priority-green")
                      }
                      variant="success"
                    >
                      Low
                    </Button>
                    <Button
                      onClick={() =>
                        handleTaskPriorityChange(tasks.id, "priority-yellow")
                      }
                      variant="warning"
                    >
                      Medium
                    </Button>
                    <Button
                      onClick={() => {
                        handleTaskPriorityChange(tasks.id, "priority-red");
                      }}
                      variant="danger"
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
