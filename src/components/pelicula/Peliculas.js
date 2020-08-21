import React, { Component } from 'react';
import { getAllMovies } from '../../services/CatalogueService'
import Pelicula from './Pelicula';

class Peliculas extends Component {

    state = {
        movies: []
    }


    componentDidMount() {
      getAllMovies().then(json => this.setState({movies: json}));
    }

    render() {
      return (
        <div>
          {this.state.movies.map((movie) => (
              <Pelicula movie={movie} />           
          ))}
        </div>
      );
    }
  }

export default Peliculas;