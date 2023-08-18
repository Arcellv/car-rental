import React from 'react'
import Slider from 'react-slick'

import '../../styles/Testimonial.css'

import ava01 from '../../assets/all-images/ava01.jpg'
import ava02 from '../../assets/all-images/ava02.avif'
import ava03 from '../../assets/all-images/ava03.jpeg'
import ava04 from '../../assets/all-images/ava04.webp'

const Testimonial = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay:true,
        speed: 1000,
        swipeToSlide:true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        responsive: [ 
            {
                breakpoint: 992,
                settings: {
                    SlidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots:true,
                },
            },
            {
                breakpoint: 575,
                settings: {
                    SlidesToShow: 1,
                    slidesToScroll:2,
                },
            }, 
        ],
    }

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p className="description_section">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
          consectetur beatae dolorum rerum architecto suscipit. Doloribus ullam
          tempora reprehenderit cum?
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava01} alt="" className="w-25 h-25 rounded-2" />
        </div>

        <div>
          <h6 className="mb-0 mt-3">John Deen</h6>
          <p className="description_section">Customer</p>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="description_section">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
          consectetur beatae dolorum rerum architecto suscipit. Doloribus ullam
          tempora reprehenderit cum?
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava02} alt="" className="w-25 h-25 rounded-2" />
        </div>

        <div>
          <h6 className="mb-0 mt-3">Dereck Humfrey</h6>
          <p className="description_section">Customer</p>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="description_section">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
          consectetur beatae dolorum rerum architecto suscipit. Doloribus ullam
          tempora reprehenderit cum?
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava03} alt="" className="w-25 h-25 rounded-2" />
        </div>

        <div>
          <h6 className="mb-0 mt-3">Ken Belmand</h6>
          <p className="description_section">Customer</p>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="description_section">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
          consectetur beatae dolorum rerum architecto suscipit. Doloribus ullam
          tempora reprehenderit cum?
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava04} alt="" className="w-25 h-25 rounded-2" />
        </div>

        <div>
          <h6 className="mb-0 mt-3">Benjin Lindow</h6>
          <p className="description_section">Customer</p>
        </div>
      </div>
    </Slider>
  );
}

export default Testimonial