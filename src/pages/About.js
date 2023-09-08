import React from 'react'
import Helmet from '../components/helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import AboutSection from '../components/UI/AboutSection'
import { Container, Row, Col } from 'reactstrap'
import DriverSection from '../components/UI/DriverSection'
import DriveImg from '../assets/all-images/drive.webp'
import Members from '../components/UI/Members'
import '../styles/About.css'

const About = () => {
  return (
    <Helmet title="About">
      <CommonSection title="About Us" />
      <AboutSection aboutClass="aboutPage"/>

      <section className="page_section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="page_img">
                <img src={DriveImg} alt="" className="w-100 rounded-3" />
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="page_content">
                <h2 className="section_title">
                  We Commit Ourself to Provide Safe Solution for your Best
                  Interest
                </h2>
                <p className="description_section">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam consectetur beatae dolorum rerum architecto suscipit.
                  Doloribus ullam tempora reprehenderit cum?
                </p>
                <p className="description_section">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam consectetur beatae dolorum rerum architecto suscipit.
                  Doloribus ullam tempora reprehenderit cum?
                </p>

                <div className="d-flex align-items-center gap-3 mt-4">
                  <span><i class="ri-phone-line"></i></span>
                </div>

                <div>
                  <h6 className="subtitle_section">Need Any Help</h6>
                  <h4>+905338840966</h4>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <DriverSection />

      <section >
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="subtitle_section">Experts</h6>
              <h2 className="title_section"> Our Members</h2>
            </Col>
            <Members/>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}

export default About