import React, { useState, useEffect } from "react";
import Movie from "./Movie";
import Filter from "../Filter";
const movies = [
  {
    name: "36th Chamber",
  },
  {
    name: "5 Deadly Venoms",
  },
  {
    name: "Man of Iron",
  },
];

const MoviesList = () => {
  const [filter, setFilter] = useState("");

  useEffect(() => {
    console.log("hit effect");
  }, [filter]);

  return (
    <div>
      <Filter filter={filter} setFilter={setFilter} />
      <ul>
        {movies
          .filter((movie) => {
            return movie.name.toLowerCase().includes(filter.toLowerCase());
          })
          .map((movie) => (
            <Movie key={movie.name} movie={movie} />
          ))}
      </ul>
    </div>
  );
};

export default MoviesList;
