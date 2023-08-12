import React from 'react'

import { Container, Row, Col } from 'reactstrap'
import '../../styles/AboutSection.css'
import Img from '../../assets/all-images/offer2.webp'

const AboutSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about_section">
              <h4 className="subtitle_section">About us</h4>
              <h2 className="title_section">
                Welcome to our car rental service
              </h2>
              <p className="description_section">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
                consectetur beatae dolorum rerum architecto suscipit. Doloribus
                ullam tempora reprehenderit cum?
              </p>

              <div className="about_section d-flex align-items-center">
                <p className="section_description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Lorem, ipsum dolor sit
                  amet
                </p>
                <p className="section_description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Lorem, ipsum dolor sit
                  amet
                </p>
              </div>

              <div className="about_section d-flex align-items-center">
                <p className="section_description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Lorem, ipsum dolor sit
                  amet
                </p>
                <p className="section_description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Lorem, ipsum dolor sit
                  amet
                </p>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about_img">
              <img src={Img} alt="" className="w-100"/>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AboutSection