import React from 'react';
import { Radio } from './Radio';

export default { title: 'Radio' };

export function Usage() {
  return (
    <div style={{ padding: 20 }}>
      <Radio label="React" value="react" name="hello" />
      <Radio label="Angular" value="nu" name="hello" mt="xs" />
      <Radio label="Svelte" value="sv" disabled name="hello" mt="xs" />
    </div>
  );
}
