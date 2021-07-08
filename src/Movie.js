import React from "react";
import PropTypes from "prop-types";
import "./Movie.css"

function Movie({id, year, title, summary, poster, rating, genres}) {
    return (
        <div className="movie">
            <h3 className="movie__title" style={{backgroundColor:"blue"}}>{title}</h3>
            <h4 className="movie__year">{year}</h4>
            <p className="movie__summary">{summary}</p>
            <ul className="genres">
                {genres.map((genre, index)=>(
                    <li className="genres__genre" key={index}>{genre}</li>
                    ))}
            </ul>
            <img src={poster} alt={title} title={title} />
            <p className="movie__rating">rating: {rating} / 10</p>
        </div>
    );
}

Movie.propTypes = {
    id      : PropTypes.number.isRequired,
    year    : PropTypes.number,
    title   : PropTypes.string.isRequired,        
    summary : PropTypes.string,
    poster  : PropTypes.string,
    rating  : PropTypes.number,
    genres  : PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie