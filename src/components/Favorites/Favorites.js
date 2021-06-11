import React, { Component } from "react";
 import { connect } from "react-redux";
import { removeMovieFavorite, addMovieFavorite } from "../../actions/index";
 import { NavLink } from 'react-router-dom';
import './Favorites.css';

export class ConnectedList extends Component {

  componentDidMount(){
    let storage = JSON.parse(window.localStorage.getItem('user'))
    if(this.props.movies !== storage){
      this.props.addStorage(storage);
    }
  }
  render() {
    return (
      <div className="favCtn">
        <h1 className="textFav">Películas Favoritas</h1>
        <div className="ctn" >
            {this.props.movies && this.props.movies.map(el =>(
              <div>
                <div className='favList'>
                <button className="btnFav" onClick={() => this.props.removeMovie({title: el.Title, id: el.id})} >X </button>
                  <NavLink className="navText"to={`/movie/${el.id}`}>{el.Title}</NavLink>
                  <img className="post" src={el.Poster} alt="No hay imagen :/"></img>
                </div>
                <div className="containsPrev">
                </div>
              </div>
            ))
            }
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    movies: state.moviesFavourites
  };
}

function mapDispatchToProps(dispatch){
  return{
    removeMovie: movie => dispatch(removeMovieFavorite(movie)),
    addStorage : storage => dispatch(addMovieFavorite(storage))
  };  
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedList);