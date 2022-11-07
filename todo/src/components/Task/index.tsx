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

import { Modal } from "../Modal";

export const Task = ({
  tasks,
  handleTaskStatus,
  handleTaskDeletion,
  handleTaskPriorityChange,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  /*------------EDIT TASK Modal Display------------*/

  const [isEditTaskModalOpen, setIsEditTaskModalOpen] = React.useState(false);

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
        show={isEditTaskModalOpen}
        onHide={() => setIsEditTaskModalOpen(false)}
        centered
      >
        <form
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <Form.Group as={Row} className="mb-3" controlId="editTaskDescription">
            <Form.Label column sm="2" className="edit-label">
              Description
            </Form.Label>
            <Col sm="10">
              <Form.Control plaintext readOnly value={tasks.taskDescription} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="editTaskDate">
            <Form.Label column sm="2" className="edit-label">
              Date
            </Form.Label>
            <Col sm="10">
              <Form.Control plaintext readOnly value={tasks.date} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="editTaskStatus">
            <Form.Label column sm="2" className="edit-label">
              Status
            </Form.Label>
            <Col sm="10">
              <Form.Control plaintext readOnly value={tasks.completed} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="editTaskPriority">
            <Col className="btn-priority">
              <ButtonGroup size="lg" aria-label="Priority">
                <Button
                  onClick={() => handleTaskPriorityChange("priority-green")}
                  variant="success"
                >
                  Low
                </Button>
                <Button
                  onClick={() => handleTaskPriorityChange("priority-yellow")}
                  variant="warning"
                >
                  Medium
                </Button>
                <Button
                  onClick={() => {
                    handleTaskPriorityChange("priority-red");
                  }}
                  variant="danger"
                >
                  High
                </Button>
              </ButtonGroup>
            </Col>
          </Form.Group>
        </form>
      </Modal>
    </>
  );
};
