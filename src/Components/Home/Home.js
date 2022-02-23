import "../../App.css";
import Row from "../Row/Row";
import requests from "../../Services/requests";
import Banner from "../Banner/Banner";
import Nav from "../Navbar/Nav";
import AuthContext from "../../store/auth-context";
import { useContext } from "react";
function Home() {
  // const authCtx = useContext(AuthContext);
  // const isLoggedIn = authCtx.isLoggedIn;
  return (
    <div className="App">
      <Nav />
      {/* <Nav /> */}
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchTrending} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default Home;
