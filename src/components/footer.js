import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return(

    <div className="bgviolet">
    <Container>
        <div className="row py-5 text-light">
            <div className="col-12 col-md-6 col-lg-3 mb-4">
                <h4>Motels Thailand</h4>
                <div>ห้องพักริมทาง (อังกฤษ: motel) หรือนิยมเรียกทับศัพท์ว่า โมเท็ล หรือ โมเต็ล เป็นโรงแรมประเภทหนึ่งสำหรับนักเดินทาง โดยมักจะมีที่จอดรถอยู่บริเวณหน้าโรงแรม โมเทลเป็นที่นิยมในสหรัฐอเมริกาโดยเฉพาะกลุ่มที่ชื่นชอบการเดินทางโดยรถยนต์</div>
            </div>

            <div className="col-12 col-md-6 col-lg-3 mb-4">
                <h4>เกี่ยวกับ</h4>
                <div className="pb-2"><a href="/#" className="text-light">เกี่ยวกับเรา</a></div>
                <div className="pb-2"><a href="/#" className="text-light">คำถามที่พบบ่อย</a></div>
                <div className="pb-2"><a href="/#" className="text-light">ติดต่อเรา</a></div>
                
            </div>

            <div className="col-12 col-md-6 col-lg-3 mb-4">
                <h4>สถานที่ยอดนิยม</h4>
                <div className="pb-2"><a href="/#" className="text-light">กรุงเทพมหานคร</a></div>
                <div className="pb-2"><a href="/#" className="text-light">ภูเก็ต</a></div>
                <div className="pb-2"><a href="/#" className="text-light">กระบี่</a></div>
                <div className="pb-2"><a href="/#" className="text-light">เชียงใหม่</a></div> 
                <div className="pb-2"><a href="/#" className="text-light">พัทยา</a></div>
                <div className="pb-2"><a href="/#" className="text-light">หนองคาย</a></div> 
            </div>

            <div className="col-12 col-md-6 col-lg-3 mb-4">
                <h4>ติดต่อเรา</h4>
                <div><a href="/#" className="telnum text-light fw500">+66 089 999 9999</a></div>
                <div>สนับสนุน 7 วัน เวลา 9:00 - 18:00 น.</div>

                <div className="mt-4"><a href="/#" className="mailfooter text-light fw500">info@motelsthailand.com</a></div>
                <div>สำหรับทุกคำถาม</div>

                <div className="mt-4">
                <FontAwesomeIcon icon={faMapMarkerAlt} />  1355 Digistrict St, Suite 909 San, Francisco, CA 10001 United States
                </div>
            </div>
            
        </div>
    </Container>

    <div className="py-3 px-2 text-center text-light copyright">© Motels Thailand 2020 All rights reserved. Powered with by CloudConnect</div>
    </div>

  );
}


export default Footer;

