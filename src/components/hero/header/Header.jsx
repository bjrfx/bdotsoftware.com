import React, { useContext } from 'react';
import BGwhiteLogo from '../../../images/Logos/BG-white-trans.png';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Auth/AuthContext'; // Import AuthContext
import { auth } from '../../../firebase/firebaseConfig'; // Import Firebase auth
import { signOut } from 'firebase/auth'; // Import signOut

const Header = () => {
    const { currentUser } = useContext(AuthContext); // Get the current user from AuthContext
    const navigate = useNavigate();

    const handleClick = (to) => (e) => {
        e.preventDefault();
        navigate(to);
        window.scrollTo(0, 0);
    };

    const handleLogout = async () => {
        await signOut(auth);
        navigate('/');
    };

    return (
        <header className="header_section">
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg custom_nav-container ">
                    <Link className="navbar-brand" onClick={handleClick('/')} to='/'>
                        <span>
                            <img src={BGwhiteLogo} width="80rem" alt="" />
                        </span>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className=""> </span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav  ">
                            <Link className="nav-item" onClick={handleClick('/')} to='/'>
                                <a className="nav-link">Home</a>
                            </Link>
                            <Link className="nav-item" onClick={handleClick('/about')} to='/about'>
                                <a className="nav-link">About</a>
                            </Link>
                            <Link className="nav-item" onClick={handleClick('/services')} to='/services'>
                                <a className="nav-link">Services</a>
                            </Link>
                            <Link className="nav-item" onClick={handleClick('/why')} to='/why'>
                                <a className="nav-link">Why Us</a>
                            </Link>
                            <Link className="nav-item" onClick={handleClick('/careers')} to='/careers'>
                                <a className="nav-link">Careers</a>
                            </Link>
                            <Link className="nav-item" onClick={handleClick('/blog')} to='/blog'>
                                <a className="nav-link">Blog</a>
                            </Link>
                            {currentUser ? (
                                <Link className="nav-item" onClick={handleLogout} to='/'>
                                    <a className="nav-link">Logout</a>
                                </Link>
                            ) : (
                                <Link className="nav-item" onClick={handleClick('/signin')} to='/signin'>
                                    <a className="nav-link">
                                        <i className="fa fa-user" aria-hidden="true"></i> Sign in
                                    </a>
                                </Link>
                            )}
                            <form className="form-inline">
                                <button className="btn my-2 my-sm-0 nav_search-btn" type="submit">
                                    <i className="fa fa-search" aria-hidden="true"></i>
                                </button>
                            </form>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
