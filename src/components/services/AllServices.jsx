import React, { Fragment } from 'react'
import servicesData from './servicesData'

const AllServices = () => {
  return (
    <Fragment>
    {servicesData.map((data) => {
        return (
        <div className="col-md-4 ">
            <div className="box" key={data.id}>
                <div className="img-box d-flex flex-column align-items-center">
                    <img src={data.image} alt="" />
                </div>
                <div className="detail-box">
                    <h5>
                       {data.id}. {data.title}
                    </h5>
                    <p>
                        {data.description}
                    </p>
                    {/* <a href="">
                        Read More
                    </a> */}
                </div>
            </div>
        </div>
        )
    })}
</Fragment>
  )
}

export default AllServices