import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
// import Movies from "./Components/movies/Movies";
import MoviesDetails from "./Components/MoviesDetails/MoviesDetails";
import NotFound from "./Components/Notfound/NotFound";
import AuthContext from "./store/auth-context";
import { useContext } from "react";
import Watchlist from "./Components/watchlist/Watchlist";
function App() {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/browse" />} />
        {/* <Route path="/browse" element={<Home />} /> */}
        {isLoggedIn && <Route path="/browse" element={<Home />} />}
        {!isLoggedIn && <Route path="/browse" element={<Login />} />}
        <Route path="/login" element={<Login />} />

        {/* <Route path="/movies/" element={<Movies />} /> */}
        <Route path="/movies/:movieId" element={<MoviesDetails />} />
        <Route path="/watchlist/:uId" element={<Watchlist />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
