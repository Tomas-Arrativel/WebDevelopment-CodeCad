import React from 'react';

import { Tile } from '../tile/Tile';

export const TileList = ({ contacts }) => {
  const { name, ...rest } = contacts;

  return (
    <div>
      {contacts.map((contact) => (
        <Tile name={name} description={rest} />
      ))}
    </div>
  );
};
