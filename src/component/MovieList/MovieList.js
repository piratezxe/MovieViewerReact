import React from 'react';
import Movie from './../Movie/Movie';
import './MovieList.module.scss';

export const MovieList = ({movies}) => {

    const moviemaplist = movies.Search.map(movie => <li key={movie.imdbID}>
        <Movie movie={movie}/>
    </li>);

    return (
        <div className="container">
            <ul>
                {moviemaplist}
            </ul>
        </div>
    );
};
