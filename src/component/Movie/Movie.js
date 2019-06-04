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
        </div>
    )
};

