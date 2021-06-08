import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: {},
      loading: true,
    };
    this.request = this.request.bind(this);
  }

  // this.props.match.param

  componentDidMount() {
    this.request();
  }

  async request() {
    const { match } = this.props;
    const { id } = match.params;
    const response = await movieAPI.getMovie(id);
    this.setState({
      movie: response,
      loading: false,
    });
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { loading, movie } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;

    return loading ? <Loading /> : (
      <div>
        <div data-testid="movie-details">
          <h1>{ title }</h1>
          <img alt="Movie Cover" src={ `../${imagePath}` } />
          <p>{ `Subtitle: ${subtitle}` }</p>
          <p>{ `Storyline: ${storyline}` }</p>
          <p>{ `Genre: ${genre}` }</p>
          <p>{ `Rating: ${rating}` }</p>
        </div>
        <Link to={ `/movies/${movie.id}/edit` } params={ movie.id }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
      </div>
    );
  }
}

export default MovieDetails;
