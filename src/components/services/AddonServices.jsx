import React from 'react'
import Ourservices from './ourservices/Ourservices'
import AllServices from './AllServices'

const AddonServices = () => {
  return (
    <section className="service_section layout_padding" >
    <div className="service_container">
        <div className="container ">
           <Ourservices />
            <div className="row">
                <AllServices />
            </div>
            {/* <div className="btn-box">
                <a >
                    View All
                </a>
            </div> */}
        </div>
    </div>
</section>
  )
}

export default AddonServices