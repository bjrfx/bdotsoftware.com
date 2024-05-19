import React, { Fragment } from 'react'
import Footer from '../../components/footer/Footer'
import Info from '../../components/info/Info'
import CommonHeader from '../CommonHeader'
import About from '../../components/about/About'
const AboutPage = () => {
  return (
    <Fragment>
      <div className='sub_page'>
      <CommonHeader />
      <About />
      <Info />
      <Footer />
      </div>
    </Fragment>
  )
}

export default AboutPage