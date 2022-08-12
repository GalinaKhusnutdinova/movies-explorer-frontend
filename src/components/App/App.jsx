// import logo from '../../logo.svg';
import React from "react";
import { Switch, Route } from "react-router-dom";
import Main from "../Main/Main.jsx";
// import Header from "../Header/Header";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Footer from "../Footer/Footer";
import "./App.css";
import HeaderAuth from "../HeaderAuth/HeaderAuth";
import Navigation from "../Navigation/Navigation.jsx";

// const location = document.location;

function App() {
  return (
    <div className="page">
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/movies">
          <Navigation />
          <HeaderAuth />
          <Movies />
          <Footer />
        </Route>
        <Route path="/saved-movies">
          <Navigation />
          <HeaderAuth />
          <SavedMovies />
          <Footer />
        </Route>
        <Route path="/profile">
          <Navigation />
          <HeaderAuth />
          <Profile />
        </Route>
        <Route path="/signin">
          <Login />
        </Route>
        <Route path="/signup">
          <Register />
        </Route>
      </Switch>
      {/* <Route>
        {(location.pathname === "/movies" || location.pathname === "/movies" ||
          location.pathname === "/saved-movies") && <Footer />}
      </Route> */}
    </div>
  );
}

export default App;
