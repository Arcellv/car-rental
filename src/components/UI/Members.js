import React from "react"
import "../../styles/Members.css"
import { Col } from "reactstrap"
import { Link } from "react-router-dom"

import ava05 from "../../assets/all-images/ava05.jpg";
import ava06 from "../../assets/all-images/ava06.jpg";
import ava07 from "../../assets/all-images/ava07.jpg";
import ava08 from "../../assets/all-images/ava08.jpg";

const Member = [
  {
    name: "John Doe",
    experience: "5 years of experience",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava05,
  },

  {
    name: "David Lisa",
    experience: "5 years of experience",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava06,
  },

  {
    name: "Hilton King",
    experience: "5 years of experience",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava07,
  },

  {
    name: "Mahamud Doe",
    experience: "5 years of experience",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava08,
  },
];

const Members = () => {
  return (
    <>
      {Member.map((item, index) => (
        <Col lg="3" md="3" sm="4" xs="6" key={index} className="mb-4">
          <div className="single_member">
            <div className="single_member-img">
              <img src={item.imgUrl} alt=""className="w-100"/>
              
              <div className="single_member-social">
                <Link to={item.fbUrl}>
                  <i class="ri-facebook-line"></i>
                </Link>
                <Link to={item.twitUrl}>
                  <i class="ri-twitter-line"></i>
                </Link>
                <Link to={item.linkedinUrl}>
                  <i class="ri-linkedin-line"></i>
                </Link>
                <Link to={item.instUrl}>
                  <i class="ri-instagram-line"></i>
                </Link>
              </div>
            </div>

            <h6 className="text-center mb-0 mt-3">{item.name}</h6>
            <p className="description_section">{item.experience}</p>
          </div>
        </Col>
      ))}
    </>
  );
};

export default Members;
