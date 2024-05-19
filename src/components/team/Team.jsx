import React from 'react'
import SivaBandarupalli from './profiles/SivaBandarupalli'
import SarvanaKumar from './profiles/SarvanaKumar'
import EarlMartinez from './profiles/EarlMartinez'
import JosephineAllard from './profiles/JosephineAllard'

const Team = () => {
    return (
        <section className="team_section layout_padding">
            <div className="container-fluid">
                <div className="heading_container heading_center">
                    <h2 className="">
                        Our <span> Team</span>
                    </h2>
                </div>

                <div className="team_container">
                    <div className="row">
                        <SivaBandarupalli />
                        <SarvanaKumar />
                        <EarlMartinez />
                        <JosephineAllard />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Team