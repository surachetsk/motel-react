import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Nav, Navbar} from 'react-bootstrap';


function Header() {
  return(

    <div className="bgviolet">
    <Container>
    <Navbar variant="dark" expand="lg">
      <Navbar.Brand href="#home">MOTELS THAILAND</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="justify-content-end" style={{ width: "100%" }}>
          <Nav.Link href="#home" className="text-light">หนัาหลัก</Nav.Link>
          <Nav.Link href="#link" className="text-light">สถานที่ยอดนิยม</Nav.Link>
          <Nav.Link href="#link" className="text-light">เกียวกับเรา</Nav.Link>
          {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown" className="text-light">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </Container>
    </div>

  );
}


export default Header;

