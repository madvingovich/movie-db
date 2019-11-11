import React from 'react';
import MovieService from "../../services/movie-service";

const withDefaultSeries = () => (Wrapped) => {
    const movieService = new MovieService();
    const series = movieService.getDefaultSeries();

    return (props) => {
        return <Wrapped {...props} series={series} />
    }
};

export default withDefaultSeries;