import React from 'react';
import { AspectRatio } from './AspectRatio';

export default {
  title: 'AspectRatio',
};

export function Usage() {
  return (
    <AspectRatio ratio={16 / 9}>
      <div style={{ backgroundColor: 'silver' }}>AspectRatio</div>
    </AspectRatio>
  );
}
