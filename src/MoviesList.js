import React from "react";

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
  return (
    <div>
      <ul>
        {movies.map((movie) => {
          return <li key={movie.name}>{movie.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default MoviesList;
