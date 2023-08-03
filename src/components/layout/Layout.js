

import React, { Fragment } from 'react'

import Header from '../header/Header'
import Footer from '../footer/Footer'
import Routers from '../../routers/Routers'



const Layout = () => {
  return <Fragment>
    <Header />
    <div>
        <Routers/>
    </div>
    <Footer />
  </Fragment>
}

export default Layout