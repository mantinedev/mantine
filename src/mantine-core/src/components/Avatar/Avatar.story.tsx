import React from 'react';
import { Avatar } from './Avatar';

export default { title: 'Avatar' };

export function CustomComponent() {
  return (
    <div style={{ padding: 40 }}>
      <Avatar component="a" href="https://mantine.dev">
        AN
      </Avatar>
      <Avatar component="button" type="button">
        BU
      </Avatar>
    </div>
  );
}
