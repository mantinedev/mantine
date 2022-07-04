import React from 'react';
import { useFocusWithin } from './use-focus-within';

export default { title: 'use-focus-within' };

export const Usage = () => {
  const { ref, focused } = useFocusWithin();
  return (
    <div ref={ref} style={{ background: focused ? 'red' : 'transparent' }}>
      <input />
      <button type="button">Button</button>
      <input />
      <a href="https://mantine.dev/">Link</a>
    </div>
  );
};
