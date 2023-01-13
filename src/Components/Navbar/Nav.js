import React, { useEffect, useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Nav.css";
import AuthContext from "../../store/auth-context";
// import SearchLogo from "./Assets/search-icon.svg";
// import { Link } from "react-router-dom";
function Nav() {
  const [show, handleShow] = useState(false);
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  const history = useNavigate();
  const searchInput = React.useRef(null);
  const [userInput, setUserInput] = useState("");
  const onChange = async (event) => {
    setUserInput(event.target.value);
  };
  const logoutHandler = () => {
    authCtx.logout();
    history("/login");
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <NavLink to="/">
        <img
          className="nav_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png?20190206123158"
          alt="Netflix Logo"
        />
      </NavLink>
      {isLoggedIn && (
        <button className="logout" onClick={logoutHandler}>
          Logout
        </button>
      )}

      {/* <input
        // ref={searchInput}
        // value={userInput}
        // onChange={(event) => onChange(event)}
        className="search_bar"
        type="text"
        placeholder="Title, genres, people"
      /> */}

      {isLoggedIn && (
        <img
          className="nav_avatar"
          src="https://th.bing.com/th/id/R.ba127376518c4bdb12d272b7f334358f?rik=IVfgm4Hr7NL0%2bw&pid=ImgRaw&r=0"
          alt="avatar Logo"
        />
      )}
    </div>
  );
}

export default Nav;
