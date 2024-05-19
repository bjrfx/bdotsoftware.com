import React from 'react'
import Footer from '../../components/footer/Footer'
import Info from '../../components/info/Info'
import CommonHeader from '../CommonHeader'
import Team from '../../components/team/Team'
const TeamPage = () => {
  return (
    <div className='sub_page'>
        <CommonHeader />
      <Team />
      <Info />
      <Footer />
    </div>
  )
}

export default TeamPage