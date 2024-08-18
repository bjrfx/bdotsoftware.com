import React from 'react'
import laxmi from '../../../images/profilepic/laxmi.jpeg'
const Laxmi = () => {
    return (
        <div className="col-lg-3 col-sm-6">
            <div className="box ">
                <div className="img-box">
                    <img src={laxmi} className="img1" alt="" />
                </div>
                <div className="detail-box">
                    <h5>
                        Laxmi Phani Kiran Bandarupalli
                    </h5>
                    <p>
                    Deep Learning Enthusiast | Full-Stack Web Developer | Visual Effects Innovator | Bridging AI and Creative Design
                    </p>
                </div>
                <div className="social_box">
                    <a >
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                    </a>
                    <a >
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                    </a>
                    <a href='https://www.linkedin.com/in/developer-laxmi/'>
                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                    </a>
                    <a href='https://instagram.com/bjrfx'>
                        <i className="fa fa-instagram" aria-hidden="true"></i>
                    </a>
                    <a >
                        <i className="fa fa-youtube-play" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Laxmi;