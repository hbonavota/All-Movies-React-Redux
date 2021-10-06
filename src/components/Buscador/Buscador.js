import React, { Component } from "react";
import { connect } from "react-redux";
import {addMovieFavorite,getMovies} from '../../actions/index.js';
import MovieList from "../MovieList/MovieList.js";
import './Buscador.css';

export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Title: ""
    };
  }
  handleChange(event) {
    this.setState({ Title: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovies(this.state.Title);
  }

  render() {
    const { title } = this.state;
    return (
      <div className="containerBusc">
          <h1 className="textBusc"></h1>
        <div className="buscadorCtn">
          <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
            <div className="buscador">
              <label className="label"  htmlFor="title">MOVIE: </label>
              <input
                className="input"
                type="text"
                id="title"
                autoComplete="off"
                value={title}
                onChange={(e) => this.handleChange(e)}
              />
            <button type="submit">SEARCH</button>
            </div>
          </form>
        </div>
        <MovieList/>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    movies: state.moviesLoaded
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addMovieFavorite: movies => dispatch(addMovieFavorite(movies)),
    getMovies: Title => dispatch(getMovies(Title))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Buscador);
