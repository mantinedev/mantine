import React from 'react';
import { useTextSelection } from './use-text-selection';

export default { title: 'use-text-selection' };

export function Usage() {
  const selection = useTextSelection();
  return (
    <div style={{ padding: 40 }}>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse id architecto, nostrum
        laboriosam quisquam dolores beatae! Ipsum a eos cum voluptates, explicabo reprehenderit
        nihil iste! Nam voluptate non vel dicta.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse id architecto, nostrum
        laboriosam quisquam dolores beatae! Ipsum a eos cum voluptates, explicabo reprehenderit
        nihil iste! Nam voluptate non vel dicta.
      </p>
      <div>{selection?.toString()}</div>
    </div>
  );
}
