import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';
import { MovieList, NewMovie, MovieDetails, EditMovie, NotFound } from './pages'

function App() {
  return (
    <BrowserRouter>
      <div>Movie Card Library CRUD</div>
      <Switch>
        <Route exact path="/"  component={ MovieList } />
        <Route path="/movies/new" component={ NewMovie } />
        <Route path="/movies/:id" component={ MovieDetails } />
        <Route path="/movies/:id/edit" component={ EditMovie } />
        <Route path="*" component={ NotFound } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
