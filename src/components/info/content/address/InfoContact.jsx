import React, { Fragment } from 'react'
import InfoSocialIcon from './InfoSocialIcon'
const InfoContact = ({name, address, number, email, linkdinUrl}) => {
  return (
    <Fragment>
        <div className="info_contact">
                    <h4>
                         {name}
                    </h4>
                    <div className="contact_link_box">
                        <a >
                            <i className="fa fa-map-marker" aria-hidden="true"></i>
                            <span>
                                  {address}
                            </span>
                        </a>
                        <a >
                            <i className="fa fa-phone" aria-hidden="true"></i>
                            <span>
                                {number}
                            </span>
                        </a>
                        <a >
                            <i className="fa fa-envelope" aria-hidden="true"></i>
                            <span>
                                 {email}
                            </span>
                        </a>
                    </div>
                </div>
                <InfoSocialIcon linkdinUrl = {linkdinUrl}/>
    </Fragment>
  )
}

export default InfoContact