import React from "react";
import PropTypes from "prop-types";

const Movie = ({ movie, config }) => {
  return (
    <li>
      {/* insures that if config hasn't loaded before image url that it gets ignored */}
      {config.images?.base_url && (
        <img
          src={config.images.base_url + "w342" + movie.poster_path}
          alt={`${movie.title} Poster`}
        />
      )}
      <h3>{movie.title}</h3>
    </li>
  );
};

Movie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
  }).isRequired,
};

export default Movie;
