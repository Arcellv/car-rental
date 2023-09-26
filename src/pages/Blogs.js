import React from 'react'
import { Container, Row } from 'reactstrap'
import Helmet from '../components/helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import BlogList from '../components/UI/BlogList'

const Blogs = () => {
  return (
    <Helmet title="Blogs">
      <CommonSection title="Blogs" />
      <section>
        <Container>
          <Row>
            <BlogList />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}

export default Blogs