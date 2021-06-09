import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { MovieList, NewMovie, MovieDetails, EditMovie, NotFound } from './pages';

function App() {
  return (
    <BrowserRouter>
      <main>
        <div>Movie Card Library CRUD</div>
        <Switch>
          <Route exact path="/" component={ MovieList } />
          <Route exact path="/movies/new" component={ NewMovie } />
          <Route
            path="/movies/:id/edit"
            render={ () => <EditMovie /> }
          />
          <Route
            path="/movies/:id"
            render={ () => <MovieDetails /> }
          />
          <Route path="*" component={ NotFound } />
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
