import React from 'react'
import ExpertiseAndInnovation from './whycards/ExpertiseAndInnovation'
import TailoredSolutions from './whycards/TailoredSolutions'
import QualityAndPrecision from './whycards/QualityAndPrecision'
import TimelyDeliveryAndSupport from './whycards/TimelyDeliveryAndSupport'
import { Link, useNavigate } from 'react-router-dom'
const Why = () => {
    const navigate = useNavigate();
    const handleClick = (to) => (e) => {
        e.preventDefault();
        navigate(to);
        window.scrollTo(0, 0);
    };
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
            <Link onClick={handleClick('/why')} to='/why'>
                Read More
            </Link>
        </div>
    </div>
</section>


  )
}

export default Why