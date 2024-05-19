import React, { Fragment } from 'react'
import Hero from '../components/hero/Hero'
import Services from '../components/services/Services'
import About from '../components/about/About'
import Why from '../components/why/Why'
// import Team from '../components/team/Team'
// import Client from '../components/client/Client'
import Info from '../components/info/Info'
import Footer from '../components/footer/Footer'
import LogosCarousel from '../components/client/logos/LogosCarousel'
const Home = () => {
  return (
    <Fragment>
        <Hero />
        <Services />
        <About />
        <LogosCarousel />
        <Why />
        {/* <Team />
        <Client /> */}
        <Info />
        <Footer />
    </Fragment>
  )
}

export default Home