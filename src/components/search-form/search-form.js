import React, { Component } from 'react';
import YearInput from "../year-input";
import TypeSelect from "../type-select";
import SearchInput from "../search-input";
import { withMovieService } from '../HOC';
import {parse} from "query-string";

class SearchForm extends Component {

    state = {
        searchValue: '',
        year: '',
        type: null,
    };

    componentDidMount() {
        const searchObject = parse(this.props.searchString);

        if(Object.keys(searchObject).length) {
            const { searchValue, type, year } = searchObject;

            this.setState({
                    searchValue, year, type
            }, this.onSearch);
        }
    }

    changeYear = (year) => {
        this.setState({ year });
    };

    changeType = (type) => {
        this.setState({ type });
    };

    changeSearchValue = searchValue => {
        this.setState({ searchValue });
    };

    onSearch = () => {
        const { onError, onLoadingItems, updateItems, movieService } = this.props;
        const { searchValue, year, type } = this.state;

        if(!searchValue) {
            onError('No search value!');
            return;
        }

        onLoadingItems();

        movieService
            .search(searchValue, year, type)
            .then(res => {
                if(res.Error) {
                    onError(res.Error);
                } else {
                    updateItems(res.Search);
                    this.props.history.push(`?searchValue=${searchValue}&year=${year}&type=${type}`)
                }
            })
            .catch(onError);
    };

    render() {
        return (
            <form
                className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-around"
                action="#"
                onSubmit={(e) => {
                    e.preventDefault(); this.onSearch()
                }}>

                <YearInput changeYear={this.changeYear} />

                <TypeSelect changeType={this.changeType} />

                <div className="search-input-wrapper my-3 my-md-0 d-flex justify-content-center justify-content-md-end">
                    <SearchInput onChange={this.changeSearchValue} />
                    <button onClick={this.onSearch}>Search</button>
                </div>
            </form>
        );
    }
}

export default withMovieService()(SearchForm);