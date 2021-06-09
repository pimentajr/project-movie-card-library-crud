import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;

    return (
      <div data-testid="movie-card">
        <p>{movie.title}</p>
        <p>{movie.storyline}</p>
        <span>
          <Link to={ `/movies/${movie.id}` }>VER DETALHES</Link>
        </span>
      </div>
    );
  }
}

export default MovieCard;
