import React from 'react';
import { storiesOf } from '@storybook/react';
import { useOs } from './use-os';

const Demo = () => {
  const os = useOs();

  return (
    <>
      Your os is <b>{os}</b>
    </>
  );
};

storiesOf('Hooks/use-os', module).add('Usage', () => (
  <div style={{ padding: 40 }}>
    <Demo />
  </div>
));
