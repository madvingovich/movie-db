import React from 'react';
import ItemPreview from "../item-preview/item-preview";

const ItemsViewPage = ({ items, title }) => {
    const itemsList = items.map((item, idx) => {
        return <ItemPreview key={idx} item={item}/>
    });

    return (
        <div className="default-items">
            <h1 className="mb-4 text-center text-sm-left">{ title }</h1>
            <div className="row">
                {itemsList}
            </div>
        </div>
    );
};

export default ItemsViewPage;