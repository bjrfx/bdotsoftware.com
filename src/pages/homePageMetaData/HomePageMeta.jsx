import React from 'react';
import { Helmet } from 'react-helmet';

const HomePageMeta = () => {
  return (
    <div>
      <Helmet>
        <title>bdot Software | Innovative Web Solutions & Digital Services</title>
        <meta name="description" content="Welcome to BDOT Software, your gateway to innovative web development, cloud migration, and digital solutions. Explore our homepage to see how we help businesses grow with cutting-edge technology and unparalleled service." />
        
        <meta property="og:title" content="BDOT Software | Leading Web Solutions Provider" />
        <meta property="og:description" content="Explore BDOT Software’s innovative solutions, driving success with web development, cloud migration, and digital services. Join us on our journey of innovation and excellence." />
        <meta property="og:image" content="http://cdn.bdotsoftware.com/var/albums/Home.png" />
        
        {/* Optional: add keywords for broader search engines */}
        <meta name="keywords" content="web development, cloud migration, digital services, software solutions, BDOT Software, bdotsoftware, bdot software" />
      </Helmet>
    </div>
  );
};

export default HomePageMeta;
