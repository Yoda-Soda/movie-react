import React, { useState, useEffect } from "react";
import Movie from "./Movie";
import Filter from "../Filter";

const POPULAR_API_URL =
  "https://api.themoviedb.org/3/discover/movie?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&api_key=" +
  process.env.REACT_APP_MOVIE_API;

const MoviesList = () => {
  const [filter, setFilter] = useState("");
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    try {
      const res = await fetch(POPULAR_API_URL);
      const movies = await res.json();
      setMovies(movies.results);
      //console.log("movies", movies);
    } catch (error) {}
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <Filter filter={filter} setFilter={setFilter} />
      <ul>
        {movies
          .filter((movie) => {
            return movie.title.toLowerCase().includes(filter.toLowerCase());
          })
          .map((movie) => (
            <Movie key={movie.id} movie={movie} />
          ))}
      </ul>
    </div>
  );
};

export default MoviesList;
