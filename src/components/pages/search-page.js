import React, { Component } from 'react';
import SearchForm from "../search-form";
import SearchPageItemsList from "../search-page-items-list";
import Loader from "../loader";

import './search-page.css';


class SearchPage extends Component {
    state = {
        items: null,
        loading: false,
        error: false
    };

    updateItems = (items) => {
        this.setState({
            loading: false,
            items
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
                {this.state.items ? <SearchPageItemsList items={this.state.items} /> : null}
            </div>
        );
    }
}

export default SearchPage;