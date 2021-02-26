import React from 'react';

const MovieCard = ({ movie }) => {
  const { title, director, metascore, stars } = movie;
  return (
    <Link to={`movies/${movie.id}`}>
      <div to='/movies.:id' className='movie-card'>
        <h2>{title}</h2>
        <div className='movie-director'>
          Director: <em>{director}</em>
        </div>
        <div className='movie-metascore'>
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>

        {stars.map((star) => (
          <div key={star} className='movie-star'>
            {star}
          </div>
        ))}
      </div>
    </Link>
  );
};

export default MovieCard;
