import swal from 'sweetalert';

const initialState = {
    moviesFavourites: [],
    moviesLoaded: [],
    movieDetail: {}
  };
  
  function rootReducer(state = initialState, action) {
    if (action.type === "ADD_MOVIE_FAVORITE") {
      const myStorage = window.localStorage;
      myStorage.setItem('user',JSON.stringify(state.moviesFavourites));
        swal({
          title: "¡Bien Hecho!", 
          text:"Tu pelicula se ha agregado con éxito",
          icon: "success",
          button: "OK!",
          timer: 1200
        })
        return {
          ...state,
          moviesFavourites: state.moviesFavourites.concat(action.payload)
        }
        
    }

    if(action.type=== "REMOVE_MOVIE_FAVORITE"){
      swal({
        title: "OK", 
        text:"Tu pelicula se ha eliminado con éxito",
        icon: "info",
        button: "OK!",
        timer: 1200
      })
      if (state.moviesFavourites === null || state.moviesFavourites === undefined) {
        localStorage.clear();
      }
      localStorage.setItem('user',JSON.stringify(state.moviesFavourites));
        return{
            ...state,
            moviesFavourites: state.moviesFavourites.filter( item=> item.id!== action.payload.id)
        }
    }
    if (action.type === "GET_MOVIES") {
        return {
          ...state,
          moviesLoaded: action.payload.Search
        };
    }

    if(action.type === "GET_MOVIE_DETAIL"){
        return{
            ...state,
            movieDetail: action.payload

        }
    }

    return state;

  }
  
  export default rootReducer;