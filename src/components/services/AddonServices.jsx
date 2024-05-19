import React from 'react'
import PlatformEngineering from './PlatformEngineering/PlatformEngineering'
import CloudMigration from './cloud-migration/CloudMigration'
import Devops from './devops/Devops'
import MotionGraphics from './motiongraphics/MotionGraphics'
import WebDevelopment from './webdevelopment/WebDevelopment'
import Ourservices from './ourservices/Ourservices'

const AddonServices = () => {
  return (
    <section className="service_section layout_padding" >
    <div className="service_container">
        <div className="container ">
           <Ourservices />
            <div className="row">
                <PlatformEngineering />
                <CloudMigration />
                <Devops />
                <MotionGraphics />
                <WebDevelopment />
            </div>
            {/* <div className="btn-box">
                <a >
                    View All
                </a>
            </div> */}
        </div>
    </div>
</section>
  )
}

export default AddonServices