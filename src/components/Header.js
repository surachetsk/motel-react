import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Nav, Navbar} from 'react-bootstrap';

class Header extends Component {
  render() {

  return (
 
    <Navbar className="bgviolet" variant="dark">
    <Container className="px-3">
    <Navbar.Brand href="#home">MOTELS THAILAND</Navbar.Brand>
    <Nav className="collapse navbar-collapse justify-content-end">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
    </Navbar>


  );

}
}

export default Header;

