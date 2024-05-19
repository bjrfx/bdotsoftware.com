import React from 'react'

const InfoContact = () => {
  return (
    <div className="info_contact">
                    <h4>
                        Address
                    </h4>
                    <div className="contact_link_box">
                        <a >
                            <i className="fa fa-map-marker" aria-hidden="true"></i>
                            <span>
                                123 Bow Street, London, Ontario, Canada
                            </span>
                        </a>
                        <a >
                            <i className="fa fa-phone" aria-hidden="true"></i>
                            <span>
                                Call +1 613-123-4567
                            </span>
                        </a>
                        <a >
                            <i className="fa fa-envelope" aria-hidden="true"></i>
                            <span>
                                contact@bdotsoftware.com
                            </span>
                        </a>
                    </div>
                </div>
  )
}

export default InfoContact