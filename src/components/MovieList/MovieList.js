import React, { Component } from "react";
import { connect } from 'react-redux';
import { addMovieFavorite } from '../../actions/index.js'
import { NavLink } from 'react-router-dom';
import './MovieList.css';
import corazonon from './corazonon.png'
import notImg from '../../notImg.jpg'

export class MovieList extends Component {

  render() {
    return (
      <div className="CtnMayor">
        {this.props.movies?.map(el => (
          <div className="movieCtn">
            <div className="btnFav">
              <img onClick={
              () => {this.props.addMovieFavorite(
                {
                  Title: el.Title,
                  id: el.imdbID,
                  Poster: el.Poster
                })}
            } className="corazon1" src={corazonon} alt="Fav"></img>
            </div>

            <div className="texNav">
              <NavLink className="texNav" to={`/movie/${el.imdbID}`}>{el.Title}</NavLink>
            </div>
            <div key={el.imdbID} className="ctn">
              <NavLink className="containsPrev" to={`/movie/${el.imdbID}`}>
                <img className="post" src={el.Poster === "N/A" ? notImg : el.Poster} alt="sorry, not found"></img>
              </NavLink>
            </div>
          </div>
        ))}
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
