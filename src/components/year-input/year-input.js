import React, { Component } from 'react';

export default class YearInput extends Component {
    state = {
        value: ''
    };

    changeValue = e => {
        const value = e.target.value;
        if(value.match(/\D/) || value.length > 4) return;
        this.setState({ value });
        this.props.changeYear(value);
    };



    render() {
        return (
            <input
                value={this.state.value}
                onChange={this.changeValue}
                className="year-input mx-2 mx-md-0"
                type="text"
                placeholder="Year" />
        );
    }
};