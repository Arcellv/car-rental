import React, { useEffect } from 'react'
import { Container, Row, Col } from 'reactstrap'

import { useParams } from 'react-router-dom'
import blogData from '../assets/data/dataBlog'
import Helmet from '../components/helmet/Helmet'

const BlogDetails = () => {
  
  const {slug} =  useParams()
  const blog = blogData.find(blog => blog.title === slug )

  useEffect(() => {
    window.scrollTo(0,0)
  },[blog])

  return (
    <Helmet title={blog.title}>
      <Container>
        <Row>
          <Col lg="8" md="8">
            <div className="blog_details">
              <img src={blog.imgUrl} alt="" className="w-100" />
              <h2 className="section_title">{blog.time}</h2>

              <div className="blog_publisher d-flex align-items-center gap-4 mb-4">
                <span className="blog_author">
                  <i class="ri-user-line"></i> {blog.author}
                </span>

                <span className="d-flex align-items-center gap-1 description_section">
                  <i class="ri-calendar-line"></i> {blog.date}
                </span>

                <span className="d-flex align-items-center gap-1 description_section">
                  <i class="ri-time-line"></i> {blog.time}
                </span>
              </div>
              <p className="description_section">{blog.description}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </Helmet>
  );
}

export default BlogDetails