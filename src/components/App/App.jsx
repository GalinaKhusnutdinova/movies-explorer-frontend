// import logo from '../../logo.svg';
import React from "react";
import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import Main from "../Main/Main.jsx";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Footer from "../Footer/Footer";
import ErrorNotFound from "../ErrorNotFound/ErrorNotFound";
import "./App.css";
import HeaderAuth from "../HeaderAuth/HeaderAuth";
import Navigation from "../Navigation/Navigation.jsx";
import * as moviesAuth from "../../utils/MoviesAuth";
import { mainApi } from "../../utils/MainApi";
import { moviesApi } from "../../utils/MoviesApi";
import HeaderNoAuth from "../HeaderNoAuth/HeaderNoAuth.jsx";
import { CurrentUserContext } from "../../context/CurrentUserContext";

// const location = document.location;

function App() {
  const [isHeaderAuthOpen, setIsHeaderAuthOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [movies, setMovies] = useState([]);
  const [filterMovies, setFilterMovies] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState();
  const [isEditProfile, setIsEditProfile] = useState(false);
  const [disabled, setDisabled] = useState("disabled");
  const [textOpen, setTextOpen] = useState("false");
  const [filterMessage, setFilterMessage] = useState([]);
  const [filterMessageSaved, setFilterMessageSaved] = useState([]);

  const [profileMessage, setProfileMessage] = useState("");
  const [registerMessage, setRegisterMessage] = useState("");
  const [isRegistMessage, setIsRegistMessage] = useState(false);
  const [loginMessage, setLoginMessage] = useState("");
  const [isLoginMessage, setIsLoginMessage] = useState(false);
  const [isPreloaderOpen, setIsPreloaderOpen] = useState(false);
  const [buttomMoviesMore, setButtomMoviesMore] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);
  const [filmsSaveFilter, setFilmsSaveFilter] = useState([]);
  const [checkboxStatusMovies, setCheckboxStatusMovies] = useState(false);
  const [checkboxStatusSavedMovies, setCheckboxStatusSavedMovies] = useState(false);


  // const location = document.location;
  const history = useHistory();
  useEffect(() => {
    if (loggedIn) {
      mainApi
        .getProfile()
        .then((useData) => {
          setCurrentUser(useData);
        })
        .catch((err) => {
          console.log("Error: ", err);
        });
    }
  }, [loggedIn]);

  useEffect(() => {
    updateFilterMessage();
    updateRegisterMessage();
  }, []);

  function updateFilterMessage() {
    setTextOpen("false");
    setFilterMessage("");
    setFilterMessageSaved("");
  }

  function updateRegisterMessage() {
    setRegisterMessage("");
    setLoginMessage("");
  }

  function filterSavedMoviesClick(keyValue) {
    updateFilterMessage();
    const filmsSaveFilter = savedMovies.filter((item) => {
      return item.nameRU.toLowerCase().includes(keyValue.toLowerCase());
    });

    if (filmsSaveFilter.length === 0) {
      setTextOpen("true");
      setFilterMessageSaved("«Ничего не найдено»");
      setFilmsSaveFilter([]);
    }

    if (keyValue === "") {
      setTextOpen("true");
      setFilterMessageSaved("«Нужно ввести ключевое слово»");
      setFilmsSaveFilter([]);
    }

    setIsPreloaderOpen(false);
console.log('filmsSaveFilter',filmsSaveFilter)
    if (checkboxStatusSavedMovies) {
      setFilmsSaveFilter(filterMoviesCheckbox(filmsSaveFilter));
    } else {
      setFilmsSaveFilter(filmsSaveFilter);
    }
  
  }

  function saveLocalCheckStatusStart() {
    localStorage.setItem("movies", checkboxStatusMovies); //запишем его в хранилище по ключу
    let returnObj = JSON.parse(localStorage.getItem("movies")); //спарсим его обратно объект
    setCheckboxStatusMovies(returnObj);
  }

  function handleGetMovies(keyValue) {
    setIsPreloaderOpen(true);
    updateFilterMessage();
    setButtomMoviesMore(false);

    if (keyValue.length === 0) {
      console.log("handleGetMovies");
      setTextOpen("true");
      setFilterMessage("«Нужно ввести ключевое слово»");
      setIsPreloaderOpen(false);
    } else {
      moviesApi
        .getMovies()
        .then((data) => {
          let serialObj = JSON.stringify(data); //сериализуем obj
          localStorage.setItem("movies", serialObj); //запишем его в хранилище по ключу
          let returnObj = JSON.parse(localStorage.getItem("movies")); //спарсим его обратно объект
          setMovies(returnObj);
          saveLocalCheckStatusStart();
        })
        .catch((err) => {
          console.log("Error: ", err);
          setTextOpen("true");
          setFilterMessage(
            "«Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз»"
          );
          setIsPreloaderOpen(false);
        });

      handleFilterFilm(keyValue);
    }
  }

  function handleGetSaveMovies() {
    mainApi
      .getSaveMovies()
      .then((data) => {
        setSavedMovies(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleFilterFilm(keyValue) {
    setFilterMessageSaved();
    const filmsFilter = movies.filter((item) => {
      return item.nameRU.toLowerCase().includes(keyValue.toLowerCase());
    });

    if (filmsFilter.length === 0) {
      console.log("handleFilterFilm");
      setTextOpen("true");
      setFilterMessage("«Ничего не найдено»");
    }
    if (filmsFilter.length > 3) {
      setButtomMoviesMore(true);
    }
    setIsPreloaderOpen(false);
    let serialObj = JSON.stringify(filmsFilter); //сериализуем obj
    localStorage.setItem("filmsFilter", serialObj); //запишем его в хранилище по ключу
    let returnObj = JSON.parse(localStorage.getItem("filmsFilter")); //спарсим его обратно объект
    if (checkboxStatusMovies) {
      setFilterMovies(filterMoviesCheckbox(filterMovies));
    } else {
      setFilterMovies(returnObj);
    }
  }

  function handleUpdateUser(data) {
    console.log(data);
    console.log(currentUser);
    if (data.name === currentUser.name && data.email === currentUser.email) {
      setIsEditProfile(false);
      setDisabled("disabled");
    } else {
      mainApi
        .editProfile(data)
        .then((res) => {
          setCurrentUser(res);
          setUserData(res);
          setIsEditProfile(false);
          setDisabled("disabled");
        })
        .catch((err) => {
          setProfileMessage(err.message);
          console.log(err);
        });
    }

    setProfileMessage("");
  }

  function handleEditPrifile() {
    setIsEditProfile(true);
    setDisabled(null);
  }

  function hendleHeaderAuthClick() {
    setIsHeaderAuthOpen(true);
  }

  function closeHeaderMenu() {
    setIsHeaderAuthOpen(false);
  }

  function handleMoviesSaveDelite(film) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isSaved = savedMovies.some((savedMovie) => {
      return savedMovie.movieId === film.id;
    });

    // Отправляем запрос в API и получаем обновлённые данные карточки
    isSaved
      ? mainApi
          .deleteSave(film._id)
          .then(() => {
            setSavedMovies((prevState) =>
              prevState.filter((item) => item._id !== film._id)
            );
          })
          .catch((res) => {
            console.log(res);
          })
      : mainApi
          .addSave(film)
          .then((newMovies) => {
            setSavedMovies([newMovies, ...savedMovies]);
          })
          .catch((res) => {
            console.log(res);
          });
  }

  function handleMoviesDelete(film) {
    mainApi
      .deleteMovies(film._id)
      .then(() => {
        setSavedMovies((state) =>
          state.filter((item) => item._id !== film._id)
        );
      })
      .catch((res) => {
        console.log(res);
      });
  }

  function changeCheckboxSaved({ target: { checked } }) {
    setCheckboxStatusMovies(checked);
    console.log('sav',checkboxStatusSavedMovies);

    if(!checkboxStatusSavedMovies) {
      setFilmsSaveFilter(filterMoviesCheckbox(savedMovies))
    } else {
      console.log('filmsSaveFilter',filmsSaveFilter)
      setFilmsSaveFilter(filmsSaveFilter)
    }
    ;
  }

  function changeCheckbox({ target: { checked } }) {
    setCheckboxStatusMovies(checked);
    console.log('mov',checkboxStatusMovies);

    if(!checkboxStatusMovies) {
      setFilterMovies(filterMoviesCheckbox(filterMovies))
    } else {
      setFilterMovies(JSON.parse(localStorage.getItem("filmsFilter")))
    }
    ;
  }

  function filterMoviesCheckbox(filterMovies) {
    console.log(checkboxStatusMovies);

    const filmsCheckboxMovies = filterMovies.filter((item) => {
      return item.duration <= 40;
    });
    console.log(filmsCheckboxMovies);
    return filmsCheckboxMovies;
  }

  const handleLogin = ({ email, password }) => {
    updateRegisterMessage();
    return moviesAuth
      .authorize(email, password)
      .then((data) => {
        if (data.token) {
          localStorage.setItem("token", data.token);
          tokenCheck();
        }
        setLoginMessage("");
      })
      .catch((err) => {
        setLoginMessage(err.message);
        setIsLoginMessage(true);
        console.log(err);
      });
  };

  const handleRegister = ({ name, email, password }) => {
    updateRegisterMessage();

    return moviesAuth
      .register(name, email, password)
      .then(() => {
        handleLogin({ email, password });
        setRegisterMessage("");
      })
      .catch((err) => {
        setRegisterMessage(err.message);
        setIsRegistMessage(true);
        console.log(err);
      });
  };

  const tokenCheck = () => {
    if (localStorage.getItem("token")) {
      let token = localStorage.getItem("token");

      moviesAuth
        .getContent(token)
        .then((res) => {
          if (res) {
            let userData = {
              name: res.name,
              email: res.email,
            };

            setLoggedIn(true);
            setUserData(userData);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const singOut = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
    setUserData(null);
    localStorage.removeItem("movies");
    history.push("/signin");
  };

  useEffect(() => {
    tokenCheck();
    console.log(333);
  }, []);

  useEffect(() => {
    if (loggedIn) {
      history.push("/");
      handleGetSaveMovies();
    }
    console.log(444);
  }, [loggedIn, history]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Switch>
          <Route exact path="/">
            {loggedIn ? (
              <HeaderAuth
                name="auth-main"
                onHeaderAuth={hendleHeaderAuthClick}
              />
            ) : (
              <HeaderNoAuth />
            )}
            <Main />
          </Route>
          <Route path="/movies">
            <HeaderAuth name="auth" onHeaderAuth={hendleHeaderAuthClick} />
            <Movies
              message={filterMessage}
              textOpen={textOpen}
              onGetMovies={handleGetMovies}
              filterMovies={filterMovies}
              isOpen={isPreloaderOpen}
              buttomMoviesMore={buttomMoviesMore}
              onMoviesClickSave={handleMoviesSaveDelite}
              savedMovies={savedMovies}
              changeCheckbox={changeCheckbox}
              // likeButtonSaved={likeButtonSaved}
            />
            <Footer />
          </Route>
          <Route path="/saved-movies">
            <HeaderAuth name="auth" onHeaderAuth={hendleHeaderAuthClick} />
            <SavedMovies
              filterSavedMoviesClick={filterSavedMoviesClick}
              handleMoviesDelete={handleMoviesDelete}
              savedMovies={savedMovies}
              filmsSaveFilter={filmsSaveFilter}
              message={filterMessageSaved}
              textOpen={textOpen}
              setFilmsSaveFilter={setFilmsSaveFilter}
              isOpen={isPreloaderOpen}
              changeCheckboxSaved={changeCheckboxSaved}
            />
            <Footer name="saved" />
          </Route>
          <Route path="/profile">
            <HeaderAuth name="auth" onHeaderAuth={hendleHeaderAuthClick} />
            <Profile
              onUpdateUser={handleUpdateUser}
              isOpen={isEditProfile}
              userData={userData}
              singOut={singOut}
              handleEditPrifile={handleEditPrifile}
              disabled={disabled}
              profileMessage={profileMessage}
            />
          </Route>
          <Route path="/signin">
            <Login
              isOpen={isLoginMessage}
              message={loginMessage}
              handleLogin={handleLogin}
            />
          </Route>
          <Route path="/signup">
            <Register
              isOpen={isRegistMessage}
              message={registerMessage}
              handleRegister={handleRegister}
            />
          </Route>
          <Route path="*">
            <ErrorNotFound />
          </Route>
        </Switch>
        <Navigation isOpen={isHeaderAuthOpen} onClose={closeHeaderMenu} />
        {/* <Route>
        {(loggedIn && <Footer />}
      </Route> */}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
