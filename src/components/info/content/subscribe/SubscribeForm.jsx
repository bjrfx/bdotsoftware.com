import React from 'react'

const SubscribeForm = () => {
    return (
        <div className="col-md-6 col-lg-3 info_col ">
            <h4>
                Subscribe
            </h4>
            <form action="#">
                <input type="text" placeholder="Enter email" />
                <button type="submit">
                    Subscribe
                </button>
            </form>
        </div>
    )
}

export default SubscribeForm