import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Col, Button, Form} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


function App() {
  return (
 
<div className="barmain">
<Container>

  <Form>
    <div className="fcw">
  <div className="text-center fs4 fw400">โมเทล</div>
  <div className="text-center fs15">แวะพักเหนื่อยกับการเดินทาง ค้นหาโมเทลที่ใกล้คุณ</div>
  </div>
  <Form.Row className="justify-content-center mt-4 align-items-center bgw">
    
  <Col lg="10" className="py-0 px-4">
  <Form.Group className="my-0 py-3">
    <Form.Control className="form-control-lg border-0 rounded-0 text-center text-md-left" type="text" placeholder="ค้นหาชื่อ / สถานที่" />
  </Form.Group>
  </Col>
  <Col lg="2" className="text-center p-0">
  <Button variant="warning" type="submit" className="btn-lg px-4 text-center w-100 rounded-0 py-4">
  <FontAwesomeIcon icon={faSearch} /> ค้นหา
  </Button>
  </Col>
  </Form.Row>
</Form>
</Container>
</div>




  );
}

export default App;
