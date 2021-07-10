import React from "react";
import PropTypes from "prop-types";
import "./Movie.css"
import { Link } from "react-router-dom"

function Movie({id, year, title, summary, poster, rating, genres}) {
    return (
        <Link
            to={{
                pathname: "/movie-detail",
                state: {
                    year,
                    title,
                    summary,
                    poster,
                    rating,
                    genres
                }
            }}
        >
            <div className="movie">
                <img src={poster} alt={title} title={title} />
                <div className="movie__data">
                    <h3 className="movie__title">{title}</h3>
                    <h4 className="movie__year">{year}</h4>
                    <ul className="movie__genres">
                        {genres.map((genre, index)=>(
                            <li className="movie_genre" key={index}>{genre}</li>
                            ))}
                    </ul>
                    <p className="movie__summary">{summary.slice(0, 240)} ...</p>
                    <p className="movie__rating">rating: {rating} / 10</p>
                </div>
            </div>
        </Link>
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