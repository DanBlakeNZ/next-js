import React, { Component } from 'react'
import MovieCard from './MovieCard';

export default class MovieList extends Component {
  render() {
    const { movies } =  this.props;

    return (
      // React Fragment used to create invisible html tags - https://reactjs.org/docs/fragments.html & https://reactjs.org/docs/fragments.html#short-syntax
      // Used in place of an empty <div> which can cause issues (with bootstrap styling in this instance).
      <React.Fragment>
        { movies.map(movie => <MovieCard movie={movie} key={movie.id} />) }
      </React.Fragment>
    )
  }
}
