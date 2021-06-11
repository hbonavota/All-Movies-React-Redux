import React, { Component } from "react";
import { connect} from 'react-redux';
import {addMovieFavorite} from '../../actions/index.js'
import {NavLink} from 'react-router-dom';
import './MovieList.css';
import corazonon from './corazonon.png'

export class MovieList extends Component{

  render(){
    return (
      <div className="CtnMayor">
        <div className="ctn">
              {this.props.movies && this.props.movies.map(el =>(
            <div key={el.imdbID} className="movieCtn">
                  <div >
                      <div className="btnFav"><img onClick={
                          ()=> this.props.addMovieFavorite(
                            {Title: el.Title, 
                              id: el.imdbID,
                              Poster: el.Poster
                            })
                          }className= "corazon1" src={corazonon} alt="Fav"></img>
                          </div>
                    <NavLink className="texNav" to={`/movie/${el.imdbID}`}>{el.Title}</NavLink>
                  </div>
                  <div className="containsPrev">
                    <img className="post" src={el.Poster} alt="No hay imagen :/"></img>
                  </div>
            </div>
              ))}
        </div>
      </div>
    )
  }
}
function mapStateToProps(state) {
    return {
      movies: state.moviesLoaded
    };
  }
  function mapDispatchToProps(dispatch) {
    return {
      addMovieFavorite: movies => dispatch(addMovieFavorite(movies))
    };
  }
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(MovieList);
