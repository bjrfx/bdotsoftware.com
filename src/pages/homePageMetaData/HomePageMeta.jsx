import React from 'react'
import { Helmet } from 'react-helmet'
const HomePageMeta = () => {
  return (
    <div>
    <Helmet>
      <title>BDOT Software | Home</title>
      <meta name="description" content="Welcome to BDOT Software - your gateway to innovative solutions and unparalleled service. Explore our homepage to discover how we're transforming industries, driving success, and making a difference in the world." />
      {/* <meta name="author" content="Created by BDOT Software" /> */}
      <meta property="og:title" content="Why Us" />
      <meta property="og:description" content="Experience the vision and passion of BDOT Software through our homepage. Dive into our innovative solutions, commitment to excellence, and the impact we're making in the industry. Explore our homepage and join us on our journey of innovation and success!" />
      <meta property="og:image" content="http://cdn.bdotsoftware.com/var/albums/Home.png?m=1716272045" />
    </Helmet>
  </div>
  )
}

export default HomePageMeta