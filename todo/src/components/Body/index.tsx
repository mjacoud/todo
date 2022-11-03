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

/* Date Selector */

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


/********************************************COMPONENT****************************** */

export function Body() {

/*-------------View Selection-------------*/

  const [view, setView] = React.useState("Home");

  /*------------Modal Display------------*/

  const [isOpenModal, setIsOpenModal] = React.useState(false);

  /*------------Modal Inputs-------------*/

  /*Input Title*/
  const [inputTitle,setInputTitle] = React.useState('')

  const handleInputTitle = (e) => {setInputTitle(e.target.value)}

  /*Input Description*/

  const [inputDescription,setInputDescription] = React.useState('')

  const handleInputDescription = (e) => {setInputDescription(e.target.value)}

  /*Input Date*/
  const [inputDate,setInputDate] = React.useState(null)


  /*input Priority */

  const [inputPriority,setInputPriority] = React.useState('')

  /*Reset Modal */

  const resetModal = () => {setInputTitle(''),setInputDate(null),setInputDescription(''),setInputPriority('')}
/*add task*/

const handleAddTask = (inputTitle) => {setTasks([...tasks,{
  id:'2',
  taskTitle:inputTitle,
  taskDescription:'Fugir'
  }])}

/* Task List */

  const [tasks,setTasks] = React.useState([{
    id:'1',
    taskTitle:'correr',
    taskDescription:'Walks fast'
  }
  ])

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
      /******************************MODAL********************/
        title="Add New Task"
        show={isOpenModal}
        onHide={() => setIsOpenModal(false)}
      >
        <form
          onSubmit={(event) => {
            event.preventDefault();
            handleAddTask(inputTitle);
            resetModal()
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
                onChange={date => setInputDate(date)}
                required
                dateFormat="dd/MM/yyyy"
                minDate={new Date()}
                value={inputDate}
                />
              </Col>
              <Col className="btn-priority">
                <ButtonGroup size="lg" aria-label="Priority">
                  <Button onClick={()=>setInputPriority('green')} variant="success">Low</Button>
                  <Button onClick={()=>setInputPriority('yellow')}variant="warning">Medium</Button>
                  <Button onClick={()=>setInputPriority('red')}variant="danger">High</Button>
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
