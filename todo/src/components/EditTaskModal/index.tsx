import React, { useState } from "react";
import { Form, Modal as BSModal } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { useTasks, updateTaskTitle } from "../../redux/Slices/slicesTasks";

/*------------EDIT Modal ------------*/

export const Modal = ({ title, children, data, ...props }) => {
  /* *******STATES****** */

  /* TITLE INPUT AVAILABLE */

  const [isTitleInputAvailable, setIsTitleInputAvailable] =
    React.useState(true);

  /* EDIT TITLE INPUT */

  const [newTitle, setNewTitle] = useState(title);

  /************  DISPATCH ***********/

  const dispatch = useDispatch();

  const tasksTeste = useSelector(useTasks);

  /* **************HANDLERS ********* */

  /*  Title Handler  */

  const handleIsTitleInputAvailable = (isTitleInputAvailable) => {
    if (isTitleInputAvailable == true) {
      setIsTitleInputAvailable(false);
      dispatch(updateTaskTitle({ ...data, taskTitle: newTitle }));
    } else {
      setIsTitleInputAvailable(true);
      dispatch(updateTaskTitle({ ...data, taskTitle: newTitle }));
    }
  };

  const handleTaskTitleUpdate = (e) => {
    e.preventDefault();
    setNewTitle(e.target.value);
  };

  /* COMPONENT */

  return (
    <>
      <BSModal size="lg" centered {...props}>
        <BSModal.Header closeButton>
          <Form.Control
            as="input"
            plaintext={isTitleInputAvailable}
            readOnly={isTitleInputAvailable}
            value={newTitle}
            style={
              isTitleInputAvailable
                ? { width: "5rem" }
                : { width: "18rem", fontWeight: "700", fontSize: "2rem" }
            }
            onChange={handleTaskTitleUpdate}
          ></Form.Control>
          <a
            href=""
            onClick={(e) => {
              handleIsTitleInputAvailable(isTitleInputAvailable);
              e.preventDefault();
              console.log(isTitleInputAvailable);
            }}
          >
            <span className="material-symbols-outlined">edit</span>
          </a>
        </BSModal.Header>

        <BSModal.Body>{children}</BSModal.Body>
      </BSModal>
    </>
  );
};
