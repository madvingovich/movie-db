import React from 'react';
import SearchPageItem from "../search-page-item";

const SearchPageItemsList = ({ items }) => {
    const itemsList = items.map((item, idx) => {
        return (
            <SearchPageItem key={idx} item={item} />
        );
    });

    return (
        <div className="py-5">
            <div className="row">
                { itemsList }
            </div>
        </div>
    );
};

export default SearchPageItemsList;