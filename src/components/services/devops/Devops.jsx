import React from 'react'
import devopsIcon from '../../../images/DevopsIcon.png'
const Devops = () => {
    return (
        <div className="col-md-4 ">
            <div className="box ">
                <div className="img-box">
                    <img src={devopsIcon} alt="" />
                </div>
                <div className="detail-box">
                    <h5>
                        Devops
                    </h5>
                    <p>
                    Optimize your software development with our DevOps solutions. We automate deployment, integrate processes, and foster collaboration for faster, more efficient results.
                    </p>
                    {/* <a >
                        Read More
                    </a> */}
                </div>
            </div>
        </div>
    )
}

export default Devops