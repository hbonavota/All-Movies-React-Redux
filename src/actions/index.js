//Para obtener alguna película a partir de su ID pueden usar el endpoint: http://www.omdbapi.com/?apikey=20dac387&i={idMovie}

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
    return fetch(`http://${process.env.REACT_APP_APY_URL}/?apikey=${process.env.REACT_APP_APY_KEY}&s=${titulo}`)
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
        fetch(`http://${process.env.REACT_APP_UNSPLASH_URL}/?apikey=${process.env.REACT_APP_UNSPLASH_KEY}&i=${id}`)
        .then(response => response.json())
      .then(json => {
        dispatch({ 
            type: "GET_MOVIE_DETAIL", 
            payload: json 
        });
      });
    }

}