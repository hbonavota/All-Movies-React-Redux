import React from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import Col from 'react-bootstrap/Col'
import Hernan from './Hernan.jpeg'
import logoGit from './github.png'
import logoLinkedin from './linkedin2.png'
import './Contact.css';


export default class Contact extends React.Component {
    componentDidMount() {
        /*     const movieId = this.props.match.params.id;
            this.props.getMovieDetail(movieId); */
    }

    render() {
        return (
            <div>
                <div className="container">
                    {/* <Button className="buttonGoBack" variant="secondary" onClick={() => window.history.back()} > Go Back</Button> */}
                    <Card bg='dark' text='light' style={{ width: '18rem' }}>
                        <Image roundedCircle alt="profilePicture" src={Hernan} />
                        <Card.Body>
                            <Card.Title>Hi!, I'm Hernán Bonavota</Card.Title>
                            <Card.Text>
                                ⚡My stack, although not exhaustively given that I am constantly learning, is Html, Css, JS, React, Redux, Node.js, Express, Sql, Sequelize, MongoDB, Postgresql.<br></br>
                                <br></br>
                                💬 If you are looking for a profile like mine, without a doubt get in touch that I am in an active search!, I will always appreciate your interest. <br></br>
                                <br></br>
                                📫 Contact: hbonavota@gmail.com
                            </Card.Text>
                            <div className="links">

                                <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/bonavota/">
                                    <Col xs={1} md={1}>
                                        <Image src={logoLinkedin} roundedCircle alt="icon" />
                                    </Col>
                                </a>
                                <a rel="noopener noreferrer" target="_blank" href="https://github.com/hbonavota">
                                    <Col xs={1} md={1}>
                                        <Image className="image" src={logoGit} roundedCircle alt="icon" />
                                    </Col>
                                </a>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        );
    }

}
