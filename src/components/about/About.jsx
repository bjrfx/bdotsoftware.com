import React from 'react'
// import aboutimg from '../../images/about-img.png'
import bdotWhiteImage from '../../images/BDOTWHITE.png'
import { Link, useNavigate } from 'react-router-dom'
const About = () => {
    const navigate = useNavigate();
    const handleClick = (to) => (e) => {
        e.preventDefault();
        navigate(to);
        window.scrollTo(0, 0);
    };
    return (

        <section className="about_section layout_padding">
            <div className="container  ">
                <div className="heading_container heading_center">
                    <h2>
                        About <span>Us</span>
                    </h2>
                    <p>
                        At bdotsoftware, we're more than just a team of developers and designers—we're digital innovators on a mission to redefine what's possible in the digital world.
                    </p>
                </div>
                <div className="row">
                    <div className="col-md-6 ">
                        <div className="img-box">
                            <img src={bdotWhiteImage} alt="" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="detail-box">
                            <h3>
                                We Are BDOT
                            </h3>
                            <p>
                                With a passion for technology and a commitment to excellence, we combine creativity with technical expertise to deliver unparalleled solutions tailored to your unique needs.
                                Founded in 2023, we've built a reputation for delivering results that exceed expectations, thanks to our collaborative approach, attention to detail, and dedication to client satisfaction.
                            </p>
                            <p>
                                Whether you're a small startup or a multinational corporation, we're here to help you harness the power of technology to achieve your goals and propel your business forward.
                                Get in touch with us today and let's embark on a journey to transform your digital presence together!
                            </p>
                            {/* Add Links to Wiki Pages */}
                            <div className="wiki-links">
                                <h2>Learn More About Us</h2>
                                <Link to="/wiki/about-bdotsoftware">About bdotsoftware</Link>
                                {/* <Link to="/wiki/react-app-wiki">React.js App at bdotsoftware</Link> */}
                                {/* <ul>
                                    <li><Link to="/wiki/about-bdotsoftware">About bdotsoftware</Link></li>
                                    <li><Link to="/wiki/react-app-wiki">React.js App at bdotsoftware</Link></li>
                                </ul> */}
                            </div>
                            {/* wiki ends here */}
                            {/* <Link onClick={handleClick('/about')} to='/about'>
                                Read more
                            </Link> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About