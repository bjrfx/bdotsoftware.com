import React, { Fragment } from 'react'
import CommonHeader from '../pages/CommonHeader'
import Info from '../components/info/Info'
import Footer from '../components/footer/Footer'
import { Box, Typography } from '@mui/material'
import BlogMetaData from './BlogMetaData'
const Blog = () => {
  return (
    <Fragment>
      <BlogMetaData />
      <div className='sub_page'>
      <CommonHeader />
      <Box sx={{ height: '50vh' }}>
        <Box sx={{ textAlign: 'center', marginTop: {lg: '25%', sm: '40%'} }}>
        <Typography style={{ textAlign: 'center', marginTop: {lg: '20%'} }}>Sorry no content available right now.</Typography>
        </Box>
      </Box>

      {/* <p style = {{ textAlign: 'center'}}>Post 1</p> */}
      <Info />
      <Footer />
    </div>
    </Fragment>
  )
}

export default Blog