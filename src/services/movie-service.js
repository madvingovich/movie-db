export default class MovieService {
    _defaultPath = 'http://www.omdbapi.com/';

    defaultMovies = [
        {
            "Title": "Joker",
            "Year": "2019",
            "imdbID": "tt7286456",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"
        },
        {
            "Title": "Avengers: Endgame",
            "Year": "2019",
            "imdbID": "tt4154796",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg"
        },
        {
            "Title": "Maleficent: Mistress of Evil",
            "Year": "2019",
            "imdbID": "tt4777008",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BZjJiYTExOTAtNWU0Yi00NzJjLTkwOTgtOTU2NWM1ZjJmYWVhXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"
        },
        {
            "Title": "Once Upon a Time in Hollywood",
            "Year": "2019",
            "imdbID": "tt7131622",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BOTg4ZTNkZmUtMzNlZi00YmFjLTk1MmUtNWQwNTM0YjcyNTNkXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_SX300.jpg"
        }
    ];

    defaultSeries = [
        {
            "Title": "Breaking Bad",
            "Year": "2008–2013",
            "imdbID": "tt0903747",
            "Type": "series",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjhiMzgxZTctNDc1Ni00OTIxLTlhMTYtZTA3ZWFkODRkNmE2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
        },
        {
            "Title": "Game of Thrones",
            "Year": "2011–",
            "imdbID": "tt0944947",
            "Type": "series",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjA5NzA5NjMwNl5BMl5BanBnXkFtZTgwNjg2OTk2NzM@._V1_SX300.jpg"
        },
        {
            "Title": "Peaky Blinders",
            "Year": "2013–",
            "imdbID": "tt2442560",
            "Type": "series",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTkzNjEzMDEzMF5BMl5BanBnXkFtZTgwMDI0MjE4MjE@._V1_SX300.jpg"
        },
        {
            "Title": "House",
            "Year": "2004–2012",
            "imdbID": "tt0412142",
            "Type": "series",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMDA4NjQzN2ItZDhhNC00ZjVlLWFjNTgtMTEyNDQyOGNjMDE1XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
        }

    ];

    async getResource(url) {
        const result = await fetch(url);

        if(!result.ok) {
            throw new Error(`Can't fetch ${url} \n Status: ${result.status}`);
        }

        return await result.json();
    }

    getItem = title => {
        return this.getResource(`${this._defaultPath}?t=${title}&apikey=531c3a2b&plot=full`);
    };

    search = (title, year, type, page) => {
        let url = `${this._defaultPath}?s=${title}&apikey=531c3a2b`;
        if(year) url += `&y=${year}`;
        if(type) url += `&type=${type}`;
        if(page) url += `&page=${page}`;

        return this.getResource(url);
    }
}