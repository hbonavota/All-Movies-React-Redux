import React, { Component } from "react";
import { connect } from "react-redux";
import { removeMovieFavorite, /* addMovieFavorite */ } from "../../actions/index";
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import brokenheart from './brokenheart.png'
import conectLS from '../../actions/conectLS'
import notImg from '../../notImg.jpg'
import './Favorites.css';

export class Favorites extends Component {

  componentDidMount() {
    this.props.conect()
    if (!this.props.movies) {
      this.props.conect()
    }
  }

  render() {
    return (
      <div className="favCtn">
        <h1 className="textFav">Películas Favoritas</h1>
        <div className="ctn" >
          {/* <Button variant="secondary" onClick={() => window.history.back()} > Go Back</Button> */}
          {this.props.movies?.map(el => (
            <div>
              <div className='favList'>
                <div className="btnFav">
                  <img onClick={
                    () => {
                      this.props.removeMovie({ title: el.Title, id: el.id })
                    }
                  } className="corazon2" src={brokenheart} alt="Fav"></img>
                </div>
                <NavLink className="navText" to={`/movie/${el.id}`}>{el.Title}</NavLink>
              </div>
              <div key={el.imdbID} className="ctn">
                <NavLink className="containsPrev" to={`/movie/${el.id}`}>
                  <img className="post" src={el.Poster === "N/A" ? notImg : el.Poster} alt="sorry, not found"></img>
                </NavLink>
              </div>
            </div>
          ))
          }
          
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.moviesFavorites
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeMovie: movie => dispatch(removeMovieFavorite(movie)),
    conect: prop => dispatch(conectLS(prop))
  };
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Favorites);