import React from 'react'
import '../../styles/DriverSection.css'
import { Container, Row, Col } from 'reactstrap'
import driverimg from '../../assets/all-images/offer2.webp'


const DriverSection = () => {
  return <Container className="driver">
    <Row>
        <Col lg="6" md="6" sm="12">
            <img src={driverimg} alt="" className="w-100"/>
        </Col>

        <Col lg="6" md="6" sm="12">
            <h2 className="title_section driver_title">
                Wanna Earn with Us? So do not be late
            </h2>

            <button className="btn driver-btn mt-4">
                Become a Driver too!
            </button>
        </Col>
    </Row>
  </Container>
}

export default DriverSection