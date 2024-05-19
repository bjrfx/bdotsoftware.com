import React from 'react'
import account from '../../../images/icons8-account.png'
const JohnR = () => {
    return (
        <div className="item">
            <div className="box">
                <div className="img-box">
                    <img src={account} alt="" width="100rem" className="box-img" />
                </div>
                <div className="detail-box">
                    <div className="client_id">
                        <div className="client_info">
                            <h6>
                                John R
                            </h6>
                            <p>

                            </p>
                        </div>
                        <i className="fa fa-quote-left" aria-hidden="true"></i>
                    </div>
                    <p>
                        As a startup, finding a reliable digital partner was crucial for our success, and bdotsoftware delivered beyond our wildest dreams. Their team went above and beyond to understand our vision and translate it into a stunning website that truly captures the essence of our brand. The level of professionalism and expertise they bring to the table is truly impressive. Highly recommend bdotsoftware to anyone looking for top-notch web development services!</p>
                </div>
            </div>
        </div>
    )
}

export default JohnR