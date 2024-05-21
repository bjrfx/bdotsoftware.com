import React from 'react'

const WhyMetaData = () => {
  return (
    <div>
    <Helmet>
      <title>Why Us</title>
      <meta name="description" content="Discover why BDOT Software stands out from the competition. Explore our unique value proposition, commitment to excellence, and the benefits of choosing us for your business needs." />
      {/* <meta name="author" content="Created by BDOT Software" /> */}
      <meta property="og:title" content="Why Us" />
      <meta property="og:description" content="Find out why BDOT Software is the right choice for your business. Learn about our unmatched value proposition, dedication to quality, and how we can help you achieve your goals. Explore the reasons to partner with us today!" />
      <meta property="og:image" content="http://cdn.bdotsoftware.com/var/albums/WhyUs.png?m=1716270684" />
    </Helmet>
  </div>
  )
}

export default WhyMetaData