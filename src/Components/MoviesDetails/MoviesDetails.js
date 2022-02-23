import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import imdb from "../../Assets/imdb.png";
import star from "../../Assets/star.png";
import axios from "../../Services/axios";
import Fade from "react-reveal/Fade";
import "./MoviesDetails.scss";
import Nav from "../Navbar/Nav";

function MoviesDetails(props) {
  const params = useParams();
  const API_KEY = "da7dd599ef491f4f3dbc57bf6d15eb77";
  const [movie, setMovie] = useState({});
  const fetchUrl = `https://api.themoviedb.org/3/movie/${params.movieId}?api_key=${API_KEY}&with_genres=99`;
  const [favorite, setfavorite] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovie(request.data);
      console.log(request.data);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  const background = `http://image.tmdb.org/t/p/w1280/${movie.poster_path}`;
  const poster = `http://image.tmdb.org/t/p/w1280/${movie.poster_path}`;
  const addMovieToList = (movieList) => {
    const newfavorite = [...favorite, movie];
    setfavorite(newfavorite);
    console.log(newfavorite);
  };
  return (
    <Fragment>
      <Nav />
      <div className="item-page">
        <img src={`${background}`} alt="background" className="item-page__bg" />
        <div className="item">
          <Fade>
            <div className="item__outer">
              <div className="item__inner">
                <div className="item__img-box">
                  <img
                    src={`${poster}`}
                    alt="poster"
                    className="item__poster-img"
                  />
                </div>
                <div className="item__text-box">
                  <h1 className="item__title">{movie.title}</h1>
                  <h1 className="item__title">{movie.name}</h1>
                  <span className="item__overview">{movie.overview}</span>
                  <div className="item-rating">
                    <img src={imdb} alt="imdb" className="item-rating__imdb" />
                    <span className="item-rating__rank">
                      {movie.vote_average}/
                    </span>
                    <span className="item-rating__ten">10</span>
                    <img src={star} alt="imdb" className="item-rating__star" />
                  </div>
                </div>
                <div className="item-page-footer__btn-container">
                  <button
                    className="item-page-footer__btn"
                    onClick={addMovieToList}
                  >
                    My List
                  </button>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </Fragment>
  );
}

export default MoviesDetails;
