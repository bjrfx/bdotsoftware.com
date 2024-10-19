import React, { Fragment } from 'react'
import InfoContact from './InfoContact'
// import InfoSocialIcon from './InfoSocialIcon'

const Address = ({name, address, number, email, linkdinUrl, xUrl, youtubeUrl, instagramUrl}) => {
    return (
        <Fragment>
            <div className="col-md-6 col-lg-3 info_col">
                <InfoContact name = {name} address = {address} number = {number} email = {email} linkdinUrl = {linkdinUrl} xUrl = {xUrl} youtubeUrl = {youtubeUrl} instagramUrl = {instagramUrl}/>
                {/* <InfoSocialIcon /> */}
            </div>
        </Fragment>
    )
}

export default Address