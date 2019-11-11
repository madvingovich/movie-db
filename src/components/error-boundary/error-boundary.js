import React, { Component } from 'react';
import errorImage from './error.png';

import './error-boundary.css';

export default class ErrorBoundary extends Component{
    state = {
        error: false
    };

    componentDidCatch(error) {
        this.setState({ error: error })
    }

    render() {
        return this.state.error ? this.errorView() : this.props.children;
    }

    errorView() {
        return (
            <div className="error">
                <h2>{ this.state.error }</h2>
                <img src={errorImage} alt="error"/>
            </div>
        );
    }
};