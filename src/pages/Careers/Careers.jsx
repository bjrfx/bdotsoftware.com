import React from 'react'
import Footer from '../../components/footer/Footer'
import Info from '../../components/info/Info'
import CommonHeader from '../CommonHeader'
import CareerContent from './CareerContent'


const Careers = () => {
  return (
    <div className='sub_page'>
        <CommonHeader />
        <CareerContent />
      <Info />
      <Footer />
    </div>
  )
}

export default Careers