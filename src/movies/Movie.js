import React from "react";
import PropTypes from "prop-types";

const Movie = ({ movie }) => {
  return (
    <div>
      <li>{movie.name}</li>
    </div>
  );
};

Movie.propTypes = {
  movie: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default Movie;
