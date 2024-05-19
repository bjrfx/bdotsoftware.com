import React, { Fragment } from 'react'
import herobg from './images/hero-bg.png'
import BGwhiteLogo from './images/Logos/BG-white-trans.png'
import webmin from './images/web-min.png'
import motiongrapchis from './images/motion-grapchis.png'
import devops from './images/devops.png'
import webIcon from './images/webIcon.png'
import motionIcon from './images/motionIcon.png'
import devopsIcon from './images/DevopsIcon.png'
import aboutimg from './images/about-img.png'
import calltoaction from './images/icons8-call_to_action.png'
import ideasharing from './images/icons8-idea_sharing.png'
import sitequalitywarranty from './images/icons8-site_quality_warranty.png'
import w4 from './images/w4.png'
import account from './images/icons8-account.png'
import client1 from './images/client1.jpg'
import client2 from './images/client2.jpg'
import personfemaleskintype5 from './images/icons8-person_female_skin_type_5.png'

const Test = () => {
    return (
        <Fragment>
            {/* hero starts */}
            <div className="hero_area">

                <div className="hero_bg_box">
                    <div className="bg_img_box">
                        <img src={herobg} alt="" />
                    </div>
                </div>

                {/* header section strats */}
                <header className="header_section">
                    <div className="container-fluid">
                        <nav className="navbar navbar-expand-lg custom_nav-container ">
                            <a className="navbar-brand" href="index.html">
                                <span>
                                    <img src={BGwhiteLogo} width="80rem" alt="" />
                                </span>
                            </a>

                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className=""> </span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav  ">
                                    <li className="nav-item active">
                                        <a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="about.html"> About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="service.html">Services</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="why.html">Why Us</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="team.html">Team</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#"> <i className="fa fa-user" aria-hidden="true"></i> Login</a>
                                    </li>
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
                {/* end header section */}
                {/* slider section */}
                <section className="slider_section ">
                    <div id="customCarousel1" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="container ">
                                    <div className="row">
                                        <div className="col-md-6 ">
                                            <div className="detail-box">
                                                <h1>
                                                    Web Development <br />
                                                </h1>
                                                <p>
                                                    Our web development team is proficient in the latest technologies and frameworks. We build websites that are not only visually appealing but also functionally robust. From e-commerce plartform to personal blogs, we've got you covered.
                                                </p>
                                                <div className="btn-box">
                                                    <a href="" className="btn1">
                                                        Read More
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="img-box">
                                                <img src={webmin} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item ">
                                <div className="container ">
                                    <div className="row">
                                        <div className="col-md-6 ">
                                            <div className="detail-box">
                                                <h1>
                                                    Motion Graphics <br />
                                                    for Web
                                                </h1>
                                                <p>
                                                    Bring your website to life with our motion graphics services. Our designers create engaging animations that enhance user experience and make your website stand out from the crowd.
                                                </p>
                                                <div className="btn-box">
                                                    <a href="" className="btn1">
                                                        Read More
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="img-box">
                                                <img src={motiongrapchis} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="container ">
                                    <div className="row">
                                        <div className="col-md-6 ">
                                            <div className="detail-box">
                                                <h1>
                                                    Devops <br />

                                                </h1>
                                                <p>
                                                    Our DevOps services aim to streamline your operations and improve collaboration between development and IT operations. We provide continuous integration, continuous delivery, automated testing, and infrastructure monitoring to ensure your web applications run smoothly and efficiently.
                                                </p>
                                                <div className="btn-box">
                                                    <a href="" className="btn1">
                                                        Read More
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="img-box">
                                                <img src={devops} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ol className="carousel-indicators">
                            <li data-target="#customCarousel1" data-slide-to="0" className="active"></li>
                            <li data-target="#customCarousel1" data-slide-to="1"></li>
                            <li data-target="#customCarousel1" data-slide-to="2"></li>
                        </ol>
                    </div>

                </section>
                {/* end slider section */}
            </div>
            {/* hero ends */}


            {/* service section */}

            <section className="service_section layout_padding">
                <div className="service_container">
                    <div className="container ">
                        <div className="heading_container heading_center">
                            <h2>
                                Our <span>Services</span>
                            </h2>
                            <p>
                                At bdotsoftware, we provide tailored digital solutions including web development, motion graphics, and DevOps. Our services are designed to enhance your online presence, engage your audience, and optimize your development process for success in the digital world.
                            </p>
                        </div>
                        <div className="row">
                            <div className="col-md-4 ">
                                <div className="box ">
                                    <div className="img-box">
                                        <img src={webIcon} alt="" />
                                    </div>
                                    <div className="detail-box">
                                        <h5>
                                            Web Development
                                        </h5>
                                        <p>
                                            fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                            The
                                            point of using
                                        </p>
                                        <a href="">
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 ">
                                <div className="box ">
                                    <div className="img-box">
                                        <img src={motionIcon} alt="" />
                                    </div>
                                    <div className="detail-box">
                                        <h5>
                                            Motion Graphics for Web
                                        </h5>
                                        <p>
                                            fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                            The
                                            point of using
                                        </p>
                                        <a href="">
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 ">
                                <div className="box ">
                                    <div className="img-box">
                                        <img src={devopsIcon} alt="" />
                                    </div>
                                    <div className="detail-box">
                                        <h5>
                                            Devops
                                        </h5>
                                        <p>
                                            fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                            The
                                            point of using
                                        </p>
                                        <a href="">
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="btn-box">
                            <a href="">
                                View All
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* end service section */}


            {/* about section */}

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
                                <img src={aboutimg} alt="" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="detail-box">
                                <h3>
                                    We Are BDOT
                                </h3>
                                <p>
                                    With a passion for technology and a commitment to excellence, we combine creativity with technical expertise to deliver unparalleled solutions tailored to your unique needs.
                                    Founded in [year], we've built a reputation for delivering results that exceed expectations, thanks to our collaborative approach, attention to detail, and dedication to client satisfaction.
                                </p>
                                <p>
                                    Whether you're a small startup or a multinational corporation, we're here to help you harness the power of technology to achieve your goals and propel your business forward.
                                    Get in touch with us today and let's embark on a journey to transform your digital presence together!
                                </p>
                                <a href="">
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* end about section */}

            {/* why section */}

            <section className="why_section layout_padding">
                <div className="container">
                    <div className="heading_container heading_center">
                        <h2>
                            Why Choose <span>Us</span>
                        </h2>
                    </div>
                    <div className="why_container">
                        <div className="box">
                            <div className="img-box">
                                <img src={calltoaction} alt="" />
                            </div>
                            <div className="detail-box">
                                <h5>
                                    Expertise and Innovation
                                </h5>
                                <p>
                                    Our team comprises seasoned professionals with a wealth of experience in web development, motion graphics, and DevOps. We stay at the forefront of technological trends and innovations, ensuring that you receive cutting-edge solutions that drive results.
                                </p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="img-box">
                                <img src={ideasharing} alt="" />
                            </div>
                            <div className="detail-box">
                                <h5>
                                    Tailored Solutions
                                </h5>
                                <p>
                                    We believe in a personalized approach to every project. Whether you're a startup looking to establish your online presence or a large corporation seeking to optimize your digital operations, we take the time to understand your unique goals and challenges, crafting bespoke solutions that meet your specific needs.
                                </p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="img-box">
                                <img src={sitequalitywarranty} alt="" />
                            </div>
                            <div className="detail-box">
                                <h5>
                                    Quality and Precision
                                </h5>
                                <p>
                                    Quality is at the core of everything we do. From meticulous code craftsmanship to pixel-perfect designs, we uphold the highest standards of excellence in every aspect of our work. You can trust us to deliver solutions that are not only visually stunning but also robust, scalable, and user-friendly.
                                </p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="img-box">
                                <img src={w4} alt="" />
                            </div>
                            <div className="detail-box">
                                <h5>
                                    Timely Delivery and Support
                                </h5>
                                <p>
                                    We understand the importance of deadlines and strive to deliver projects on time and within budget. Our agile development approach enables us to adapt to changing requirements and iterate quickly, ensuring timely delivery without compromising quality. Plus, our commitment doesn't end with project completion—we provide ongoing support and maintenance to ensure that your digital assets continue to perform optimally long after launch.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="btn-box">
                        <a href="">
                            Read More
                        </a>
                    </div>
                </div>
            </section>

            {/* end why section */}

            {/* team section */}
            <section className="team_section layout_padding">
                <div className="container-fluid">
                    <div className="heading_container heading_center">
                        <h2 className="">
                            Our <span> Team</span>
                        </h2>
                    </div>

                    <div className="team_container">
                        <div className="row">
                            <div className="col-lg-3 col-sm-6">
                                <div className="box ">
                                    <div className="img-box">
                                        <img src={account} className="img1" alt="" />
                                    </div>
                                    <div className="detail-box">
                                        <h5>
                                            Siva Bandarupalli
                                        </h5>
                                        <p>
                                            Devops Engineer || Properator
                                        </p>
                                    </div>
                                    <div className="social_box">
                                        <a href="#">
                                            <i className="fa fa-facebook" aria-hidden="true"></i>
                                        </a>
                                        <a href="#">
                                            <i className="fa fa-twitter" aria-hidden="true"></i>
                                        </a>
                                        <a href="#">
                                            <i className="fa fa-linkedin" aria-hidden="true"></i>
                                        </a>
                                        <a href="#">
                                            <i className="fa fa-instagram" aria-hidden="true"></i>
                                        </a>
                                        <a href="#">
                                            <i className="fa fa-youtube-play" aria-hidden="true"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-sm-6">
                                <div className="box ">
                                    <div className="img-box">
                                        <img src={account} className="img1" alt="" />
                                    </div>
                                    <div className="detail-box">
                                        <h5>
                                            Sarvana Kumar
                                        </h5>
                                        <p>
                                            Devops
                                        </p>
                                    </div>
                                    <div className="social_box">
                                        <a href="#">
                                            <i className="fa fa-facebook" aria-hidden="true"></i>
                                        </a>
                                        <a href="#">
                                            <i className="fa fa-twitter" aria-hidden="true"></i>
                                        </a>
                                        <a href="#">
                                            <i className="fa fa-linkedin" aria-hidden="true"></i>
                                        </a>
                                        <a href="#">
                                            <i className="fa fa-instagram" aria-hidden="true"></i>
                                        </a>
                                        <a href="#">
                                            <i className="fa fa-youtube-play" aria-hidden="true"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="box ">
                                    <div className="img-box">
                                        <img src={account} className="img1" alt="" />
                                    </div>
                                    <div className="detail-box">
                                        <h5>
                                            Earl Martinez
                                        </h5>
                                        <p>
                                            Web Developer
                                        </p>
                                    </div>
                                    <div className="social_box">
                                        <a href="#">
                                            <i className="fa fa-facebook" aria-hidden="true"></i>
                                        </a>
                                        <a href="#">
                                            <i className="fa fa-twitter" aria-hidden="true"></i>
                                        </a>
                                        <a href="#">
                                            <i className="fa fa-linkedin" aria-hidden="true"></i>
                                        </a>
                                        <a href="#">
                                            <i className="fa fa-instagram" aria-hidden="true"></i>
                                        </a>
                                        <a href="#">
                                            <i className="fa fa-youtube-play" aria-hidden="true"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="box ">
                                    <div className="img-box">
                                        <img src={account} className="img1" alt="" />
                                    </div>
                                    <div className="detail-box">
                                        <h5>
                                            Josephine Allard
                                        </h5>
                                        <p>
                                            Web Designer
                                        </p>
                                    </div>
                                    <div className="social_box">
                                        <a href="#">
                                            <i className="fa fa-facebook" aria-hidden="true"></i>
                                        </a>
                                        <a href="#">
                                            <i className="fa fa-twitter" aria-hidden="true"></i>
                                        </a>
                                        <a href="#">
                                            <i className="fa fa-linkedin" aria-hidden="true"></i>
                                        </a>
                                        <a href="#">
                                            <i className="fa fa-instagram" aria-hidden="true"></i>
                                        </a>
                                        <a href="#">
                                            <i className="fa fa-youtube-play" aria-hidden="true"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- end team section --> */}


            {/* <!-- client section --> */}

            <section className="client_section layout_padding">
                <div className="container">
                    <div className="heading_container heading_center psudo_white_primary mb_45">
                        <h2>
                            What says our <span>Customers</span>
                        </h2>
                    </div>
                    <div className="carousel-wrap ">
                        <div className=" client_owl-carousel">
                            <div className="item">
                                <div className="box">
                                    <div className="img-box">
                                        <img src={client1} alt="" className="box-img" />
                                    </div>
                                    <div className="detail-box">
                                        <div className="client_id">
                                            <div className="client_info">
                                                <h6>
                                                    Alex M
                                                </h6>
                                                <p>

                                                </p>
                                            </div>
                                            <i className="fa fa-quote-left" aria-hidden="true"></i>
                                        </div>
                                        <p>
                                            I can't say enough good things about bdotsoftware. From day one, they demonstrated a deep understanding of our project requirements and offered valuable insights that helped us achieve our goals. The team's professionalism and expertise are unmatched, and the final product speaks for itself. We couldn't be happier with the results! </p>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="box">
                                    <div className="img-box">
                                        <img src={client2} alt="" className="box-img" />
                                    </div>
                                    <div className="detail-box">
                                        <div className="client_id">
                                            <div className="client_info">
                                                <h6>
                                                    Emily J
                                                </h6>
                                                <p>

                                                </p>
                                            </div>
                                            <i className="fa fa-quote-left" aria-hidden="true"></i>
                                        </div>
                                        <p>
                                            Working with bdotsoftware was an absolute pleasure! Their attention to detail and commitment to delivering top-notch results exceeded our expectations. Our website looks fantastic, and we've received numerous compliments on the sleek design and seamless functionality. Highly recommend!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="box">
                                    <div className="img-box">
                                        <img src={personfemaleskintype5} alt="" width="100rem" className="box-img" />
                                    </div>
                                    <div className="detail-box">
                                        <div className="client_id">
                                            <div className="client_info">
                                                <h6>
                                                    Jessica H
                                                </h6>
                                                <p>

                                                </p>
                                            </div>
                                            <i className="fa fa-quote-left" aria-hidden="true"></i>
                                        </div>
                                        <p>
                                            Working with bdotsoftware was a game-changer for our business. Their expertise in motion graphics took our website to the next level, enhancing user engagement and driving conversions. Not only are they incredibly talented, but they're also a pleasure to work with—responsive, communicative, and committed to delivering results. We're thrilled with the outcome and look forward to continuing our partnership with bdotsoftware! </p>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="box">
                                    <div className="img-box">
                                        <img src={account} alt="male image" width="100rem" className="box-img" />
                                    </div>
                                    <div className="detail-box">
                                        <div className="client_id">
                                            <div className="client_info">
                                                <h6>
                                                    John R
                                                </h6>
                                                <p>

                                                </p>
                                            </div>
                                            <i className="fa fa-quote-left" aria-hidden="true"></i>
                                        </div>
                                        <p>
                                            As a startup, finding a reliable digital partner was crucial for our success, and bdotsoftware delivered beyond our wildest dreams. Their team went above and beyond to understand our vision and translate it into a stunning website that truly captures the essence of our brand. The level of professionalism and expertise they bring to the table is truly impressive. Highly recommend bdotsoftware to anyone looking for top-notch web development services!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- end client section --> */}


            {/* <!-- info section --> */}

            <section className="info_section layout_padding2">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-3 info_col">
                            <div className="info_contact">
                                <h4>
                                    Address
                                </h4>
                                <div className="contact_link_box">
                                    <a href="">
                                        <i className="fa fa-map-marker" aria-hidden="true"></i>
                                        <span>
                                            123 Bow Street, London, Ontario, Canada
                                        </span>
                                    </a>
                                    <a href="">
                                        <i className="fa fa-phone" aria-hidden="true"></i>
                                        <span>
                                            Call +1 613-123-4567
                                        </span>
                                    </a>
                                    <a href="">
                                        <i className="fa fa-envelope" aria-hidden="true"></i>
                                        <span>
                                            contact@bdotsoftware.com
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div className="info_social">
                                <a href="">
                                    <i className="fa fa-facebook" aria-hidden="true"></i>
                                </a>
                                <a href="">
                                    <i className="fa fa-twitter" aria-hidden="true"></i>
                                </a>
                                <a href="">
                                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                                </a>
                                <a href="">
                                    <i className="fa fa-instagram" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 info_col">
                            <div className="info_detail">
                                <h4>
                                    Info
                                </h4>
                                <p>
                                    Welcome to bdotsoftware, your premier destination for cutting-edge digital solutions. Here, we strive to provide you with all the information you need to understand our services, our process, and how we can help you achieve your digital goals.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-2 mx-auto info_col">
                            <div className="info_link_box">
                                <h4>
                                    Links
                                </h4>
                                <div className="info_links">
                                    <a className="active" href="index.html">
                                        Home
                                    </a>
                                    <a className="" href="about.html">
                                        About
                                    </a>
                                    <a className="" href="service.html">
                                        Services
                                    </a>
                                    <a className="" href="why.html">
                                        Why Us
                                    </a>
                                    <a className="" href="team.html">
                                        Team
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 info_col ">
                            <h4>
                                Subscribe
                            </h4>
                            <form action="#">
                                <input type="text" placeholder="Enter email" />
                                <button type="submit">
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- end info section --> */}

            {/* <!-- footer section --> */}
            <section className="footer_section">
                <div className="container">
                    <p>
                        &copy; <span id="displayYear"></span> All Rights Reserved By
                        <a href="#">BDOT SOFTWARE</a>
                    </p>
                </div>
            </section>
            {/* <!-- footer section --> */}
        </Fragment>
    )
}

export default Test