import React, { useState, useRef } from "react";
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
  // const varName = useRef(initialisation);
  const ulRef = useRef(null);
  const ref = useRef(null);

  return (
    <div ref={ulRef}>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" ref={ref} />
        <button></button>
      </form>
      <Filter filter={filter} setFilter={setFilter} />
      <ul>
        {movies
          .filter((movie) => {
            return movie.name.toLowerCase().includes(filter.toLowerCase());
          })
          .map((movie) => (
            <Movie movie={movie} />
          ))}
      </ul>
    </div>
  );
};

export default MoviesList;
