import React from 'react'
import client1 from '../../../images/client1.jpg'
const AlexM = () => {
    return (
        <div className="item">
            <div className="box">
                <div className="img-box">
                    <img src={client1} alt="" className="box-img" />
                </div>
                <div className="detail-box">
                    <div className="client_id">
                        <div className="client_info">
                            <h6>
                                Alex M
                            </h6>
                            <p>

                            </p>
                        </div>
                        <i className="fa fa-quote-left" aria-hidden="true"></i>
                    </div>
                    <p>
                        I can't say enough good things about bdotsoftware. From day one, they demonstrated a deep understanding of our project requirements and offered valuable insights that helped us achieve our goals. The team's professionalism and expertise are unmatched, and the final product speaks for itself. We couldn't be happier with the results! </p>
                </div>
            </div>
        </div>
    )
}

export default AlexM