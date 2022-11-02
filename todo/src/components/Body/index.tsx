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

import { Modal } from "../Modal";

import { Task } from "../Task";
import { NewTask } from "../TaskConstructor";
import { TaskList } from "../TaskList";

import '../Body/style.css';

/********************************************COMPONENT****************************** */

export function Body() {
  const [view, setView] = React.useState("Home");
  const [isOpenModal, setIsOpenModal] = React.useState(false);

  const [tasks,SetTasks] = React.useState([{
    id:'1',
    taskTitle:'correr',
    taskDescription:'Walks fast'
  }
  ])


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
                onClick={() => setIsOpenModal(true)}
              >
                + Add Task
              </Button>
              <TaskList tasks={tasks}/>
            </Stack>
          </Col>
        </Row>
      </Container>

      <Modal
        title="Add New Task"
        show={isOpenModal}
        onHide={() => setIsOpenModal(false)}
      >
        <form
          onSubmit={(event) => {
            event.preventDefault();
            console.log(event.target[0].value);
          }}
        >
          <Form.Group controlId="newTask">
            <Form.Text>Task Name</Form.Text>
            <Form.Control
              type="text"
              name="taskTitle"
              placeholder="Add a name for your task"
              required
              onChange={(e) => console.log(e.target.value)}
            ></Form.Control>
            <div className="task-layout">
              <Form.Text>Task Description</Form.Text>
              <Form.Control
                as="textarea"
                name="taskDescription"
                rows={3}
                placeholder="Add a description for your task"
                required
              ></Form.Control>
            </div>
            <Row>
              <Col>
                <Form.Text>Due Date</Form.Text>
                <Form.Control
                  type="date"
                  name="taskDate"
                  required
                  min=""
                ></Form.Control>
              </Col>
              <Col className="btn-priority">
                <ButtonGroup size="lg" aria-label="Priority">
                  <Button variant="success">Low</Button>
                  <Button variant="warning">Medium</Button>
                  <Button variant="danger">High</Button>
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
