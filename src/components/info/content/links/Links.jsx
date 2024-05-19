import React from 'react'
import { Link } from 'react-router-dom'

const Links = () => {
    return (
        <div className="col-md-6 col-lg-2 mx-auto info_col">
            <div className="info_link_box">
                <h4>
                    Links
                </h4>
                <div className="info_links">
                    <Link to='/'>
                    <a className="" >
                        Home
                    </a>
                    </Link>
                    <Link to='/about'>
                    <a className="" >
                        About
                    </a>
                    </Link>
                    <Link to='/services'>
                    <a className="" >
                        Services
                    </a>
                    </Link>
                    <Link to='/why'>
                    <a className="" >
                        Why Us
                    </a>
                    </Link>
                    <Link to='/team'>
                    <a className="" >
                        Team
                    </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Links