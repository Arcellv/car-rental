import React from 'react'
import { Container, Row, Col, Form, FormGroup, Input } from 'reactstrap'
import Helmet from '../components/helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import { Link } from 'react-router-dom'
import '../styles/Contact.css'

const Contact = () => {
    const socialLinks = [
      {
        url: "#",
        icon: "ri-facebook-line",
      },
      {
        url: "#",
        icon: "ri-instagram-line",
      },
      {
        url: "#",
        icon: "ri-linkedin-line",
      },
      {
        url: "#",
        icon: "ri-twitter-line",
      },
    ];

  return (
    <Helmet title="Contact">
      <CommonSection title="Contact" />
      <section>
        <Container>
          <Row>
            <Col lg="7" md="7">
              <h6 className="fw-bold">Get In Touch</h6>
              <Form>
                <FormGroup className="contact_form">
                  <Input placeholder="Your Name" type="text"></Input>
                </FormGroup>
                <FormGroup className="contact_form">
                  <Input placeholder="Email" type="email"></Input>
                </FormGroup>
                <FormGroup className="contact_form">
                  <textarea
                    rows={10}
                    placeholder="Message"
                    className="w-100 py-2 px-3"
                  ></textarea>
                </FormGroup>

                <button className="contact_btn" type="submit">
                  Send
                </button>
              </Form>
            </Col>

            <Col lg="5" md="5">
              <div className="contact_info">
                <h6 className="fw-bold">Contact Information</h6>
                <p className="description_section mb-0">
                  015 metehan-kermia, Ortakoy, Lefkosia
                </p>
                <div className="d-flex align-items-center gap-2">
                  <h6 className="fs-6 mb-0">Phone: </h6>
                  <p className="description_section mb-0">+905338840966</p>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <h6 className="mb-0 fs-6">Email: </h6>
                  <p className="description_section mb-0">
                    lomendjaa@gmail.com
                  </p>
                </div>
                <h6 className="fw-bold mt-4">Follow Us:</h6>
                <div className="d-flex align-items-center gap-4 mt-3">
                  {socialLinks.map((item, index) => (
                    <Link to={item.url} key={index} className="social_link">
                      <i class={item.icon}></i>
                    </Link>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}

export default Contact