import React, { Fragment } from 'react';
import InfoSocialIcon from './InfoSocialIcon';

const InfoContact = ({ name, address, number, email, linkdinUrl, xUrl, youtubeUrl, instagramUrl }) => {
    return (
        <Fragment>
            <div className="info_contact">
                <h4>{name}</h4>
                <div className="contact_link_box">
                    <a href={`https://www.google.com/maps/search/${encodeURIComponent(address)}`} target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-map-marker" aria-hidden="true"></i>
                        <span>{address}</span>
                    </a>
                    <a href={`tel:${number}`}>
                        <i className="fa fa-phone" aria-hidden="true"></i>
                        <span>{number}</span>
                    </a>
                    <a href={`mailto:${email}`}>
                        <i className="fa fa-envelope" aria-hidden="true"></i>
                        <span>{email}</span>
                    </a>
                </div>
            </div>
            <InfoSocialIcon
                linkdinUrl={linkdinUrl}
                xUrl={xUrl}
                youtubeUrl={youtubeUrl}
                instagramUrl={instagramUrl}
            />
        </Fragment>
    );
};

export default InfoContact;
