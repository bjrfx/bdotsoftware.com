import React from 'react'
import Button from 'react-bootstrap/Button'
import { Link, useNavigate } from 'react-router-dom'
const PageNotFound = () => {
    const navigate = useNavigate();
    const handleClick = (to) => (e) => {
        e.preventDefault();
        navigate(to);
        window.scrollTo(0, 0);
    };
    return (
        <div>
            <h1 style={{ textAlign: "center", fontWeight: "bold", marginTop: "23rem" }}>Page Not Found</h1>
            <div className="d-flex justify-content-center">
                <Link onClick={handleClick('/')} to="/">
                    <Button variant="outline-dark">
                        Go Back
                    </Button>
                </Link>
            </div>

        </div>
    )
}

export default PageNotFound