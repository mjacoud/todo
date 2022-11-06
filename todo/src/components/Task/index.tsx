import React, { Component, useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Stack,
  Form,
  ButtonGroup,
  Modal,
} from "react-bootstrap";

export const Task = ({ tasks, handleTaskStatus, handleTaskDeletion }) => {
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
          <button className="gambiarra"></button>
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
      {/***************** EDIT MODAL ***************/}

      <Modal
        title="Edit Task"
        show={isEditTaskModalOpen}
        onHide={() => setIsEditTaskModalOpen(false)}
      >
        <form
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <Form>
            <Form.Group as={Row} className="mb-3" controlId="editTaskTitle">
              <Form.Label column sm="2" className="task-completed">
                Title
              </Form.Label>
              <Col sm="10">
                <Form.Control plaintext readOnly value={tasks.taskTitle} />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="editTaskDescription"
            >
              <Form.Label column sm="2">
                Description
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  plaintext
                  readOnly
                  value={tasks.taskDescription}
                />
              </Col>
            </Form.Group>
          </Form>

          <Form>
            <Form.Group as={Row} className="mb-3" controlId="editTaskPriority">
              <Form.Label column sm="2">
                Priority
              </Form.Label>
              <Col sm="10">
                <Form.Control plaintext readOnly value={tasks.priority} />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="editTaskDate">
              <Form.Label column sm="2">
                Date
              </Form.Label>
              <Col sm="10">
                <Form.Control plaintext readOnly value={tasks.date} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="editTaskStatus">
              <Form.Label column sm="2">
                Status
              </Form.Label>
              <Col sm="10">
                <Form.Control plaintext readOnly value={tasks.completed} />
              </Col>
            </Form.Group>
          </Form>
        </form>
      </Modal>
    </>
  );
};
