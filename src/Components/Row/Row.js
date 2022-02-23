import React, { useEffect, useState } from "react";
import axios from "../../Services/axios";
import { Link } from "react-router-dom";
import "./Row.css";

const base_url = "https://themoviedb.org/t/p/original";
function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map((movie) => (
          <Link to={`/movies/${movie.id}`}>
            <img
              key={movie.id}
              className={`row_poster ${isLargeRow && "row_posterLarge"}`}
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Row;
