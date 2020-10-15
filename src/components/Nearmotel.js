import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faStar } from '@fortawesome/free-solid-svg-icons';

function Nearmotel() {
    return (

<Container className="my-5">

<div className="row my-3">
<div className="col-md-12">
    <div className="fs2 topicmain fw500">โมเทลใกล้คุณ</div>
</div>
</div>

<div className="row">
    <div className="col-6 col-md-6 col-lg-3 p-2 p-md-3 boxmotel">
       
            <div className="bdr image-box">
                <img src={require('../img/mt1.jpg')} alt="" className="w-100"/>
            </div>
            <div className="px-2 py-3">
            <div className="row">
            <div className="col-6 mb-2 fw400"><FontAwesomeIcon icon={faMapMarkerAlt} className="text-danger" /> บางรัก</div>
            <div className="col-6 fw400 text-right"><FontAwesomeIcon icon={faStar} className="txtcoloryellow" /> 4.5</div>
            </div>
            <div className="titlenamehotel">โรงแรม โรสทาวน์ โฮเต็ล</div>
            
 
            <div className="row mt-2">
            <div className="col-12 text-left fw400">
                <div className="d-flex align-items-center">
                    <div className="pricediscount text-secondary mr-2">650 ฿</div>
                    <div className="pricehotelmain">500 ฿</div>
                    </div>
                </div>
            </div>
            </div>
        
    </div>
    <div className="col-6 col-md-6 col-lg-3 p-2 p-md-3 boxmotel">
       
            <div className="bdr image-box">
                <img src={require('../img/mt2.jpg')} alt="" className="w-100"/>
            </div>
            <div className="px-2 py-3">
            <div className="row">
            <div className="col-6 mb-2 fw400"><FontAwesomeIcon icon={faMapMarkerAlt} className="text-danger" /> ปทุมวัน</div>
            <div className="col-6 fw400 text-right"><FontAwesomeIcon icon={faStar} className="txtcoloryellow" /> 4.5</div>
            </div>
            <div className="titlenamehotel">Krung Thon Hotel</div>
                  
            <div className="row mt-2">
            <div className="col-12 text-left fw400">
                <div className="d-flex align-items-center">
                    <div className="pricediscount text-secondary mr-2">650 ฿</div>
                    <div className="pricehotelmain">500 ฿</div>
                    </div>
                </div>
            </div>
            </div>
        </div>
  
        <div className="col-6 col-md-6 col-lg-3 p-2 p-md-3 boxmotel">
       
       <div className="bdr image-box">
                <img src={require('../img/mt3.jpg')} alt="" className="w-100"/>
            </div>
            <div className="px-2 py-3">
            <div className="row">
            <div className="col-6 mb-2 fw400"><FontAwesomeIcon icon={faMapMarkerAlt} className="text-danger" /> สาทร</div>
            <div className="col-6 fw400 text-right"><FontAwesomeIcon icon={faStar} className="txtcoloryellow" /> 4.5</div>
            </div>
            <div className="titlenamehotel">โรงแรมสมานมิตร</div>
                     
            <div className="row mt-2">
            <div className="col-12 text-left fw400">
                <div className="d-flex align-items-center">
                    <div className="pricediscount text-secondary mr-2">650 ฿</div>
                    <div className="pricehotelmain">500 ฿</div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    
        <div className="col-6 col-md-6 col-lg-3 p-2 p-md-3 boxmotel">
       
       <div className="bdr image-box">
                <img src={require('../img/mt4.jpg')} alt="" className="w-100"/>
            </div>
            <div className="px-2 py-3">
            <div className="row">
            <div className="col-6 mb-2 fw400"><FontAwesomeIcon icon={faMapMarkerAlt} className="text-danger" /> สุรวงค์</div>
            <div className="col-6 fw400 text-right"><FontAwesomeIcon icon={faStar} className="txtcoloryellow" /> 4.5</div>
            </div>
            <div className="titlenamehotel">โรงแรม177 เพชรมงคล</div>
                     
            <div className="row mt-2">
            <div className="col-12 text-left fw400">
                <div className="d-flex align-items-center">
                    <div className="pricediscount text-secondary mr-2">650 ฿</div>
                    <div className="pricehotelmain">500 ฿</div>
                    </div>
                </div>
            </div>
            </div>
       
    </div>
</div>


<div className="row my-3">
<div className="col-md-12">
    <div className="fs2 topicmain fw500">สถานที่ยอดนิยม</div>
</div>
</div>

<div className="row">
<div className="col-6 col-md-6 col-lg-3 p-2 p-md-3 boxmotel">
 
        <div className="bdr image-box">
                <img src={require('../img/p1.jpg')} alt="" className="w-100"/>
            </div>
            <div className="p-3">
            <div className="titlenamehotel mb-2 text-center">กรุงเทพมหานคร</div>
 
            
            </div>
    
    </div>
    <div className="col-6 col-md-6 col-lg-3 p-2 p-md-3 boxmotel">
   
        <div className="bdr image-box">
                <img src={require('../img/p2.jpg')} alt="" className="w-100"/>
            </div>
            <div className="p-3">
            <div className="titlenamehotel mb-2 text-center">พัทยา</div>
      
           
            </div>
       
    </div>
    <div className="col-6 col-md-6 col-lg-3 p-2 p-md-3 boxmotel">
        
        <div className="bdr image-box">
                <img src={require('../img/p3.jpg')} alt="" className="w-100"/>
            </div>
            <div className="p-3">
            <div className="titlenamehotel mb-2 text-center">เชียงใหม่</div>
         
           
            </div>
       
    </div>
    <div className="col-6 col-md-6 col-lg-3 p-2 p-md-3 boxmotel">
    
        <div className="bdr image-box">
                <img src={require('../img/p4.jpg')} alt="" className="w-100"/>
            </div>
            <div className="p-3">
            <div className="titlenamehotel mb-2 text-center">ภูเก็ต</div>
         
           
            </div>
        </div>
    
</div>

<div className="row my-3">
<div className="col-md-12">
    <div className="fs2 topicmain fw500">โมเทลที่ดีที่สุด</div>
</div>
</div>

<div className="row">
    <div className="col-6 col-md-6 col-lg-3 p-2 p-md-3 boxmotel">
       
            <div className="bdr image-box">
                <img src={require('../img/mt1.jpg')} alt="" className="w-100"/>
            </div>
            <div className="px-2 py-3">
            <div className="row">
            <div className="col-6 mb-2 fw400"><FontAwesomeIcon icon={faMapMarkerAlt} className="text-danger" /> บางรัก</div>
            <div className="col-6 fw400 text-right"><FontAwesomeIcon icon={faStar} className="txtcoloryellow" /> 4.5</div>
            </div>
            <div className="titlenamehotel">โรงแรม โรสทาวน์ โฮเต็ล</div>
            
 
            <div className="row mt-2">
            <div className="col-12 text-left fw400">
                <div className="d-flex align-items-center">
                    <div className="pricediscount text-secondary mr-2">650 ฿</div>
                    <div className="pricehotelmain">500 ฿</div>
                    </div>
                </div>
            </div>
            </div>
        
    </div>
    <div className="col-6 col-md-6 col-lg-3 p-2 p-md-3 boxmotel">
       
            <div className="bdr image-box">
                <img src={require('../img/mt2.jpg')} alt="" className="w-100"/>
            </div>
            <div className="px-2 py-3">
            <div className="row">
            <div className="col-6 mb-2 fw400"><FontAwesomeIcon icon={faMapMarkerAlt} className="text-danger" /> ปทุมวัน</div>
            <div className="col-6 fw400 text-right"><FontAwesomeIcon icon={faStar} className="txtcoloryellow" /> 4.5</div>
            </div>
            <div className="titlenamehotel">Krung Thon Hotel</div>
                  
            <div className="row mt-2">
            <div className="col-12 text-left fw400">
                <div className="d-flex align-items-center">
                    <div className="pricediscount text-secondary mr-2">650 ฿</div>
                    <div className="pricehotelmain">500 ฿</div>
                    </div>
                </div>
            </div>
            </div>
        </div>
  
        <div className="col-6 col-md-6 col-lg-3 p-2 p-md-3 boxmotel">
       
       <div className="bdr image-box">
                <img src={require('../img/mt3.jpg')} alt="" className="w-100"/>
            </div>
            <div className="px-2 py-3">
            <div className="row">
            <div className="col-6 mb-2 fw400"><FontAwesomeIcon icon={faMapMarkerAlt} className="text-danger" /> สาทร</div>
            <div className="col-6 fw400 text-right"><FontAwesomeIcon icon={faStar} className="txtcoloryellow" /> 4.5</div>
            </div>
            <div className="titlenamehotel">โรงแรมสมานมิตร</div>
                     
            <div className="row mt-2">
            <div className="col-12 text-left fw400">
                <div className="d-flex align-items-center">
                    <div className="pricediscount text-secondary mr-2">650 ฿</div>
                    <div className="pricehotelmain">500 ฿</div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    
        <div className="col-6 col-md-6 col-lg-3 p-2 p-md-3 boxmotel">
       
       <div className="bdr image-box">
                <img src={require('../img/mt4.jpg')} alt="" className="w-100"/>
            </div>
            <div className="px-2 py-3">
            <div className="row">
            <div className="col-6 mb-2 fw400"><FontAwesomeIcon icon={faMapMarkerAlt} className="text-danger" /> สุรวงค์</div>
            <div className="col-6 fw400 text-right"><FontAwesomeIcon icon={faStar} className="txtcoloryellow" /> 4.5</div>
            </div>
            <div className="titlenamehotel">โรงแรม177 เพชรมงคล</div>
                     
            <div className="row mt-2">
            <div className="col-12 text-left fw400">
                <div className="d-flex align-items-center">
                    <div className="pricediscount text-secondary mr-2">650 ฿</div>
                    <div className="pricehotelmain">500 ฿</div>
                    </div>
                </div>
            </div>
            </div>
       
    </div>
</div>

</Container> 
  );

}

export default Nearmotel;