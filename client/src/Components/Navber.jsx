import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

export default function Navber() {
  return (
    <div className="md">
      <>
        <Navbar bg="info" variant="dark">
          <Container>
            <div className="m-4">
              <NavLink
                exact
                to="/"
                style={{ textDecoration: "none", color: "black" }}
              >
                <h4>Navber</h4>
              </NavLink>
            </div>
            <Nav className="me-auto">
              <div className="m-4">
                <NavLink
                  exact
                  to="/"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <h4>Home</h4>
                </NavLink>
              </div>
              <div className="m-4">
                <NavLink
                  exact
                  to="/show-data"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <h4>See-Registered</h4>
                </NavLink>
              </div>
            </Nav>
            <div className="m-4">
              <NavLink
                exact
                to="/login"
                style={{ textDecoration: "none", color: "black" }}
              >
                <h4>Login</h4>
              </NavLink>
            </div>
          </Container>
        </Navbar>
      </>
    </div>
  );
}
