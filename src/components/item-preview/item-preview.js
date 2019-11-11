import React from 'react';
import {Link} from "react-router-dom";

import './item-preview.css';

const ItemPreview = ({ item, url }) => {
    const { Title: title, Year: year, Poster: poster } = item;
    return (
        <div className="col-10 mx-auto col-sm-6 col-md-3 item d-flex flex-column justify-content-between mb-5 mb-md-0">
            <Link to={`/${title}`}>
                <img src={ poster } alt="poster"/>
            </Link>
            <h2 className="mb-0 mt-3 text-center">
                <Link to={`/${title}`}>
                    { title } <span>[{ year }]</span>
                </Link>
            </h2>
        </div>
    );
};

export default ItemPreview;