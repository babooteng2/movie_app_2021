import React from "react";
import PropTypes from "prop-types";

function Movie({id, year, title, summary, poster, rating}) {
    return <div>
        <h5>{title}</h5>
        <h6>{year}</h6>
        <img src={poster} alt={summary} />
        <p>rating: {rating} / 10</p>
    </div>
}

Movie.propTypes = {
    id      : PropTypes.number.isRequired,
    year    : PropTypes.number,
    title   : PropTypes.string.isRequired,        
    summary : PropTypes.string,
    poster  : PropTypes.string,
    rating  : PropTypes.number,
}

export default Movie