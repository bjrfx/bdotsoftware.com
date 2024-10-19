import React, { Fragment } from 'react'
import ServiceRequestForm from '../service/ServiceRequestForm'
import CommonHeader from '../CommonHeader'
import Info from '../../components/info/Info'
import Footer from '../../components/footer/Footer'
import { Link } from 'react-router-dom'
import RequestAServiceMetaData from './RequestAServiceMetaData'
const RequestAService = () => {
    return (
       <Fragment>
        <RequestAServiceMetaData />
         <div className='sub_page'>
            <CommonHeader />
            <div style={{ padding: '10%' }}>
                <h1 style={{ textAlign: 'center', marginBottom: '5%' }}>Request a Service or Quote</h1>
                <h6 style={{ textAlign: 'center', marginBottom: '5%' }}>
                    Interested in exploring everything we offer? Click here to
                    <Link to='/services'> view all our services</Link>.
                </h6>
                <ServiceRequestForm />
            </div>
            <Info />
            <Footer />
        </div>
       </Fragment>
    )
}

export default RequestAService