

export function addMovieFavorite(payload) {
  return { type: 
    "ADD_MOVIE_FAVORITE", 
    payload
 };
}
export function removeMovieFavorite(payload){
    return{
        type: "REMOVE_MOVIE_FAVORITE",
        payload
    };
}
export function getMovies(titulo) {
  console.log(process.env)
  return function(dispatch) {
    return fetch(`https://${process.env.REACT_APP_APY_URL}/?apikey=${process.env.REACT_APP_APY_KEY}&s=${titulo}`)
      .then(response => response.json())
      .then(json => {
        dispatch({ 
            type: "GET_MOVIES", 
            payload: json });
      });
  };
}

export function getMovieDetail(id){
    return function(dispatch){
        fetch(`https://${process.env.REACT_APP_APY_URL}/?apikey=${process.env.REACT_APP_APY_KEY}&i=${id}`)
        .then(response => response.json())
      .then(json => {
        dispatch({ 
            type: "GET_MOVIE_DETAIL", 
            payload: json 
        });
      });
    }

}
