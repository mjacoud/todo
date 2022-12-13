import React, { useState } from "react";

/* REACT BOOTSTRAP */

import { Row, Col, Button, Form, ButtonGroup } from "react-bootstrap";
import { Modal } from "../EditTaskModal";

/* REDUX */

import { useDispatch, useSelector } from "react-redux";
import {
  deleteTask,
  useTasks,
  updateTaskDescription,
  updateTaskPriority,
  updateTaskDueDate,
} from "../../redux/Slices/slicesTasks";

/* DATE SELECTOR */

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

/* COMPONENTE */

export const Task = ({ data }) => {
  const [isChecked, setIsChecked] = useState(false);

  /*------------EDIT TASK Modal Display------------*/

  const [isEditTaskModalOpen, setIsEditTaskModalOpen] = React.useState(false);
  /*------------EDIT TASK Description Modal Button ------------*/

  /*Dispatch */

  const dispatch = useDispatch();

  /*----------------- CHANGE DESCRIPTION -------------*/

  /* STATE - DESCRIPTION INPUT*/

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

  /* STATE - DATE UPDATE */

  const [newDate, setNewDate] = useState(new Date(data.date));
  console.log(data.date, "1");
  console.log(newDate, "2");
  /* TRANSFORM - FORMAT DATE */

  /*   const transformDate = (date) => {
    let getDay = date.slice(5, 7);
    let getMonth = date.slice(0, 3);
    let getYear = date.slice(8, 12);
    let monthToLowercase = getMonth.toLowerCase();
    let months = [
      "jan",
      "feb",
      "mar",
      "apr",
      "may",
      "jun",
      "jul",
      "aug",
      "sep",
      "oct",
      "nov",
      "dec",
    ];
    let monthInNumber = months.indexOf(monthToLowercase);
    return
  }; */

  const handleDateFormat = (date) => {
    let dateToString = date.toString();
    let formatDate = dateToString.slice(4, 15);
    return formatDate;
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
                  <DatePicker
                    selected={newDate}
                    onChange={(date) => {
                      setNewDate(date);
                      dispatch(
                        updateTaskDueDate({
                          ...data,
                          date: handleDateFormat(date),
                        })
                      );
                    }}
                    dateFormat="dd/MM/yyyy"
                    minDate={new Date(data.date)}
                    value={newDate}
                  />
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
function parseISO(date: any) {
  throw new Error("Function not implemented.");
}
