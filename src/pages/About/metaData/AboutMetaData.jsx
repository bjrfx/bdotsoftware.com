import React from 'react'
import { Helmet } from 'react-helmet';
const AboutMetaData = () => {
  return (
    <div>
      <Helmet>
        <title>About Us</title>
        <meta name="description" content="Dive into the story behind BDOT Software. Discover our mission, values, and the people driving our vision forward. Get to know the team shaping our journey and the passion fueling our work. Explore how we're making a difference and connecting with our community." />
        {/* <meta name="author" content="Created by BDOT Software" /> */}
        <meta property="og:title" content="About Us" />
        <meta property="og:description" content="Dive into the story behind BDOT Software. Discover our mission, values, and the people driving our vision forward." />
        <meta property="og:image" content="http://cdn.bdotsoftware.com/var/albums/AboutUs.png?m=1716270683" />
      </Helmet>
    </div>
  )
}

export default AboutMetaData