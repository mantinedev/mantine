import React from 'react';
import { Text } from './Text';

export default { title: 'Text' };

export function WithNumberAsSize() {
  return <Text size={112}>112px text</Text>;
}

export function ColorIndex() {
  return <Text color="violet.9">Red 1 text</Text>;
}
export function TruncateStart() {
  return (
    <div style={{ maxWidth: 100 }}>
      <Text truncate="start">Very very very long text</Text>
    </div>
  );
}
export function TruncateEnd() {
  return (
    <div style={{ maxWidth: 100 }}>
      <Text truncate="end">Very very very long text</Text>
    </div>
  );
}
