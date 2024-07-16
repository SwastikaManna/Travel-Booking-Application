
import React from 'react'
import Header from './../Headers/Header'
import Footer from './../Footer/Footer'
import Routers from '../../router/Routers'

const Layout = () => {
  return (
    <>
      <Header />
        <Routers />
      <Footer />
    </>
  )
}

export default Layout