import React from "react";
import { Form, Modal as BSModal } from "react-bootstrap";
import { Body } from "../Body";
import { Task } from "../Task";
import { useTasks } from "../../redux/slicesTasks";
import { useSelector } from "react-redux";

/*------------EDIT Modal ------------*/

export const Modal = ({
  title,
  children,

  ...props
}) => {
  const [isTitleInputAvailable, setIsTitleInputAvailable] =
    React.useState(true);

  const tasksTeste = useSelector(useTasks);

  const handleIsTitleInputAvailable = (isTitleInputAvailable) => {
    if (isTitleInputAvailable == true) {
      setIsTitleInputAvailable(false);
    } else {
      setIsTitleInputAvailable(true);
    }
  };

  return (
    <>
      <BSModal size="lg" centered {...props}>
        <BSModal.Header closeButton>
          <Form.Control
            as="input"
            plaintext={isTitleInputAvailable}
            readOnly={isTitleInputAvailable}
            value={tasksTeste[0].taskTitle}
            style={
              isTitleInputAvailable
                ? { width: "5rem" }
                : { width: "18rem", fontWeight: "700", fontSize: "2rem" }
            }
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
