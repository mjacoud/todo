/***********************************IMPORTS**************************** */
import React from "react";

import {
  Container,
  Row,
  Col,
  Button,
  Stack,
  Form,
  ButtonGroup,
} from "react-bootstrap";

import { Modal } from "../AddTaskModal";

import { Task } from "../Task";
import { TaskList } from "../TaskList";

import "../Body/style.css";

/* Date Selector */

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { format } from "date-fns";

/* Random ID Generator */

import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { addTasks, useTasks } from "../../redux/slicesTasks";

export function AddTaskForm() {
  /*Input Title*/

  const [inputTitle, setInputTitle] = React.useState("");

  const handleInputTitle = (e) => {
    setInputTitle(e.target.value);
  };

  /*Input Description*/

  const [inputDescription, setInputDescription] = React.useState("");

  const handleInputDescription = (e) => {
    setInputDescription(e.target.value);
  };

  /*Input Date*/

  const [inputDate, setInputDate] = React.useState(null);

  /*Format date */

  const handleDateFormat = (date) => {
    let dateToString = date.toString();
    let formatDate = dateToString.slice(4, 10);
    return formatDate;
  };

  /*input Priority */

  const [inputPriority, setInputPriority] = React.useState("");

  /* Set task Status */

  const [taskStatus, setTaskStatus] = React.useState("false");

  /* Date Selector */

  /* Reset ADD TASK MODAL */

  const resetAddModal = () => {
    setInputTitle(""),
      setInputDescription(""),
      setInputDate(null),
      setInputPriority(""),
      setIsAddTaskModalOpen(false);
  };
  /*------------ADD TASK Modal Display------------*/

  const [isAddTaskModalOpen, setIsAddTaskModalOpen] = React.useState(false);

  /* DISPATCH */

  const dispatch = useDispatch();

  /* Handle Submit */

  const onSubmitTask = (e) => {
    if (inputTitle && inputDescription && inputPriority && inputDate) {
      dispatch(
        addTasks({
          id: uuidv4(),
          taskTitle: inputTitle,
          taskDescription: inputDescription,
          priority: inputPriority,
          date: handleDateFormat(inputDate),
          completed: false,
        })
      );
      resetAddModal();
    }
  };

  return (
    <>
      <Button
        variant="secondary"
        size="lg"
        onClick={() => setIsAddTaskModalOpen(true)}
      >
        + Add Task
      </Button>

      <Modal
        title="Add New Task"
        show={isAddTaskModalOpen}
        onHide={() => setIsAddTaskModalOpen(false)}
      >
        <form
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <Form.Group controlId="newTask">
            <Form.Text>Task Name</Form.Text>
            <Form.Control
              type="text"
              name="taskTitle"
              placeholder="Add a name for your task"
              required
              onChange={handleInputTitle}
              value={inputTitle}
            ></Form.Control>
            <div className="task-layout">
              <Form.Text>Task Description</Form.Text>
              <Form.Control
                as="textarea"
                name="taskDescription"
                rows={3}
                placeholder="Add a description for your task"
                required
                onChange={handleInputDescription}
                value={inputDescription}
              ></Form.Control>
            </div>
            <Row>
              <Col>
                <Form.Text>Due Date</Form.Text>

                <DatePicker
                  selected={inputDate}
                  onChange={(date) => setInputDate(date)}
                  required
                  dateFormat="dd/MM/yyyy"
                  minDate={new Date()}
                  value={inputDate}
                />
              </Col>
              <Col className="btn-priority">
                <ButtonGroup size="lg" aria-label="Priority">
                  <Button
                    onClick={() => setInputPriority("priority-green")}
                    variant="success"
                  >
                    Low
                  </Button>
                  <Button
                    onClick={() => setInputPriority("priority-yellow")}
                    variant="warning"
                  >
                    Medium
                  </Button>
                  <Button
                    onClick={() => setInputPriority("priority-red")}
                    variant="danger"
                  >
                    High
                  </Button>
                </ButtonGroup>
              </Col>
            </Row>
          </Form.Group>
          <div className="form-btn-layout">
            <Button
              variant="primary"
              type="button"
              size="lg"
              onClick={onSubmitTask}
            >
              Submit
            </Button>
          </div>
        </form>
      </Modal>
    </>
  );
}
