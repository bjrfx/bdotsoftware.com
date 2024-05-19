import React, { Fragment } from 'react'
import InfoContact from './InfoContact'
import InfoSocialIcon from './InfoSocialIcon'

const Address = () => {
    return (
        <Fragment>
            <div className="col-md-6 col-lg-3 info_col">
                <InfoContact />
                <InfoSocialIcon />
            </div>
        </Fragment>
    )
}

export default Address