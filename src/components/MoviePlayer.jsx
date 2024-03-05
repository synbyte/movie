import React from 'react';

const MoviePlayer = ({movie}) => {
  return (
    <div className="card">
      <iframe src={`https://www.2embed.cc/embed/${movie.id}`} width="100%" height="100%" frameborder="0" scrolling="no" allowfullscreen></iframe>
    </div>
  )
}
export default MoviePlayer;