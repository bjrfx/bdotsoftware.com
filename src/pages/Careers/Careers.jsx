import React, { Fragment } from 'react'
import Footer from '../../components/footer/Footer'
import Info from '../../components/info/Info'
import CommonHeader from '../CommonHeader'
import CareerContent from './CareerContent'
import CareersMetaData from './metaData/CareersMetaData'


const Careers = () => {
  return (
    <Fragment>
      <CareersMetaData />
      <div className='sub_page'>
        <CommonHeader />
        <CareerContent />
      <Info />
      <Footer />
    </div>
    </Fragment>
  )
}

export default Careers