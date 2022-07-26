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
import ProtectedRoute from "../ProtectedRoute.jsx";

function App() {
  let inintialSearchResult = JSON.parse(localStorage.getItem("filmsFilter"))
    ? JSON.parse(localStorage.getItem("filmsFilter"))
    : [];

  if (
    localStorage.getItem("filterMoviesCheckbox") &&
    JSON.parse(localStorage.getItem("filterMoviesCheckbox")) &&
    JSON.parse(localStorage.getItem("checkboxStatusMovies"))
  ) {
    inintialSearchResult = inintialSearchResult.filter((item) => {
      return item.duration <= 40;
    });
  }

  const [filterMoviesCheckbox, setFilterMoviesCheckbox] = useState([]);
  const [isHeaderAuthOpen, setIsHeaderAuthOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [movies, setMovies] = useState([]);
  const [filterMovies, setFilterMovies] = useState(inintialSearchResult);
  const [loggedIn, setLoggedIn] = useState(true || false);
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
  const [buttonMoviesMore, setButtonMoviesMore] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);
  const [filmsSaveFilter, setFilmsSaveFilter] = useState([]);
  const [checkboxStatusSavedMovies, setCheckboxStatusSavedMovies] =
    useState(false);
  const [checkboxStatusMovies, setCheckboxStatusMovies] = useState(
    localStorage.getItem("checkboxStatusMovies")
      ? JSON.parse(localStorage.getItem("checkboxStatusMovies"))
      : ""
  );

  useEffect(() => {
    const localLoginStatus = localStorage.getItem("loggedIn");
    setLoggedIn(localLoginStatus);
    tokenCheck();
  }, []);

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
    // handleGetSaveMovies()
    updateFilterMessage();
    const filmsSaveFilter = savedMovies.filter((item) => {
      return item.nameRU.toLowerCase().includes(keyValue.toLowerCase());
    });

    if (filmsSaveFilter.length === 0) {
      setTextOpen("true");
      setFilterMessageSaved("«Ничего не найдено»");
    }
    if (keyValue === "") {
      setTextOpen("true");
      setFilterMessageSaved("«Нужно ввести ключевое слово»");
    }
    setIsPreloaderOpen(false);
    let serialObj = JSON.stringify(filmsSaveFilter); //сериализуем obj
    localStorage.setItem("filmsSaveFilter", serialObj); //запишем его в хранилище по ключу
    let returnObj = JSON.parse(localStorage.getItem("filmsSaveFilter")); //спарсим его обратно объект
    if (checkboxStatusSavedMovies) {
      filterSavedMoviesCheckbox()
      // setFilmsSaveFilter(filterSavedMoviesCheckbox());
    } else {
      setFilmsSaveFilter(returnObj);
      // filterSavedMoviesCheckbox()
    }
  }

  function changeCheckboxSaved({ target: { checked } }) {
    setCheckboxStatusSavedMovies(checked);
    console.log(checked)

    if (checked) {
      // setFilmsSaveFilter(filterSavedMoviesCheckbox());
      filterSavedMoviesCheckbox()
    } else {
      if(localStorage.getItem("filmsSaveFilter")){
        setFilmsSaveFilter(JSON.parse(localStorage.getItem("filmsSaveFilter")));

      }else {
        setFilmsSaveFilter(JSON.parse(localStorage.getItem("saveMovies")));
      }
      
    }
  }
  

  function filterSavedMoviesCheckbox() {
    
    
    const localFilterSave = localStorage.getItem("filmsSaveFilter")
    ? JSON.parse(localStorage.getItem("filmsSaveFilter"))
    : JSON.parse(localStorage.getItem("saveMovies"))

    setFilmsSaveFilter((localFilterSave !== null || localFilterSave >= 1) && (localStorage.getItem("filmsSaveFilter")
    ? JSON.parse(localStorage.getItem("filmsSaveFilter")).filter((item) => item.duration <= 40)
    : JSON.parse(localStorage.getItem("saveMovies")).filter((item) => item.duration <= 40)
    ));
  }

  function handleGetSaveMovies() {
    mainApi
      .getSaveMovies()
      .then((data) => {
        // setSavedMovies(data);
        saveMoviesLocal(data)
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function saveMoviesLocal(data) {
    let serialObj = JSON.stringify(data); //сериализуем obj
    localStorage.setItem("saveMovies", serialObj); //запишем его в хранилище по ключу
    let returnObj = JSON.parse(localStorage.getItem("saveMovies")); //спарсим его обратно объект
    setSavedMovies(returnObj);
  }

  useEffect(() => {
    if (localStorage.getItem("keyValueSaveMovies")) {
      handleFilterFilm(localStorage.getItem("keyValueSaveMovies"));
    }
    console.log('JSON.parse(localStorage.getItem("filmsFilter"))   useEffect', JSON.parse(localStorage.getItem("filmsFilter")))
  }, [movies]);

  function handleGetMovies(keyValue) {
    setIsPreloaderOpen(true);
    updateFilterMessage();
    setButtonMoviesMore(false);

    if (keyValue.length === 0) {
      setTextOpen("true");
      setFilterMessage("«Нужно ввести ключевое слово»");
      setIsPreloaderOpen(false);
    } else {
      moviesApi
        .getMovies()
        .then((data) => {
          if (data) {
            localStorage.setItem("keyValueSaveMovies", keyValue); //запишем его в хранилище по ключу
            let serialObj = JSON.stringify(data); //сериализуем obj]
            localStorage.setItem("movies", serialObj); //запишем его в хранилище по ключу
            let returnObj = JSON.parse(localStorage.getItem("movies")); //спарсим его обратно объект
            setMovies(returnObj !== null ? returnObj : []);
          }
         
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

  function handleFilterFilm(keyValue) {
    
    setFilterMessageSaved();
if (movies) {
  const filmsFilter = movies.filter((item) => {
    return item.nameRU.toLowerCase().includes(keyValue.toLowerCase());
  });
  console.log("filmsFilter:", filmsFilter);
  console.log("keyValue", keyValue);

  if (filmsFilter.length === 0) {
    setTextOpen("true");
    setFilterMessage("«Ничего не найдено»");
  } else {
    let serialObj = JSON.stringify(filmsFilter); //сериализуем obj
    localStorage.setItem("filmsFilter", serialObj); //запишем его в хранилище по ключу
  }

  if (filmsFilter.length > 3) {
    setButtonMoviesMore(true);
  }

  setIsPreloaderOpen(false);

}
let returnObj = JSON.parse(localStorage.getItem("filmsFilter")); //спарсим его обратно объект
    
    if (checkboxStatusMovies) {
      filterMoviesCheckboxClick();
      setFilterMovies(filterMoviesCheckbox);

      let serialObj = JSON.stringify(filterMoviesCheckbox); //сериализуем obj
      localStorage.setItem("filterMoviesCheckbox", serialObj); //запишем его в хранилище по ключу
    } else {
      setFilterMovies(returnObj);
      filterMoviesCheckboxClick();
    }
  }

  function changeCheckbox({ target: { checked } }) {
    localStorage.setItem("checkboxStatusMovies", checked); //запишем его в хранилище по ключу

    setCheckboxStatusMovies(checked);

    console.log(checkboxStatusMovies);

    if (checked) {
      setFilterMovies(filterMoviesCheckbox);
      let serialObj = JSON.stringify(filterMoviesCheckbox); //сериализуем obj
      localStorage.setItem("filterMoviesCheckbox", serialObj); //запишем его в хранилище по ключу
    } else {
      setFilterMovies(JSON.parse(localStorage.getItem("filmsFilter")));
    }
  }

  function filterMoviesCheckboxClick() {
    const localFilterMovies = JSON.parse(localStorage.getItem("filmsFilter"));

    setFilterMoviesCheckbox(
      (localFilterMovies !== null || localFilterMovies >= 1) &&
        JSON.parse(localStorage.getItem("filmsFilter")).filter((item) => {
          return item.duration <= 40;
        })
    );
  }

 

  function handleUpdateUser(data) {
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

  function handleMoviesSaveDelete(film) {
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

  const handleLogin = ({ email, password }) => {
    updateRegisterMessage();

    return moviesAuth
      .authorize(email, password)
      .then((data) => {
        if (data.token) {
          localStorage.setItem("token", data.token);
          tokenCheck();
          history.push("/movies");
        }
        setLoginMessage("");
      })
      .catch((err) => {
        setLoginMessage(err.message);
        setIsLoginMessage(true);
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
            localStorage.setItem("loggedIn", true);
            console.log(loggedIn);

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
    setFilterMovies([]);
    setCheckboxStatusMovies(false);
    localStorage.removeItem("movies");
    history.push("/");
    localStorage.clear();
  };

  useEffect(() => {
    if (loggedIn) {
      handleGetSaveMovies();
    }
  }, [loggedIn]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Switch>
          <Route exact path="/" loggedIn={loggedIn}>
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
          <ProtectedRoute path="/movies" loggedIn={loggedIn}>
            <HeaderAuth name="auth" onHeaderAuth={hendleHeaderAuthClick} />
            <Movies
              message={filterMessage}
              textOpen={textOpen}
              onGetMovies={handleGetMovies}
              filterMovies={filterMovies}
              isOpen={isPreloaderOpen}
              buttonMoviesMore={buttonMoviesMore}
              onMoviesClickSave={handleMoviesSaveDelete}
              savedMovies={savedMovies}
              changeCheckbox={changeCheckbox}
              setMovies={setMovies}
              setCheckboxStatusMovies={setCheckboxStatusMovies}
              checkboxStatusMovies={checkboxStatusMovies}
            />
            <Footer />
          </ProtectedRoute>
          <ProtectedRoute path="/saved-movies" loggedIn={loggedIn}>
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
              checkboxStatusSavedMovies={checkboxStatusSavedMovies}
            />
            <Footer name="saved" />
          </ProtectedRoute>
          <ProtectedRoute path="/profile" loggedIn={loggedIn}>
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
          </ProtectedRoute>
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
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
