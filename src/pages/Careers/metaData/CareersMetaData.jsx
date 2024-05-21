import React from 'react'
import { Helmet } from 'react-helmet';

const CareersMetaData = () => {
  return (
    <div>
      <Helmet>
        <title>Careers</title>
        <meta name="description" content="Discover exciting career opportunities at BDOT Software. Explore our careers page to learn about current job openings, our company culture, and how you can become part of our dynamic team. Join us in shaping the future and making a difference." />
        {/* <meta name="author" content="Created by BDOT Software" /> */}
        <meta property="og:title" content="Career Opportunities" />
        <meta property="og:description" content="Explore rewarding career paths at BDOT Software. Dive into our careers page to find available positions, delve into our vibrant company culture, and envision yourself contributing to our innovative projects. Join our team and embark on a journey of growth and fulfillment." />
        <meta property="og:image" content="http://cdn.bdotsoftware.com/var/albums/Careers.png?m=1716270684" />
      </Helmet>
    </div>
  )
}

export default CareersMetaData