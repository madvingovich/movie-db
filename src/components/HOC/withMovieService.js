import React from 'react';
import MovieService from "../../services/movie-service";

const withMovieService = () => (Wrapped) => {
    const movieService = new MovieService();

    return (props) => {
        return <Wrapped {...props} movieService={movieService} />
    }
};

export default withMovieService;