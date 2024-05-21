import React from 'react'
import Ourservices from './ourservices/Ourservices'
import { Link } from 'react-router-dom'
import servicesData from './servicesData'
import SingleService from './SingleService'
const Services = () => {
    return (

        <section className="service_section layout_padding">
            <div className="service_container">
                <div className="container ">
                    <Ourservices />
                    <div className="row">
                        <SingleService 
                        // Devops
                        title={servicesData[0].title}
                        description={servicesData[0].description}
                        image={servicesData[0].image}
                        />
                        <SingleService
                        // Motion Graphics
                        title={servicesData[1].title}
                        description={servicesData[1].description}
                        image={servicesData[1].image}
                        />
                        <SingleService
                        // Web Development
                        title={servicesData[4].title}
                        description={servicesData[4].description}
                        image={servicesData[4].image}
                        />
                    </div>
                    <div className="btn-box">
                <Link to='/services'>
                
                    View All
               
                </Link>
            </div>
                </div>
            </div>
        </section>
    )
}

export default Services