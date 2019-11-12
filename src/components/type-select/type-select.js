import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TypeSelect extends Component {
    static propTypes = {
        changeType: PropTypes.func.isRequired
    };

    state = {
        selected: null
    };

    onSelected = (e) => {
        const selected = e.target.value === "any" ? null : e.target.value;

        this.setState({ selected });

        this.props.changeType(selected);
    };

    render() {
        return (
            <select onChange={this.onSelected} className="mx-2 mx-md-0">
                <option value="any">Any type</option>
                <option value="movie">Movie</option>
                <option value="series">Series</option>
                <option value="episode">Episode</option>
            </select>
        );
    }
};