import {
  Container,
  Row,
  Col,
} from "react-bootstrap";

import '../Footer/style.css';

import React from "react";

function Footer() {
  return (
    <Container fluid className="footer">
      <Row>
        <Col>Copyright © 2022 mjacoud</Col>
      </Row>
    </Container>
  )
}

export default Footer
