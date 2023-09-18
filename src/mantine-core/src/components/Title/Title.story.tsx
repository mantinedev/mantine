import React from 'react';
import { Title } from './Title';

export default { title: 'Title' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <Title order={1}>Heading 1</Title>
      <Title order={2}>Heading 2</Title>
      <Title order={3}>Heading 3</Title>
      <Title order={4}>Heading 4</Title>
      <Title order={5}>Heading 5</Title>
      <Title order={6}>Heading 6</Title>
    </div>
  );
}
