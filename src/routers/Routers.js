

import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import CarList from '../pages/CarList'
import CarDetails from '../pages/CarDetails'
import Blogs from '../pages/Blogs'
import BlogDetails from '../pages/BlogDetails'
import NotFound from '../pages/NotFound'
import Contact from '../pages/Contact'

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="home" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="cars" element={<CarList />} />
      <Route path="cars/:slug" element={<CarDetails />} />
      <Route path="blogs" element={<Blogs />} />
      <Route path="blogs/:slug" element={<BlogDetails />} />
      <Route path="Contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Routers