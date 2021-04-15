import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const MOVIE_API_URL = `https://api.themoviedb.org/3/movie/`;
const IMAGE_URL_BASE = "http://image.tmdb.org/t/p/";
const BACKDROP_SIZE = "original";
const POSTER_SIZE = "w342";

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          `${MOVIE_API_URL}${id}?api_key=${process.env.REACT_APP_MOVIE_API}&language=en-US`
        );
        const resMovie = await res.json();
        setMovie(resMovie);
        console.log(resMovie);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [id]);

  if (!movie.title) return null;

  return (
    <div>
      <img
        className="backdrop"
        src={IMAGE_URL_BASE + BACKDROP_SIZE + movie.backdrop_path}
        alt={movie.title + " Backdrop"}
      ></img>
      <div className="detail-details">
        <img
          className="detail-poster"
          src={IMAGE_URL_BASE + POSTER_SIZE + movie.poster_path}
          alt={movie.title + " Poster"}
        ></img>
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
        <ul>
          {movie.genres.map((genre) => {
            return <li key={genre.id}>{genre.name}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default MovieDetail;
