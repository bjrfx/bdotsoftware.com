import React from 'react'
import { Helmet } from 'react-helmet';

const SignInMetaData = () => {
  return (
    <div>
      <Helmet>
        <title>Sign In</title>
        <meta name="description" content="Sign in to your BDOT Software account to access personalized services, manage projects, and stay connected with our expert team. Securely log in to track progress and collaborate on your business solutions." />
        {/* <meta name="author" content="Created by BDOT Software" /> */}
        <meta property="og:title" content="Sign In to BDOT Software" />
        <meta property="og:description" content="Access your BDOT Software account to manage projects, connect with experts, and collaborate on innovative solutions for your business." />
        <meta property="og:image" content="" />
      </Helmet>
    </div>
  )
}

export default SignInMetaData;
