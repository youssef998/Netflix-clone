import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "../Navbar/Nav";

function Watchlist() {
  const params = useParams();
  console.log(params);
  return (
    <Fragment>
      <p>{params.uId}</p>
      <h1>Watchlist</h1>
    </Fragment>
  );
}

export default Watchlist;
