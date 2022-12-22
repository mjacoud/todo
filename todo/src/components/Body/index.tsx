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

import { TaskList } from "../TaskList";

import "../Body/style.css";

/* Slices */

import { useViews } from "../../redux/Slices/slicesViews";

/* Date Selector */

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

/* Random ID Generator */

import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { addTask, useTasks } from "../../redux/Slices/slicesTasks";
import { AddTaskForm } from "../AddTaskForm";
import { ViewList } from "../ViewList";

/*******************COMPONENT****************************** */

export function Body() {
  const taskList = useSelector(useTasks);
  /*-------------View Selection-------------*/

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

  const dispatch = useDispatch();

  return (
    <>
      <Container fluid>
        <Row className="body">
          <Col xs="3" className="menu">
            <div className="defaultView-menu">
              <ViewList />
            </div>
          </Col>

          <Col className="index">
            <Stack gap={4} className="taskMenu">
              <AddTaskForm />
              <TaskList />
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
            dispatch(addTask);
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
                  <Button>Low</Button>
                  <Button>Medium</Button>
                  <Button>High</Button>
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
