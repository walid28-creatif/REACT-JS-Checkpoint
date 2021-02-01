import React, { component } from "react";

import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  Carousel,
  Button,
} from "react-bootstrap";

function App() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">GoMyCode</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">GoMyCode</Nav.Link>
            <Nav.Link href="#home">Dashboard</Nav.Link>
            <Nav.Link href="#home">Checkpoint</Nav.Link>
            <Nav.Link href="#home">Calendar</Nav.Link>
            <Nav.Link href="#home">One to one interview</Nav.Link>
            <Nav.Link href="#home">Performance</Nav.Link>
            <NavDropdown title=" Med WAlid azzouzi " id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Mohamed WAlid AZZOUZI
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                click her to send an email to Azzouzi.walid28@gmail.com
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                click her to call 26337770
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Tunis Hackerspace
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <NavDropdown.Item href="#action/3.4">Sign in</NavDropdown.Item>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://matzav.com/wp-content/uploads/2019/11/facebook1024.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://centaur-wp.s3.eu-central-1.amazonaws.com/designweek/prod/content/uploads/2019/11/05110019/banner-facebook.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://static.wixstatic.com/media/cb0d95_5a3a537fa0844f18ba669c3e3dcd14a4~mv2.gif"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
export default App;
