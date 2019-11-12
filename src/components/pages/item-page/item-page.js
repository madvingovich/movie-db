import React, { Component } from 'react';
import Loader from "../../loader";
import { withMovieService } from '../../HOC';

import imdbImage from './imdb.jpg';

import './item-page.css';

class ItemPage extends Component {

    state = {
        loading: true,
        item: null
    };

    componentDidMount() {
        const { movieService } = this.props;
        movieService
            .getItem(this.props.match.params.title)
            .then(item => {
                this.setState({
                    loading: false,
                    item
                })
            })

    }

    render() {
        const { loading, item } = this.state;
        if(loading) return <Loader />;

        const {
            Actors, Country, Director,
            Genre, Plot, Poster, Production,
            Ratings, Released, Runtime, Type, Title,
            Website, Writer, imdbID, imdbRating, imdbVotes,
            totalSeasons
        } = item;

        const imdbUrl = `https://www.imdb.com/title/${imdbID}/`;

        const ratings = Ratings.map((rate, idx) => {
            return <p key={idx} className="ml-2 ml-md-3"><b>{rate.Source}:</b> {rate.Value}</p>
        });

        return (
            <div className="row item-content">
               <div className="col-12 col-md-3 d-flex d-md-block mb-4 mb-md-0">
                   <img className="item-page-main-image" src={Poster} alt="poster"/>
                   <div className="pl-3 pl-md-0">
                       <h4 className="mt-4">Ratings:</h4>
                       {ratings}
                   </div>
               </div>
               <div className="col-12 col-md-9">
                   <div className="item-head d-flex align-items-start justify-content-between">
                       <h1>{Title}</h1>
                       <p className="head-rate mb-0 ml-4 d-flex align-items-center">
                           <b>{imdbRating}</b> <span className="ml-1">( {imdbVotes} )</span>
                           <a href={imdbUrl} target="_blank" rel="noopener noreferrer">
                               <img className="imdb-image ml-2" src={imdbImage} alt="imdb"/>
                           </a>
                       </p>
                   </div>
                   <p><b>Type:</b> {Type}</p>
                   { totalSeasons ? <p><b>Total seasons:</b> {totalSeasons}</p> : null }
                   <p><b>Country:</b> {Country}</p>
                   { Director ? <p><b>Director:</b> {Director}</p> : null }
                   { Writer ? <p><b>Writer:</b> {Writer}</p> : null }
                   { Production ? <p><b>Production:</b> {Production}</p> : null }
                   <p><b>Released:</b> {Released}</p>
                   <p><b>Genre:</b> {Genre}</p>
                   <p><b>Actors:</b> {Actors}</p>
                   <p><b>Plot:</b> {Plot}</p>
                   <p><b>Runtime:</b> {Runtime}</p>
                   { Website ? <p><b>Website:</b> {Website}</p> : null }
               </div>
            </div>
        );
    }
}

export default withMovieService()(ItemPage);