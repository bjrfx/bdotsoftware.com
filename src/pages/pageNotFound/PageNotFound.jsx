import React from 'react'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
const PageNotFound = () => {
    return (
        <div>
            <h1 style={{ textAlign: "center", fontWeight: "bold", marginTop: "23rem" }}>Page Not Found</h1>
            <div className="d-flex justify-content-center">
                <Link to="/">
                    <Button variant="outline-dark">
                        Go Back
                    </Button>
                </Link>
            </div>

        </div>
    )
}

export default PageNotFound