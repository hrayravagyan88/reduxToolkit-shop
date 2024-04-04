import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function NavBar() {
  const cards = useSelector(state => state.card);
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Redux Toolkit</Navbar.Brand>
        <Nav>
          <Nav.Link to="/" as={Link}>
            Products
          </Nav.Link>
        </Nav>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
            <Nav.Link to="/card" as={Link}>My Bag {cards.length}</Nav.Link>
            </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
