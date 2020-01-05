import React from 'react'

const MovieCard = (props) => {
  const {movie} = props;
  const shorten = (text)=>{
    if (text && text.length > 100){
      return text.substr(0, 100) + '...'
    }
    return text
  }
  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="card h-100">
        <a href="#"><img className="card-img-top" src={movie.image} alt="" /></a>
        <div className="card-body">
          <h4 className="card-title">
            <a href="#">{movie.name}</a>
          </h4>
          <p className="card-text">{shorten(movie.description)}</p>
        </div>
        <div className="card-footer">
          <small className="text-muted">{movie.rating}</small>
        </div>
      </div>
    </div>
  )
}

export default MovieCard
