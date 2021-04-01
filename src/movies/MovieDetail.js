import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const MOVIE_API_URL = `https://api.themoviedb.org/3/movie/`;

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  //   const getMovie = async () => {
  //     try {
  //       const res = await fetch(
  //         `${MOVIE_API_URL}${id}?api_key=${process.env.REACT_APP_MOVIE_API}&language=en-US`
  //       );
  //       const resMovie = await res.json();
  //       setMovie(resMovie);
  //       console.log(resMovie);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

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

    //getMovie();
  }, [id]);

  if (!movie.genres) return null;

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <ul>
        {movie.genres.map((genre) => {
          return <li key={genre.id}>{genre.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default MovieDetail;
