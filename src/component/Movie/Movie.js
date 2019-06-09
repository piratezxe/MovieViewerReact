import React from 'react';

export const Movie = ({movie}) => {
    return (
        <div>
            <div>
                {movie.id}
            </div>
            <div>
                Title: {movie.Title}
            </div>
            <div>
                Year {movie.Year}
            </div>
            <div>
                Rank {movie.Value}
            </div>
            <div>
                Runtime {movie.Runtime}
            </div>
            <div>
                Genre: {movie.Genre}
            </div>
            <div>
                Movie: {movie.Director}
            </div>
            <div>
                Language: {movie.Language}
            </div>
            <div>
                ImbdbRanking: {movie.imdbRating}
            </div>
            <div>
                imdbVotes : {movie.imdbVotes}
            </div>
            <div>
                Type: {movie.Type}
            </div>
        </div>
    )
};

