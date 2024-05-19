import React from 'react'
import webIcon from '../../../images/webIcon.png'
const WebDevelopment = () => {
    return (
        <div className="col-md-4 ">
            <div className="box ">
                <div className="img-box">
                    <img src={webIcon} alt="" />
                </div>
                <div className="detail-box">
                    <h5>
                        Web Development
                    </h5>
                    <p>
                    Transform your online presence with our expert web development services. From websites to web apps, we blend creativity and technical know-how to bring your vision to life.
                    </p>
                    {/* <a href="">
                        Read More
                    </a> */}
                </div>
            </div>
        </div>
    )
}

export default WebDevelopment