import sweetAlerts from '../actions/sweetAlerts';

const initialState = {
  moviesFavorites: [],
  moviesLoaded: [],
  movieDetail: {}
};

function rootReducer(state = initialState, action) {
  console.log("action es ",action.type)

  if (action.type === "ADD_MOVIE_FAVORITE") {
    let itemLS = JSON.parse(window.localStorage.getItem('user'))
    if (!itemLS) {
      sweetAlerts("¡Good Job!", "Movie added to favorites", "success")
      window.localStorage.setItem('user', JSON.stringify(state.moviesFavorites.concat(action.payload)));
      let infoLocalS = state.moviesFavorites.concat(JSON.parse(window.localStorage.getItem("user")))
      return {
        ...state,
        shoppingTrolley: infoLocalS,
      };
    }
    if (itemLS) {
      let movieFV = action.payload;
      let isrepeat = itemLS?.map(e => e.id).includes(movieFV.id);
      if (isrepeat) {
        sweetAlerts("Sorry", "This movie has already been added", "error");
        return {
          ...state,
        };
      } else {
        sweetAlerts("¡Good Job!", "Movie added to favorites", "success")
        let movieadded = state.moviesFavorites.concat(action.payload);
        window.localStorage.setItem("user", JSON.stringify(JSON.parse(window.localStorage.getItem("user")).concat(action.payload)));
        return {
          ...state,
          moviesFavorites: movieadded,
        };
      }
    }
  }

  if (action.type === "REMOVE_MOVIE_FAVORITE") {
    sweetAlerts("OK", "Your movie has been successfully removed", "info");
    if (state.moviesFavorites.length === 0) {
      localStorage.clear();
    }
    localStorage.setItem('user', JSON.stringify(state.moviesFavorites.filter(item => item.id !== action.payload.id)));

    return {
      ...state,
      moviesFavorites: state.moviesFavorites.filter(item => item.id !== action.payload.id)
    }
  }

  if (action.type === "GET_MOVIES") {
    return {
      ...state,
      moviesLoaded: action.payload.Search
    };
  }

  if (action.type === "GET_MOVIE_DETAIL") {
    console.log("action.payload", action.payload)
    return {
      ...state,
      movieDetail: action.payload

    }
  }
  if (action.type === "CONECT_LS") {
    console.log("conectLS y moviesFavorites",state.moviesFavorites)
    if (!window.localStorage.getItem("user")) {
      return {
        ...state,
        moviesFavorites: state.moviesFavorites,
      };
    } else {
      return {
        ...state,
        moviesFavorites: JSON.parse(window.localStorage.getItem("user")),
      };
    }

  }

  return state;

}

export default rootReducer;