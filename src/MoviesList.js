import React, { useState } from "react";

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
  return (
    <div>
      <label>
        Filter:
        <input
          type="text"
          onChange={(e) => setFilter(e.target.value)}
          value={filter}
        />
      </label>
      <ul>
        {movies
          .filter((movie) => {
            return movie.name.toLowerCase().includes(filter.toLowerCase());
          })
          .map((movie) => {
            return <li key={movie}>{movie.name}</li>;
          })}
      </ul>
    </div>
  );
};

export default MoviesList;
