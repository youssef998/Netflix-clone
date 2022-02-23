import React, { useEffect, useState } from "react";
import axios from "../../Services/axios";
import requests from "../../Services/requests";
import "./Banner.css";
function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
            https://themoviedb.org/t/p/original/${movie?.backdrop_path}            
        )`,
        backgroundPosition: "center center",
      }}
    >
      {/* contents for the banner */}
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        {/* div with 2 buttons */}
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My list</button>
        </div>
        {/* description */}
        <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="banner-fadeBottom" />
    </header>
  );
}

export default Banner;
