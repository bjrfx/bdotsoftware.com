import React from 'react'
import './styles/responsive.css'
import './styles/style.scss'
import './styles/style.css.map'
// import './styles/bootstrap.css'
import AlexM from './comments/AlexM'
import EmilyJ from './comments/EmilyJ'
import JessicaH from './comments/JessicaH'
import JohnR from './comments/JohnR'
const Client = () => {
  return (


    <section className="client_section layout_padding">
    <div className="container">
        <div className="heading_container heading_center psudo_white_primary mb_45">
            <h2 className='testOne'>
                What says our <span>Customers</span>
            </h2>
        </div>
        <div className="carousel-wrap ">
            <div className=" client_owl-carousel">
                <AlexM />
                <EmilyJ />
                <JessicaH />
                <JohnR />
            </div>
            
        </div>
    </div>
</section>



  )
}

export default Client