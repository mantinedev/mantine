import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { useMove } from './use-move';

const Demo = () => {
  const [value, onChange] = useState({ x: 0, y: 0 });
  const { ref, active } = useMove(onChange);

  return (
    <div>
      <div style={{ color: active ? 'red' : 'blue', marginBottom: 10 }}>
        x: {Math.round(value.x * 100)}% – y: {Math.round(value.y * 100)}%
      </div>
      <div
        ref={ref}
        style={{ position: 'relative', height: 200, width: 200, backgroundColor: 'gray' }}
      >
        <div
          style={{
            position: 'absolute',
            left: `calc(${value.x * 100}% - 8px)`,
            top: `calc(${value.y * 100}% - 8px)`,
            width: 16,
            height: 16,
            backgroundColor: 'blue',
          }}
        />
      </div>
    </div>
  );
};

const HorizontalDemo = () => {
  const [value, setValue] = useState(0.2);
  const { ref, active } = useMove(({ x }) => setValue(x));

  return (
    <>
      <div style={{ color: active ? 'red' : 'blue', marginBottom: 10 }}>
        x: {Math.round(value * 100)}%
      </div>
      <div
        ref={ref}
        style={{
          width: 400,
          height: 16,
          backgroundColor: 'gray',
          position: 'relative',
        }}
      >
        {/* Filled bar */}
        <div
          style={{
            width: `${value * 100}%`,
            height: 16,
          }}
        />

        {/* Thumb */}
        <div
          style={{
            position: 'absolute',
            left: `calc(${value * 100}% - 8px)`,
            top: 0,
            width: 16,
            height: 16,
            backgroundColor: 'blue',
          }}
        />
      </div>
    </>
  );
};

storiesOf('Hooks/use-move', module).add('General usage', () => (
  <div style={{ padding: 40 }}>
    <Demo />
  </div>
));

storiesOf('Hooks/use-move', module).add('Horizontal usage', () => (
  <div style={{ padding: 40 }}>
    <HorizontalDemo />
  </div>
));
