import React from 'react'
import ExpertiseAndInnovation from './whycards/ExpertiseAndInnovation'
import TailoredSolutions from './whycards/TailoredSolutions'
import QualityAndPrecision from './whycards/QualityAndPrecision'
import TimelyDeliveryAndSupport from './whycards/TimelyDeliveryAndSupport'
import { Link } from 'react-router-dom'
const Why = () => {
  return (

    <section className="why_section layout_padding">
    <div className="container">
        <div className="heading_container heading_center">
            <h2>
                Why Choose <span>Us</span>
            </h2>
        </div>
        <div className="why_container">
            {/* Expertise and Innovation */}
            <ExpertiseAndInnovation />
            {/* Tailored Solutions */}
            <TailoredSolutions />
            {/* Quality and precision */}
            <QualityAndPrecision />
            {/* Timely delivery and support */}
            <TimelyDeliveryAndSupport />
        </div>
        <div className="btn-box">
            <Link to='/why'>
                Read More
            </Link>
        </div>
    </div>
</section>


  )
}

export default Why