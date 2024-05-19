import React from 'react'
import CommonHeader from '../pages/CommonHeader'
import Info from '../components/info/Info'
import Footer from '../components/footer/Footer'

const Blog = () => {
  return (
    <div className='sub_page'>
        <CommonHeader />
        <h1 style = {{ textAlign: 'center'}}>Blog Posts Here</h1>
        <Info />
        <Footer />
    </div>
  )
}

export default Blog