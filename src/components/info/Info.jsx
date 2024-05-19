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
                <Address />
                <InfoDetail />
                <Links />
                <SubscribeForm />
        </div>
    </div>
</section>

  )
}

export default Info