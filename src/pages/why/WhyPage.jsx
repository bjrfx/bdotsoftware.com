import React, { Fragment } from 'react'
import Footer from '../../components/footer/Footer'
import Info from '../../components/info/Info'
import CommonHeader from '../CommonHeader'
import Why from '../../components/why/Why'
import WhyMetaData from './WhyMetaData'

const WhyPage = () => {
    return (
        <Fragment>
            <WhyMetaData />
            <div className='sub_page'>
            <CommonHeader />
            <Why />
            <Info />
            <Footer />
        </div>
        </Fragment>
    )
}

export default WhyPage