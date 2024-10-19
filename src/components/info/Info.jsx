import React from 'react'
import Address from './content/address/Address'
import InfoDetail from './content/infoDetail/InfoDetail'
import Links from './content/links/Links'
import SubscribeForm from './content/subscribe/SubscribeForm'

const Info = () => {
  return (

    <section className="info_section layout_padding2">
    <div className="container">
        <div className="row">
                {/* <Address name = "London" address = "London, ON, Canada" number = "+1 (437) 376-1965" email = "laxmi@bdotsoftware.com" linkdinUrl = "https://www.linkedin.com/in/developer-laxmi"/>
                <Address name = "Belgium" address = "Deerlijk, Belgium" number = "+32 493 33 62 43" email = "patrick@bdotsoftware.com" linkdinUrl="https://www.linkedin.com/in/patrick-de-paepe-b071a7169/"/> */}
                <Address name = "Bdotsoftware Canada" address="London, ON, Canada" number = "+1 (437) 376-1965" email = "info@bdotsoftware.com" linkdinUrl = "https://www.linkedin.com/company/bdotsoftware/" xUrl="https://x.com/bdotsoftware" instagramUrl="https://www.instagram.com/bdotsoftware/" youtubeUrl="https://www.youtube.com/@bdotsoftware" />
                <InfoDetail />
                <Links />
                <SubscribeForm />
        </div>
    </div>
</section>

  )
}

export default Info