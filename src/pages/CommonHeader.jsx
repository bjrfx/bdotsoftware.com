import React from 'react'
import HeroImage from '../images/hero-bg.png'
import { Link } from 'react-router-dom'
import BGwhiteLogo from '../images/Logos/BG-white-trans.png'
const CommonHeader = () => {
    return (
        <div className="hero_area">

        <div className="hero_bg_box">
            <div className="bg_img_box">
                <img src={HeroImage} alt="" />
            </div>
        </div>

        <header className="header_section">
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg custom_nav-container ">
                    <Link to='/'>
                    <a className="navbar-brand" >
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
                        <ul className="navbar-nav  ">
                            <Link className="nav-item" to='/'>
                                <a className="nav-link" >Home </a>
                            </Link>
                            <Link className="nav-item" to='/about'>
                                <a className="nav-link" > About  </a>
                            </Link>
                            <Link className="nav-item" to='/services'> 
                                <a className="nav-link" >Services </a>
                            </Link>
                            <Link className="nav-item" to='/why'>
                                <a className="nav-link" >Why Us</a>
                            </Link>
                            <Link className="nav-item" to='/team'>
                                <a className="nav-link" >Team</a>
                            </Link>
                            <Link className="nav-item" to='/blog'>
                                <a className="nav-link" >Blog</a>
                            </Link>
                            <Link className="nav-item" >
                                <a className="nav-link" > <i className="fa fa-user" aria-hidden="true"></i> Login</a>
                            </Link>
                            <form className="form-inline">
                                <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                                    <i className="fa fa-search" aria-hidden="true"></i>
                                </button>
                            </form>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    </div>
    )
}

export default CommonHeader