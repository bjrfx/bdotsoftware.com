import React from 'react'
import { Helmet } from 'react-helmet';

const BlogMetaData = () => {
  return (
    <div>
      <Helmet>
        <title>Blog</title>
        <meta name="description" content="Stay updated with the latest trends in tech, web development, and business strategies through BDOT Software’s blog. Explore expert insights, tips, and industry news to help grow your business and stay ahead of the competition." />
        {/* <meta name="author" content="Created by BDOT Software" /> */}
        <meta property="og:title" content="BDOT Software Blog" />
        <meta property="og:description" content="Explore expert insights and industry news on web development, tech trends, and business strategies through BDOT Software’s blog." />
        <meta property="og:image" content="" />
      </Helmet>
    </div>
  )
}

export default BlogMetaData;
