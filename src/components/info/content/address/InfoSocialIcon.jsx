import React from 'react'

const InfoSocialIcon = ({ linkdinUrl, xUrl, instagramUrl, youtubeUrl, facebookUrl }) => {
    return (
        <div className="info_social">
            {facebookUrl && (
                <a href={facebookUrl} target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                </a>
            )}
            {xUrl && (
                <a href={xUrl} target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
            )}
            {linkdinUrl && (
                <a href={linkdinUrl} target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                </a>
            )}
            {instagramUrl && (
                <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>
            )}
            {youtubeUrl && (
                <a href={youtubeUrl} target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-youtube" aria-hidden="true"></i>
                </a>
            )}
        </div>
    );
}

export default InfoSocialIcon;
