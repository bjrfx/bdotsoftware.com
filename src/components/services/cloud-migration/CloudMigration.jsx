import React from 'react'
import CloudMigrationImage from '../../../images/CloudMigration.png'
const CloudMigration = () => {
  return (
    <div className="col-md-4 ">
    <div className="box ">
        <div className="img-box">
            <img src={CloudMigrationImage} alt="" />
        </div>
        <div className="detail-box">
            <h5>
                Cloud Migration
            </h5>
            <p>
            We offer expert guidance for migrating to public, private, or hybrid cloud environments, ensuring a smooth transition with minimal disruption.
            </p>
            
        </div>
    </div>
</div>
  )
}

export default CloudMigration