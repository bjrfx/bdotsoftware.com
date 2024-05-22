import React from 'react'


const SingleService = ({title, description, image}) => {
  return (
    <div className="col-md-4 ">
            <div className="box" >
                <div className="img-box d-flex flex-column align-items-center">
                    <img src={image} alt="" />
                </div>
                <div className="detail-box">
                    <h5>
                        {title}
                    </h5>
                    <p>
                        {description}
                    </p>
                    {/* <a href="">
                        Read More
                    </a> */}
                </div>
            </div>
        </div>
  )
}

export default SingleService