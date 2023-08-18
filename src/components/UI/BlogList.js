import React from 'react'
import { Link } from 'react-router-dom'
import { Col } from 'reactstrap'
import '../../styles/BlogList.css'
import blogData from '../../assets/data/dataBlog'

const BlogList = () => {
  return <>
    {
        blogData.map(item=>(
            <BlogItem item={item} key={item.id}/>
        ))
    }
  </>
}

const BlogItem = ({item}) => {

    const {imgUrl, title, author, date, description, time} = item

    return (
      <Col lg="4" md="4" sm="6" className="mb-5">
        <div className="blog_item">
          <img src={imgUrl} alt="" className="w-100" />
          <div className="blog_info p-3">
            <Link to={`/Blogs/${title}`} className="blog_title">
              {title}
            </Link>
            <p className="description_section mt-3">
              {description.length > 100
                ? description.substr(0, 100)
                : description}
            </p>

            <Link to={`/Blogs/${title}`} className="read_more">
              Read More
            </Link>

            <div className="blog_time pt-3 mt-3 d-flex align-items-center justify-content-between">
              <span className="blog_author">
                <i class="ri-user-line"></i> {author}
              </span>

              <div className="d-flex align-items-center gap-3">
                <span className="d-flex align-items-center gap-1 description_section">
                  <i class="ri-calendar-line"></i> {date}
                </span>

                <span className="d-flex align-items-center gap-1 description_section">
                  <i class="ri-time-line"></i> {time}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Col>
    );
}

export default BlogList