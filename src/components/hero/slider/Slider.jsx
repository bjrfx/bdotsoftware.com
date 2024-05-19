import React from 'react'
import webmin from '../../../images/web-minified.png'
import motiongraphics from '../../../images/motion-graphics-min.png'
import devops from '../../../images/devops.png'
import { Link } from 'react-router-dom'
const Slider = () => {
  return (
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
                                    <Link className='btn1' to='/services'>
                                        Read More
                                    </Link>
                                     {/* <a  className="btn1">
                                         Read More
                                     </a> */}
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
                                 <Link className='btn1' to='/services'>
                                        Read More
                                    </Link>
                                     {/* <a  className="btn1">
                                         Read More
                                     </a> */}
                                 </div>
                             </div>
                         </div>
                         <div className="col-md-6">
                             <div className="img-box">
                                 <img src={motiongraphics} alt="" />
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
                                 <Link className='btn1' to='/services'>
                                        Read More
                                    </Link>
                                     {/* <a  className="btn1">
                                         Read More
                                     </a> */}
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

  )
}

export default Slider