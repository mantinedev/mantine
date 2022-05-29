import React from 'react';
import { ThemeIcon } from './ThemeIcon';

export default { title: 'ThemeIcon' };

export function WithHexColor() {
  return <ThemeIcon color="#000">$</ThemeIcon>;
}
