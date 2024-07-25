import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Links = () => {
    const navigate = useNavigate();
    const handleClick = (to) => (e) => {
        e.preventDefault();
        navigate(to);
        window.scrollTo(0, 0);
    };
    return (
        <div className="col-md-6 col-lg-2 mx-auto info_col">
            <div className="info_link_box">
                <h4>
                    Links
                </h4>
                <div className="info_links">
                    <Link onClick={handleClick('/')} to='/'>
                    <a className="" >
                        Home
                    </a>
                    </Link>
                    <Link onClick={handleClick('/about')} to='/about'>
                    <a className="" >
                        About
                    </a>
                    </Link>
                    <Link onClick={handleClick('/services')} to='/services'>
                    <a className="" >
                        Services
                    </a>
                    </Link>
                    <Link onClick={handleClick('/why')} to='/why'>
                    <a className="" >
                        Why Us
                    </a>
                    </Link>
                    <Link onClick={handleClick('/team')} to='/team'>
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