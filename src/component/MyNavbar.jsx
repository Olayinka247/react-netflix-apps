import { Component } from "react";
import { Navbar, Nav, Form, FormControl, Dropdown } from "react-bootstrap";
import { BsBellFill } from "react-icons/bs";

class MyNavbar extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            src="netflix_logo.png"
            alt=""
            style={{ width: "89px", height: "35px" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#Homes" className="text-white font-weight-bold">
              Home
            </Nav.Link>
            <Nav.Link href="#TV Shows" className="text-white font-weight-bold">
              TV Shows
            </Nav.Link>
            <Nav.Link href="#Movies" className="text-white font-weight-bold">
              Movies
            </Nav.Link>
            <Nav.Link
              href="#Recently Added"
              className="text-white font-weight-bold"
            >
              Recently Added
            </Nav.Link>
            <Nav.Link href="#My List" className="text-white font-weight-bold">
              My List
            </Nav.Link>
          </Nav>
          <Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="mr-2"
                aria-label="Search"
              />
            </Form>
            <Nav.Link href="#deets" className="text-white font-weight-medium">
              KIDS
            </Nav.Link>
            <Nav.Link>
              <BsBellFill size="1.3rem" />
            </Nav.Link>
            <Dropdown className="mr-2">
              <Dropdown.Toggle variant="dark" id="dropdown-basic">
                <img
                  src="avatar.png"
                  alt=""
                  style={{ width: "30px", height: "30px" }}
                />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default MyNavbar;
