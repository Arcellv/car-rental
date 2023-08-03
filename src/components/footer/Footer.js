import React from 'react'

import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import '../../styles/Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg='4' md='4' sm='12'>
            <div className="logo">
              <h1>
                <Link to="/home" className="d-flex align-items-center gap-2">
                  <i class="ri-roadster-fill"></i>
                  <span>
                    Rent Car <br /> Service
                  </span>
                </Link>
              </h1>
            </div>
            <p className="footer_logo-content">
              HELLO 
            </p>
          </Col>
          <Col lg='4' md='4' sm='6'>

          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer