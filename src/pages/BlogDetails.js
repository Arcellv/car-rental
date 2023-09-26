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
      <section>
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
                <h6 className="ps-5 fw-normal">
                  <blockquote className="fs-4">{blog.quote}</blockquote>
                </h6>
                <p className="description_section">{blog.description}</p>
              </div>

              <div className="comment_list mt-5">
                <h4 className="mb-5"> 3comments</h4>

                <div className="single__comment d-flex gap-3">
                  <img src={blog.commentImg} alt="" />
                  <div className="comment__content">
                    <h6 className=" fw-bold">David Visa</h6>
                    <p className="description_section mb-0">14 July, 2022</p>
                    <p className="description_section">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eos nobis totam eius laborum molestias itaque minima
                      distinctio, quae velit tempore!
                    </p>

                    <span className="replay d-flex align-items-center gap-1">
                      <i class="ri-reply-line"></i> Replay
                    </span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}

export default BlogDetails