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

/*******************COMPONENT****************************** */

export function Body() {
  /*-------------View Selection-------------*/

  const [isTitleInputAvailable, setIsTitleInputAvailable] =
    React.useState(true);

  const handleIsTitleInputAvailable = (isTitleInputAvailable) => {
    if (isTitleInputAvailable == true) {
      setIsTitleInputAvailable(false);
    } else {
      setIsTitleInputAvailable(true);
    }
  };

  const [view, setView] = React.useState("Home");

  /*------------ADD TASK Modal Display------------*/

  const [isAddTaskModalOpen, setIsAddTaskModalOpen] = React.useState(false);

  /*------------Modal Inputs-------------*/

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

  /*Reset Modal */

  const resetModal = () => {
    setInputTitle(""),
      setInputDate(null),
      setInputDescription(""),
      setInputPriority(""),
      setIsAddTaskModalOpen(false);
  };

  /* Task List */

  const [tasks, setTasks] = React.useState([
    {
      id: uuidv4(),
      taskTitle: "correr",
      taskDescription: "Walk Fast",
      priority: "priority-green",
      date: "Nov 10",
      completed: false,
    },
  ]);

  /* handle add task*/

  const handleAddTask = (
    inputTitle,
    inputDescription,
    inputPriority,
    inputDate,
    taskStatus
  ) => {
    if (inputPriority != "") {
      setTasks([
        ...tasks,
        {
          id: uuidv4(),
          taskTitle: inputTitle,
          taskDescription: inputDescription,
          priority: inputPriority,
          date: handleDateFormat(inputDate),
          completed: taskStatus,
        },
      ]);
      resetModal();
    } else {
      alert("Add a Priority");
      console.log(inputPriority);
    }
  };
  /* handle task Status */
  /*
  const handleTaskStatus = (id) => {
    const refreshTask = tasks.map((task) => {
      if (task.id == id && task.completed == false) {
        return { ...task, completed: true };
      }
      if (task.id == id && task.completed == true) {
        return { ...task, completed: false };
      }
    });
    setTasks(refreshTask);
  };
 */
  /* handle task deletion */

  const handleTaskDeletion = (id) => {
    const refreshTask = tasks.filter((task) => task.id != id);
    setTasks(refreshTask);
  };

  /* handle task priority change */

  const handleTaskPriorityChange = (id: string, color: string) => {
    const refreshTask = tasks.map((task) => {
      if (task.id === id) {
        if (task.priority != color) {
          return { ...task, priority: color };
        } else {
          return task;
        }
      } else {
        return task;
      }
    });
    setTasks(refreshTask);
  };

  /* Handle task Description change */
  /*
   const handleTaskDescriptionChange = (id: string) => {
    const refreshTask = tasks.map((task) => {
      if (task.id === id) {
        if (task.priority != color) {
          return { ...task, priority: color };
        } else {
          return task;
        }
      } else {
        return task;
      }
    });
    setTasks(refreshTask);
  };
 */
  /* TSX */

  return (
    <>
      <Container fluid>
        <Row className="body">
          <Col xs="3" className="menu">
            <div className="defaultView-menu">
              <button className="defaultView-item">Home</button>
              <button className="defaultView-item">Today</button>
              <button className="defaultView-item">This Week</button>
              <button className="defaultView-item">This Month</button>
            </div>
          </Col>

          <Col className="index">
            <Stack gap={4} className="taskMenu">
              <Button
                variant="secondary"
                size="lg"
                onClick={() => setIsAddTaskModalOpen(true)}
              >
                + Add Task
              </Button>
              <TaskList
                tasks={tasks}
                handleTaskDeletion={handleTaskDeletion}
                handleTaskPriorityChange={handleTaskPriorityChange}
              />
            </Stack>
          </Col>
        </Row>
      </Container>

      <Modal
        /*************MODAL ADD TASKS********************/
        title="Add New Task"
        show={isAddTaskModalOpen}
        onHide={() => setIsAddTaskModalOpen(false)}
      >
        <form
          onSubmit={(event) => {
            event.preventDefault();
            handleAddTask(
              inputTitle,
              inputDescription,
              inputPriority,
              inputDate,
              taskStatus
            );
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
            <Button variant="primary" type="submit" size="lg">
              Submit
            </Button>
          </div>
        </form>
      </Modal>
    </>
  );
}
