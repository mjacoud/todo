import React from "react";
import { Modal as BSModal } from "react-bootstrap";

export const Modal = ({ title, children, ...props }) => (
  <BSModal size="lg" centered {...props}>
    <BSModal.Header closeButton>
      <BSModal.Title>{title}</BSModal.Title>
    </BSModal.Header>

    <BSModal.Body>{children}</BSModal.Body>
  </BSModal>
);
