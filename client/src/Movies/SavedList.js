import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const SavedList = (props) => (
  <div className='saved-list'>
    <h3>Saved Movies:</h3>
    {props.list.map((movie) => {
      return (
        <NavLink
          to={`/movies/${movie.id}`}
          key={movie.id}
          activeClassName='saved-active'
        >
          <span className='saved-movie'>{movie.title}</span>
        </NavLink>
      );
    })}
    <Link to='/' className='home-button'>
      Home
    </Link>
  </div>
);

export default SavedList;
