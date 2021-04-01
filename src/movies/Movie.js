import React from "react";
import PropTypes from "prop-types";

const Movie = ({ movie }) => {
  return (
    <div>
      <li>{movie.title}</li>
    </div>
  );
};

Movie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Movie;
