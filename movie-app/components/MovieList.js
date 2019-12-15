import React, { Component } from 'react'
import Movie from './Movie';

export default class MovieList extends Component {
  render() {
    const { movies } =  this.props;

    return (
      // React Fragment used to create invisible html tags - https://reactjs.org/docs/fragments.html & https://reactjs.org/docs/fragments.html#short-syntax
      // Used in place of an empty div which can cause issues (with bootstrap styling in this instance).
      <React.Fragment>
        {movies.map(movie =>
          (
            <Movie movie={movie} key={movie.id} />
          )
        )}
      </React.Fragment>
    )
  }
}
