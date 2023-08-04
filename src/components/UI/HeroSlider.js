import React from 'react'


import Slider from 'react-slick'
import { Container } from 'reactstrap'
import { Link } from 'react-router-dom'

import '../..//styles/HeroSlider.css'

const HeroSlider = () => {
  const settings = {
    fade: true,
    speed: 2000,
    autoplaySpeed: 3000,
    infinite: true,
    autoplay:true,
    slidesToshow:1,
    slidesToscroll:1,
    pauseOnHover: false,
  }
  return (
    <Slider {...settings} className="hero_slider">
      <div className="slider_item slider_item-01 mt0">
        <Container>
          <div className="slider_content">
            <h4 className="text-light mb-3"> For Rent $80 per day</h4>
            <h1 className="text-light mb-4">Reserve Now and get 50% Off</h1>
          </div>

          <button className="btn reserve_btn mt-4">
            <Link to="/cars">Reserve Now</Link>
          </button>
        </Container>
      </div>

      <div className="slider_item slider_item-02 mt0">
        <Container>
          <div className="slider_content">
            <h6 className="text-light mb-3"> For Rent max $80 per day</h6>
            <h1 className="text-light mb-4">Reserve Now to get 50% Off</h1>
          </div>

          <button className="btn reserve_btn mt-4">
            <Link to="/cars">Reserve Now</Link>
          </button>
        </Container>
      </div>

      <div className="slider_item slider_item-03 mt0">
        <Container>
          <div className="slider_content">
            <h6 className="text-light mb-3"> For Rent max $80 per day</h6>
            <h1 className="text-light mb-4">Reserve Now to get 50% Off</h1>
          </div>

          <button className="btn reserve_btn mt-4">
            <Link to="/cars">Reserve Now</Link>
          </button>
        </Container>
      </div>
    </Slider>
  );
}

export default HeroSlider