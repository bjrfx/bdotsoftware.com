import React from 'react'
import Footer from '../../components/footer/Footer'
import Info from '../../components/info/Info'
import CommonHeader from '../CommonHeader'
import Why from '../../components/why/Why'
const WhyPage = () => {
    return (
        <div className='sub_page'>
            <CommonHeader />
            <Why />
            <Info />
            <Footer />
        </div>
    )
}

export default WhyPage