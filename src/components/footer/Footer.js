import React from 'react'

import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'
import '../../styles/Footer.css'

const quickLinks = [
  {
    path: "/about",
    display: "About",
  },
  {
    path: "#",
    display: "Privacy Policy",
  },
  {
    path: "/cars",
    display: "Car List",
  },
  {
    path: "/blogs",
    display: "Blogs",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="4" sm="12">
            <div className="logo footer_logo">
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
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
              consectetur beatae dolorum rerum architecto suscipit. Doloribus
              ullam tempora reprehenderit cum?
            </p>
          </Col>
          <Col lg="2" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer_link-title">Quick Links</h5>
              <ListGroup>
                {quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-3 quick_link">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer_link-title mb-4">Head Office</h5>
              <p className="office_info">
                015 metehan-kermia, Ortakoy, Lefkosia
              </p>
              <p className="office_info">Phone: +905338840966</p>
              <p className="office_info">Email: lomendjaa@gmail.com</p>
              <p className="office_info">Office time: 9am - 4pm</p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="12">
            <div className="mb-4">
              <h5 className="footer_link-title">Newsletter</h5>
              <p className="section_description">Subscribe to our newsletter</p>
              <div className="newsletter">
                <input type="email" placeholder="Email" />
                <span>
                  <i class="ri-send-plane-line"></i>
                </span>
              </div>
            </div>
          </Col>
          <Col lg="12">
            <div className="footer_bottom">
              <p className="section_description d-flex align-items-center justify-content-center gap-1 pt-3">
                <i class="ri-copyright-line"></i> Copyright {year}, Developed by Arcel Vanda Lomendja. All rights reserved.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer