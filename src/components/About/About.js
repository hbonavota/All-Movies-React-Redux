import React from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './About.css';


export default class About extends React.Component {

    componentDidMount() {
        /*     const movieId = this.props.match.params.id;
            this.props.getMovieDetail(movieId); */
    }

    render() {
        return (
            <div>
                <div className="containerAbout">
                    {/* <Button variant="secondary" onClick={() => window.history.back()} > Go Back</Button> */}
                    <Card bg='dark' text='light' className="text-center">
                        <Card.Title>Individual Project React-Redux</Card.Title>
                        <Card.Body >
                            <Card.Header>About This Project</Card.Header>
                            <Card.Text>
                                "Movie search engine" was the individual project that I had assigned, which consisted of building an App, programming in Javascript and using React, Redux technologies. For styles use pure CSS, since that was the requirement. Additionally then add some styles with react-bootstrap.
                                <br></br>
                                <br></br>
                                The main objective of the project was that we learn to solve the different problems without using external libraries, and doing it with "react classes", without using the HOOKS that are clearly more functional, but that the scope of the project sought to learn the life of the components in react with Classes like these
                            </Card.Text>
                            <a rel="noopener noreferrer" target="_blank" href="https://github.com/hbonavota/Movie-search-engine">
                                <Button variant="secondary">Go to repository on github</Button>
                            </a>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        );
    }
}
