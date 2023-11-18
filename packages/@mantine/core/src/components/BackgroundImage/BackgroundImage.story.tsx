import React from 'react';
import { BackgroundImage } from './BackgroundImage';

export default { title: 'BackgroundImage' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <BackgroundImage
        w={400}
        h={200}
        src="https://images.unsplash.com/photo-1679692363620-d774a6cd92e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
      >
        Content
      </BackgroundImage>
    </div>
  );
}

export function Unstyled() {
  return (
    <div style={{ padding: 40 }}>
      <BackgroundImage
        w={400}
        h={200}
        radius="md"
        src="https://images.unsplash.com/photo-1679692363620-d774a6cd92e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
        unstyled
      >
        Content
      </BackgroundImage>
    </div>
  );
}
