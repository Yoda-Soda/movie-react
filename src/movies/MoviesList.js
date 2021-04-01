import React, { useState, useEffect } from "react";
import Movie from "./Movie";
import Filter from "../Filter";

const POPULAR_API_URL =
  "https://api.themoviedb.org/3/discover/movie?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&api_key=" +
  process.env.REACT_APP_MOVIE_API;

const CONFIG_URL = `https://api.themoviedb.org/3/configuration?api_key=${process.env.REACT_APP_MOVIE_API}`;

const MoviesList = () => {
  const [filter, setFilter] = useState("");
  const [movies, setMovies] = useState([]);
  const [config, setConfig] = useState({});

  const getMovies = async () => {
    try {
      const res = await fetch(POPULAR_API_URL);
      const movies = await res.json();
      setMovies(movies.results);
    } catch (error) {}
  };

  const getConfig = async () => {
    try {
      const res = await fetch(CONFIG_URL);
      const config = await res.json();
      setConfig(config);
    } catch (error) {}
  };

  useEffect(() => {
    getConfig();
    getMovies();
  }, []);

  return (
    <div>
      <Filter filter={filter} setFilter={setFilter} />
      <ul className="movies-list">
        {movies
          .filter((movie) => {
            return movie.title.toLowerCase().includes(filter.toLowerCase());
          })
          .map((movie) => (
            <Movie key={movie.id} config={config} movie={movie} />
          ))}
      </ul>
    </div>
  );
};

export default MoviesList;
