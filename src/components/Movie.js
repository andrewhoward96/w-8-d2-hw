import React from "react";

const Movie = ({movie}) => {
    return (
        <li>
            <a href={movie.url} target="_blank">{movie.name}</a>
        </li>
    )

}


export default Movie;