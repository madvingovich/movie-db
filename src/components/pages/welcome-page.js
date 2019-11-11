import React from 'react';
import { Link } from "react-router-dom";

import './welcome-page.css';

const WelcomePage = () => {
    return (
        <div className="welcome d-flex flex-column align-items-center justify-content-center">
            <h1 className="text-center">
                Welcome! Here you can search information about any film or TV series you know!
            </h1>
            <Link to="/search" className="btn btn-dark mt-5">Get Started</Link>
        </div>
    );
};

export default WelcomePage;