import React from "react";
import Favorites from "./components/Favorites/Favorites";
/* import Buscador from "./components/Buscador/Buscador"; */
import NavBar from "./components/NavBar/NavBar";
import { Route } from "react-router-dom";
import Movie from "./components/Movie/Movie";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    
      <React.Fragment>
          {/* <NavBar /> */}
          <Route path="/" component={NavBar} />
          <Route exact path="/favs" component={Favorites} />
          <Route exact path="/movie/:id" component={Movie} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/about" component={About} />
      </React.Fragment>
    
  );
}

export default App;
