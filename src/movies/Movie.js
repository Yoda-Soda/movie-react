import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Movie = ({ movie, config }) => {
  return (
    <li>
      <Link to={`/movie/${movie.id}`}>
        {/* insures that if config hasn't loaded before image url that it gets ignored */}
        {config.images?.base_url && (
          <img
            src={config.images.base_url + "w342" + movie.poster_path}
            alt={`${movie.title} Poster`}
          />
        )}
      </Link>
    </li>
  );
};

Movie.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
  }).isRequired,
  config: PropTypes.shape({
    images: PropTypes.shape({
      base_url: PropTypes.string,
    }),
  }),
};

export default Movie;
