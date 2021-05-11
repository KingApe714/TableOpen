import React from 'react';
import { Link } from 'react-router-dom'; 

const notFound = () => {
    return (
        <div className="not-found-container">
            <img src={window.notFound} className="not-found-image" />
            <Link to='/'
                    className="not-found-button">
            </Link>
        </div>
    )
}

export default notFound