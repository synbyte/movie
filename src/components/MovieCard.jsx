import React from 'react';

const MovieCard = ({movie}) => {
  return (
    <a href={`https://multiembed.mov/?video_id=${movie.id}&tmdb=1`}>
    <div className="card">
      <img width={100} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
      <div className="card-body">
      <h1 className='card-title'>{movie.title}</h1>
      <p className='card-text'>{movie.overview}</p>
      </div>
    </div>
    </a>
  )
}
export default MovieCard;