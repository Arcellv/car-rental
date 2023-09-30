import React, { useEffect } from 'react'
import { Container, Row, Col, Form, FormGroup, Input } from 'reactstrap'
import { Link } from 'react-router-dom'

import { useParams } from 'react-router-dom'
import blogData from '../assets/data/dataBlog'
import Helmet from '../components/helmet/Helmet'
import '../styles/BlogDetails.css'

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

                <div className="single_comment d-flex gap-3">
                  <img src={blog.commentImg} alt="" />
                  <div className="comment_content">
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

                {/* ==================== Comment Form ====================*/}

                <div className="leave_comment mt-5">
                  <h4>Leave a comment</h4>
                  <p className="description_section">
                    you must sign in to comment and make a post
                  </p>

                  <Form>
                    <FormGroup className="d-flex gap-3">
                      <Input type="text" placeholder="Full name" />
                      <Input type="Email" placeholder="Email" />
                    </FormGroup>

                    <FormGroup>
                      <textarea
                        className="w-100 py-2 px-3"
                        rows={5}
                        placeholder="Comment..."
                      ></textarea>
                    </FormGroup>

                    <button className="btn comment_btn mt-3"> Post </button>
                  </Form>
                </div>
              </div>
            </Col>

            <Col lg="4" md="4">
              <div className="recent_post mb-4">
                <h5 className="fw-bold">Recent Posts</h5>
              </div>
              {blogData.map((item) => (
                <div className="recent_blog-post mb-4">
                  <div className="recent_blog-item d=flex gap-3">
                    <img src={item.imgUrl} alt="" className="w-25 rounded-2" />
                    <h6>
                      <Link to={`/blogs/${item.title}`}>{blog.title}</Link>
                    </h6>
                  </div>
                </div>
              ))}
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}

export default BlogDetails