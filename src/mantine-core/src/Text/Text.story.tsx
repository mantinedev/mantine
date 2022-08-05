import React from 'react';
import { Text } from './Text';

export default { title: 'Text' };

export function WithNumberAsSize() {
  return <Text size={112}>112px text</Text>;
}

export function ColorIndex() {
  return <Text color="red.1">Red 1 text</Text>;
}
