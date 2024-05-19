import React from 'react'
import client2 from '../../../images/client2.jpg'
const EmilyJ = () => {
    return (
        <div className="item">
            <div className="box">
                <div className="img-box">
                    <img src={client2} alt="" className="box-img" />
                </div>
                <div className="detail-box">
                    <div className="client_id">
                        <div className="client_info">
                            <h6>
                                Emily J
                            </h6>
                            <p>

                            </p>
                        </div>
                        <i className="fa fa-quote-left" aria-hidden="true"></i>
                    </div>
                    <p>
                        Working with bdotsoftware was an absolute pleasure! Their attention to detail and commitment to delivering top-notch results exceeded our expectations. Our website looks fantastic, and we've received numerous compliments on the sleek design and seamless functionality. Highly recommend!</p>
                </div>
            </div>
        </div>
    )
}

export default EmilyJ