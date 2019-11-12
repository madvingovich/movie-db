import React, { Component } from 'react';
import PropTypes from "prop-types";

export default class SearchInput extends Component {
    static propTypes = {
        onChange: PropTypes.func.isRequired
    };

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
                    placeholder="Title"/>
        );
    }
};