import React from 'react'
import { Helmet } from 'react-helmet'
const RequestAServiceMetaData = () => {
  return (
    <div>
    <Helmet>
      <title>Request A Service</title>
      <meta name="description" content="Request personalized services from BDOT Software. From web development to cloud migration, we deliver tailored solutions that drive business success. Contact us to bring your ideas to life." />
      {/* <meta name="author" content="Created by BDOT Software" /> */}
      <meta property="og:title" content="Request A Service" />
      <meta property="og:description" content="Request custom services from BDOT Software, including web development, video production, and cloud solutions. Our expert team is ready to help you transform your business with innovative technology and design." />
      <meta property="og:image" content="http://cdn.bdotsoftware.com/var/albums/WhyUs.png?m=1716270684" />
    </Helmet>
  </div>
  )
}

export default RequestAServiceMetaData