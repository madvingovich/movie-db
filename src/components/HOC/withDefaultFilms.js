import React from 'react';
import MovieService from "../../services/movie-service";

const withDefaultMovies = () => (Wrapped) => {
    const movieService = new MovieService();
    const movies = movieService.getDefaultMovies();

    return (props) => {
        return <Wrapped {...props} movies={movies} />
    }
};

export default withDefaultMovies;