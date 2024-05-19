import React from 'react'
import account from '../../../images/icons8-account.png'
const SarvanaKumar = () => {
    return (
        <div className="col-lg-3 col-sm-6">
            <div className="box ">
                <div className="img-box">
                    <img src={account} className="img1" alt="" />
                </div>
                <div className="detail-box">
                    <h5>
                        Sarvana Kumar
                    </h5>
                    <p>
                        Devops
                    </p>
                </div>
                <div className="social_box">
                    <a >
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                    </a>
                    <a >
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                    </a>
                    <a >
                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                    </a>
                    <a >
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

export default SarvanaKumar