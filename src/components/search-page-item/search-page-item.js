import React from 'react';
import {Link} from "react-router-dom";

import './search-page-item.css';


const SearchPageItem = ({ item }) => {
    return (
        <div className="col-12 search-item">
            <div className="d-flex align-items-center justify-content-between py-3 py-sm-2 px-0 px-md-4">
                <div className="d-flex align-items-center justify-content-between justify-content-sm-start w-100">
                    <h4 className="mb-0 d-inline-block">
                        <Link to={`/:${item.Title}`} className="">
                            {item.Title} [{item.Year}]
                        </Link>
                    </h4>
                    <p className="ml-2 mb-0 mr-sm-4">({item.Type})</p>
                </div>
                <Link to={`/:${item.Title}`} className="btn btn-secondary ml-2 px-2 px-md-4 py-2 d-none d-sm-block" >Read More</Link>
            </div>
        </div>
    );
};

export default SearchPageItem;