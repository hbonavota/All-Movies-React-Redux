import React, { Component } from "react";
import Logo from '../../logoFilm.png'
import { connect } from "react-redux";
import { addMovieFavorite, getMovies, getMovieDetail } from '../../actions/index.js';
import MovieList from "../MovieList/MovieList.js";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form'
import './Navbar.css';



export class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Title: ""
        };
    }
    componentDidMount() {
        const movieId = this.props.match.params.id;
        this.props.getMovie(movieId);
      }

    handleChange(event) {
        this.setState({ Title: event.target.value });
        this.props.getMovies(this.state.Title);
    }
    handleSubmit(event) {
        event.preventDefault();
        this.props.getMovies(this.state.Title);
    }

    render() {
        const { title } = this.state;
        return (
            <div className="containerBusc">
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <div>
                    </div>
                    <Container>
                        <img id="logo" src={Logo} width="25" height="25" alt="logo" />
                        <Navbar.Brand href="/">Movie Search Engine</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">

                            <Form className="d-flex" onSubmit={(e) => this.handleSubmit(e)}>
                                <FormControl
                                    type="search"
                                    size="sm"
                                    placeholder="Search a movie..."
                                    className="inputForm"
                                    aria-label="Search"
                                    value={title}
                                    onChange={(e) => this.handleChange(e)}
                                />
                            </Form>
                            </Nav>
                            <Nav>
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/favs">Favorites</Nav.Link>
                                <Nav.Link href="/about">About</Nav.Link>
                                <Nav.Link href="/contact">Contact</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <MovieList />
            </div >
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
        getMovies: Title => dispatch(getMovies(Title)),
        getMovie: id => dispatch(getMovieDetail(id))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NavBar);
