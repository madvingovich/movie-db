import React from 'react';
import { Link } from "react-router-dom";

import './header.css';

const Header = () => {
    return (
        <header className="py-2 py-md-3 mb-4 d-flex align-items-center justify-content-between px-2">
            <div className="logo">
                <Link className="btn btn-secondary ml-1 py-1 py-sm-2 px-2 px-sm-4" to="/">MovieDB</Link>
            </div>
            <nav>
                <ul className="header-links d-flex mb-0">
                    <li><Link className="mx-1 md-mx-3 btn btn-dark py-1 py-sm-2 px-2 px-sm-4" to="/movies">Films</Link></li>
                    <li><Link className="mx-1 md-mx-3 btn btn-dark py-1 py-sm-2 px-2 px-sm-4" to="/series">Series</Link></li>
                    <li><Link className="mx-1 mx-mx-3 btn btn-dark py-1 py-sm-2 px-2 px-sm-4" to="/search">Search</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;