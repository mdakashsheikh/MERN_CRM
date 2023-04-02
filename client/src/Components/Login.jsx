import React from "react";
import { FloatingLabel } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

export default function LoginForm() {
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-4">
          <h1>Login Form</h1>
        </div>
      </div>
      <Card className="container" style={{ width: "40rem" }}>
        <Form>
          <div className="m-3">
            <FloatingLabel controlId="email" label="email">
              <Form.Control placeholder="Enter Your Email" />
            </FloatingLabel>
          </div>
          <div className="m-3">
            <FloatingLabel controlId="pasword" label="password">
              <Form.Control type="password" placeholder="Password" />
            </FloatingLabel>
          </div>
        </Form>
        <Row className="m-3">
          <Col xs>
            <Button type="submit" variant="outline-primary">
              Login
            </Button>
          </Col>
        </Row>
      </Card>
    </div>
  );
}
