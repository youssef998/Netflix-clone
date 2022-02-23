import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import Row from "./Row";
import requests from "../../Services/requests";
const base_url = "https://themoviedb.org/t/p/original";
function Movies({ title, fetchUrl, isLargeRow }) {
  return (
    <div className="App">
      <Nav />

      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
    </div>
  );
}

export default Movies;
