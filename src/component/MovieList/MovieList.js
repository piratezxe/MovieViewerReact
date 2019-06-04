import React from 'react';


export const MovieList = ({movies}) => {

    const moviemaplist = movies.map(movie => <li key={movie.imdbID}>
        {movie.Title}
        {movie.Year}
    </li>);

    return <ul>
        {moviemaplist}
    </ul>
};

