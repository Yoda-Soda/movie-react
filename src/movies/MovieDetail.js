import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const MOVIE_API_URL = `https://api.themoviedb.org/3/movie/`;

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  const getMovie = async () => {
    const res = await fetch(
      `${MOVIE_API_URL}${id}?api_key=${process.env.REACT_APP_MOVIE_API}&language=en-US`
    );
    const resMovie = await res.json();
    setMovie(resMovie);
    console.log(resMovie);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      <h1>{movie.original_title}</h1>

      <p>{movie.overview}</p>
    </div>
  );
};

export default MovieDetail;
