import {
  Container,
  Row,
  Col,
} from "react-bootstrap";

import React from 'react'

import '../Header/style.css';

export const Header = () => {
  return (
    <Container fluid className="header">
      <Row>
        <Col>To Do List</Col>
      </Row>
    </Container>
  )
}
