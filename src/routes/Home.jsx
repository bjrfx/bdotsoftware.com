import React, { Fragment } from 'react'
import Hero from '../components/hero/Hero'
import Services from '../components/services/Services'
import About from '../components/about/About'
import Why from '../components/why/Why'
import Info from '../components/info/Info'
import Footer from '../components/footer/Footer'
import LogosCarousel from '../components/client/logos/LogosCarousel'
import HomePageMeta from '../pages/homePageMetaData/HomePageMeta'

const Home = () => {
  return (
    <Fragment>
      <HomePageMeta />
      <Hero />
      <Services />
      <About />
      <LogosCarousel />
      <Why />
      <Info />
      <Footer />
    </Fragment>
  )
}

export default Home