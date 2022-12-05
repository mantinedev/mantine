import React, { useEffect, useState } from 'react';
import { storiesOf } from '@storybook/react';
import { useColorScheme } from './use-color-scheme';

const Demo = () => {
  const colorScheme = useColorScheme(undefined, {
    getInitialValueInEffect: false,
  });
  const [history, setHistory] = useState([]);

  useEffect(() => {
    setHistory((current) => [...current, colorScheme]);
  }, [colorScheme, setHistory]);

  return (
    <div>
      {history.map((mode, i) => (
        <div key={i}>Color Scheme: {mode}</div>
      ))}
    </div>
  );
};

storiesOf('Hooks/use-color-scheme', module).add('General usage', () => (
  <div style={{ padding: 40 }}>
    <Demo />
  </div>
));
