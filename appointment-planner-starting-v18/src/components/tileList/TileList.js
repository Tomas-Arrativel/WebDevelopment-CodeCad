import React from 'react';

import { Tile } from '../tile/Tile';

export const TileList = (props) => {
  const { contacts } = props;
  return (
    <div>
      {contacts.map((contact, i) => {
        const { name, ...rest } = contact;
        return <Tile name={name} description={rest} key={i} />;
      })}
    </div>
  );
};
