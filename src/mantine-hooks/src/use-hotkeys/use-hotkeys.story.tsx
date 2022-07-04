/* eslint-disable no-console */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { useHotkeys } from './use-hotkeys';

function Demo() {
  useHotkeys([['shift + b', () => console.log('Triggered')]]);
  return (
    <div>
      <input />
      <textarea />
      <select />
    </div>
  );
}

storiesOf('Hooks/use-hot-keys', module).add('Usage', () => <Demo />);
