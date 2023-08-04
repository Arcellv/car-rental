import React from 'react'

import HeroSlider from '../components/UI/HeroSlider'
import Helmet from '../components/helmet/Helmet'

import { Container, Row, Col } from 'reactstrap'

const Home = () => {
  return <Helmet title="Home">
    <section className="p-0 hero_slider-section">
      <HeroSlider/>
    </section>
  </Helmet>
}

export default Home