import React, { Component } from 'react';
import SearchForm from "../../search-form";
import SearchPageItemsList from "../../search-page-items-list";
import Loader from "../../loader";
import PropTypes from 'prop-types';

import './search-page.css';


class SearchPage extends Component {
    static propTypes = {
        history: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        match: PropTypes.object.isRequired
    };

    state = {
        items: null,
        loading: false,
        pages: null,
        error: false
    };

    updateItems = (items, pages) => {
        this.setState({
            loading: false,
            items,
            pages
        });
    };

    onError = (error) => {
        this.setState({
            loading: false,
            error
        })
    };

    onLoadingItems = () => {
        this.setState({
            error: false,
            loading: true,
        });
    };


    render() {
        const { history, location: { search } } = this.props;
        return (
            <div className="search-box">
                <SearchForm
                    history={history}
                    searchString={search}
                    onError={this.onError}
                    onLoadingItems={this.onLoadingItems}
                    updateItems={this.updateItems} />

                {this.state.loading ? <Loader /> : null}
                {this.state.error ? <h1 className="text-center py-5">{this.state.error}</h1> : null}

                <SearchPageItemsList items={this.state.items} />
            </div>
        );
    }
}

export default SearchPage;