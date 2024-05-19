import React from 'react'
import motionIcon from '../../../images/motionIcon.png'
const MotionGraphics = () => {
    return (
        <div className="col-md-4 ">
            <div className="box ">
                <div className="img-box">
                    <img src={motionIcon} alt="" />
                </div>
                <div className="detail-box">
                    <h5>
                        Motion Graphics for Web
                    </h5>
                    <p>
                    Engage your audience with captivating web motion graphics. From animated logos to interactive storytelling, we create immersive experiences that leave a lasting impression.
                    </p>
                    {/* <a >
                        Read More
                    </a> */}
                </div>
            </div>
        </div>
    )
}

export default MotionGraphics