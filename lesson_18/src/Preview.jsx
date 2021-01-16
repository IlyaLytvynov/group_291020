import React from 'react';
import './Preview.scss';
export const Preview = (props) => {
  return (
    <div className='preview'>
      <h2>{props.movie.title}</h2>
      <img src={props.movie.preview} alt='' />
    </div>
  );
};
