import React from 'react'

import { Container, Row, Col } from 'reactstrap'
import "../../styles/DriverSection.css";
import driver_img from '../../assets/all-images/car1.avif'


const DriverSection = () => {
  return (
    <section className="driver">
      <Container>
        <Row>
          <Col lg="6" md="6" sm="12" className="driver-img">
            <img src={driver_img} alt="" className="w-100" />
          </Col>

          <Col lg="6" md="6" sm="12">
            <h2 className="title_section driver_title">
              Want to Earn with Us? So do not be late
            </h2>

            <button className="btn driver-btn mt-4">
              Become a Driver too!
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
  
}

export default DriverSection