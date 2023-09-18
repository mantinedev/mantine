import React from 'react';
import { AspectRatio } from './AspectRatio';

export default { title: 'AspectRatio' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <AspectRatio ratio={16 / 9}>
        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80"
          alt="img"
        />
      </AspectRatio>
    </div>
  );
}

export function Unstyled() {
  return (
    <div style={{ padding: 40 }}>
      <AspectRatio ratio={1} unstyled>
        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80"
          alt="img"
        />
      </AspectRatio>
    </div>
  );
}
