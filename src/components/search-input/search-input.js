import React, { Component } from 'react';

export default class SearchInput extends Component {
    state = {
        value: ''
    };

    onValueChange = (e) => {
        const { value } = e.target;

        this.setState({
            value
        });

        this.props.onChange(value);
    };

    render() {
        return (
                <input
                    className="search-input"
                    onChange={this.onValueChange}
                    value={this.state.value}
                    type="search"
                    placeholder="Type to search..."/>
        );
    }
};