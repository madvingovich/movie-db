import React from 'react';
import SearchPageItem from "../search-page-item";
import PropTypes from 'prop-types';

const SearchPageItemsList = ({ items }) => {

    if(!items) return <h2 className="my-5 text-center">Just type title, choose parameters if you need and let's go!</h2>;

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

SearchPageItem.propTypes = {
    items: PropTypes.array
};

export default SearchPageItemsList;