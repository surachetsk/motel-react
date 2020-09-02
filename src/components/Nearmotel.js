import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';

class Nearmotel extends Component {
    render() {
  
    return (

<Container className="my-5">

<div className="row my-4">
<div className="col-md-12">
    <div className="fs2 fw400">โมเทลใกล้คุณ</div>
</div>
</div>

<div className="row">
    <div className="col-md-4">
        <div className="border">
            <div>
                <img src={require('../img/bg.jpg')} alt="" className="w-100"/>
            </div>
            <div className="p-4">
            <div className="fs15 fw400">คิมเฮ้าส์</div>
            <div className="detailmotel">Kimhouse ตั้งอยู่ในเขตบางกะปิ ห่างจากสนามราชมังคลากีฬาสถานและมหาวิทยาลัยรามคำแหงประมาณ 280 เมตร</div>
            </div>
        </div>
    </div>
    <div className="col-md-4">ddd</div>
    <div className="col-md-4">ddd</div>
</div>
</Container> 
  );

}
}

export default Nearmotel;