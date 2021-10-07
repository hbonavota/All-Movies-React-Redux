import React from "react";
import { connect } from 'react-redux';
import { getMovieDetail, } from '../../actions/index';
import notImg from '../../notImg.jpg'
import './Movie.css';

export class Movie extends React.Component {

  componentDidMount(){
    const movieId = this.props.match.params.id;
    this.props.getMovie(movieId);
  }

    render() {
        return (
          <div className="container">
            <button onClick = {()=> window.history.back()} >Volver Atrás</button>
            <div className="movie-card">      
                <h1>{this.props.movies.Title}</h1>
                <img src={this.props.movies.Poster === "N/A"? notImg : this.props.movies.Poster } alt={"sorry, not found"}></img>  
                <h4>{this.props.movies.Year}</h4>
                <h2>{this.props.movies.Writer}</h2>
                <h3>{this.props.movies.Actors}</h3>
                <p>{this.props.movies.Plot}</p>
            </div>
          </div>
        );
    }
}

function mapStateToProps(state) {
  return {
    movies: state.movieDetail
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getMovie: id => dispatch(getMovieDetail(id))
  };
}

export default connect(
mapStateToProps,
mapDispatchToProps
)
(Movie);