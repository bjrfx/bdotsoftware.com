import React, { Fragment } from 'react'

import Info from '../../components/info/Info'
import Footer from '../../components/footer/Footer'
import CommonHeader from '../CommonHeader'
import AddonServices from '../../components/services/AddonServices'

const ServicePage = () => {
  return (
    <Fragment>
        <div className='sub_page'>
        <CommonHeader />
        <AddonServices />
        <Info />
        <Footer />
        </div>
    </Fragment>
  )
}

export default ServicePage