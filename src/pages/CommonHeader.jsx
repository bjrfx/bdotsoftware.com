import React, { useContext, useState, useEffect } from 'react';
import HeroImage from '../images/hero-bg.png';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../components/Auth/AuthContext';
import { auth } from '../firebase/firebaseConfig';
import { signOut } from 'firebase/auth';
import BGwhiteLogo from '../images/Logos/BG-white-trans.png';
import Alert from '@mui/material/Alert'; // Import MUI Alert

const CommonHeader = () => {
    const { currentUser } = useContext(AuthContext); // Get the current user from AuthContext
    const navigate = useNavigate();
    const [alert, setAlert] = useState(null); // State for managing alerts

    const handleClick = (to) => (e) => {
        e.preventDefault();
        navigate(to);
        window.scrollTo(0, 0);
    };

    const handleLogout = async () => {
        try {
            await signOut(auth);
            setAlert({ type: 'success', message: 'Successfully signed out!' });
            navigate('/');
        } catch (error) {
            console.error('Error signing out:', error);
            setAlert({ type: 'error', message: 'Error signing out. Please try again.' });
        }
    };

    useEffect(() => {
        if (alert) {
            // Automatically close the alert after 5 seconds
            const timer = setTimeout(() => setAlert(null), 5000);
            return () => clearTimeout(timer); // Cleanup timer on component unmount
        }
    }, [alert]);

    return (
        <div className="hero_area">
            <div className="hero_bg_box">
                <div className="bg_img_box">
                    <img src={HeroImage} alt="" />
                </div>
            </div>

            <header className="header_section">
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-lg custom_nav-container">
                        <Link to='/'>
                            <a className="navbar-brand">
                                <span>
                                    <img src={BGwhiteLogo} width="80rem" alt="" />
                                </span>
                            </a>
                        </Link>

                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className=""> </span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav">
                                <Link className="nav-item" onClick={handleClick('/')} to='/'>
                                    <a className="nav-link">Home</a>
                                </Link>
                                <Link className="nav-item" onClick={handleClick('/about')} to='/about'>
                                    <a className="nav-link">About</a>
                                </Link>
                                <Link className="nav-item" onClick={handleClick('/services')} to='/services'>
                                    <a className="nav-link">Services</a>
                                </Link>
                                <Link className="nav-item" onClick={handleClick('/request-service')} to='/request-service'>
                                    <a className="nav-link">Request a service</a>
                                </Link>
                                {/* <Link className="nav-item" onClick={handleClick('/why')} to='/why'>
                                    <a className="nav-link">Why Us</a>
                                </Link> */}
                                {/* <Link className="nav-item" onClick={handleClick('/team')} to='/team'>
                                    <a className="nav-link">Our team</a>
                                </Link> */}
                                <Link className="nav-item" onClick={handleClick('/careers')} to='/careers'>
                                    <a className="nav-link">Careers</a>
                                </Link>
                                <Link className="nav-item" onClick={handleClick('/blog')} to='/blog'>
                                    <a className="nav-link">Blog</a>
                                </Link>
                                {currentUser ? (
                                    <Link className="nav-item" onClick={handleLogout} to='/'>
                                        <a className="nav-link">Sign out</a>
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
            {alert && (
                <div className="alert-container" style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000 }}>
                    <Alert severity={alert.type} onClose={() => setAlert(null)}>
                        {alert.message}
                    </Alert>
                </div>
            )}
        </div>
    );
};

export default CommonHeader;
