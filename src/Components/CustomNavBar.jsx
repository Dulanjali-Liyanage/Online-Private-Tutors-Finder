import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  NavItem
} from "react-bootstrap";
import { Link } from "react-router-dom";

export default class CustomNavBar extends Component {
  render() {
    return (
      <Navbar bg="primary" variant="dark" expand="lg">
        <Navbar.Brand href="/">OnlinePrivateTutorsFinder</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link eventKey={1} href="/">
              Home
            </Nav.Link>
            <Nav.Link eventKey={2} href="/about">
              About
            </Nav.Link>
            <Nav.Link eventKey={1} href="/news">
              News
            </Nav.Link>
            {/* <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#news">News</Nav.Link> */}
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="primary">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
