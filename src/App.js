import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import { Control } from './components/Control/Control';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    serchKeyword: '',
  };

  userChange = (e) => {
    this.setState({
      serchKeyword: e.target.value,
    });
  }

  render() {
    const serchParams = (this.state.serchKeyword).toLowerCase();
    const filteredMovies = moviesFromServer.filter(movie => (
      movie.title.toLowerCase().includes(serchParams)
      || movie.description.toLowerCase().includes(serchParams)
    ));

    return (
      <div className="page">
        <div className="page-content">
          <Control userChange={this.userChange} />
          <MoviesList movies={filteredMovies} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
