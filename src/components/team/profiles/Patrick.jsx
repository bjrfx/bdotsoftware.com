import React from 'react'
import patrick from '../../../images/profilepic/patric.jpeg'
const Patrick = () => {
    return (
        <div className="col-lg-3 col-sm-6">
            <div className="box ">
                <div className="img-box">
                    <img src={patrick} className="img1" alt="" />
                </div>
                <div className="detail-box">
                    <h5>
                    Patrick De Paepe
                    </h5>
                    <p>
                    Data Analyst || Generative AI enthousiast || Machine Learning and AI enthousiast || Python Developer
                    </p>
                </div>
                <div className="social_box">
                    <a >
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                    </a>
                    <a >
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                    </a>
                    <a href='https://www.linkedin.com/in/patrick-de-paepe-b071a7169/'>
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

export default Patrick