import React from 'react';

export const Tile = ({ name, description }) => {
  const { phone, email } = description;
  return (
    <div className='tile-container'>
      <p className='tile-title'>{name}</p>
      <p className='tile'>{phone}</p>
      <p className='tile'>{email}</p>
    </div>
  );
};
