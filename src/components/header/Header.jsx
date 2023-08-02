import React from 'react'

import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import '../../styles/Header.css'

const Header = () => {
  return (
    <header className="header">
      {/*======================== Header-Top ==================== */}
      <div className="header_top">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <div className="header_top_left">
                <span>Need Help?</span>
                <span className="header_top_help">
                  <i class="ri-phone-fill"></i> +90 533-884-0966
                </span>
              </div>
            </Col>

            <Col lg="6" md="6" sm="6">
              <div className="header_top_right">
                <Link to="#"> 
                  <i class="ri-login-circle-line"></i>Log in
                </Link>
                <Link to="#">
                  <i class="ri-user-line"></i>Sign up
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </header>
  );
}

export default Header