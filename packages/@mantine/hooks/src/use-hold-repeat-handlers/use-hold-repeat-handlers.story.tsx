import { useState } from 'react';
import { useHoldRepeatHandlers } from './use-hold-repeat-handlers';

export default { title: 'useHoldRepeatHandlers' };

const buttonStyles = {
  padding: '16px 24px',
  fontSize: 20,
  cursor: 'pointer',
  background: '#228be6',
  color: 'white',
  border: 'none',
  borderRadius: 8,
} as const;

export function Usage() {
  const [count, setCount] = useState(0);
  const increment = useHoldRepeatHandlers(() => setCount((current) => current + 1), {
    delay: 500,
    interval: (step) => Math.max(50, 300 - step * 20),
  });
  const decrement = useHoldRepeatHandlers(() => setCount((current) => current - 1), {
    delay: 500,
    interval: (step) => Math.max(50, 300 - step * 20),
  });

  return (
    <div style={{ padding: 40, display: 'flex', alignItems: 'center', gap: 16 }}>
      <button type="button" {...decrement} style={buttonStyles}>
        −
      </button>
      <strong style={{ fontSize: 24, minWidth: 60, textAlign: 'center' }}>{count}</strong>
      <button type="button" {...increment} style={buttonStyles}>
        +
      </button>
    </div>
  );
}

export function Keyboard() {
  const [count, setCount] = useState(0);
  const handlers = useHoldRepeatHandlers(() => setCount((current) => current + 1), {
    delay: 500,
    interval: 100,
    events: ['keyboard'],
    keys: ['Enter', ' '],
  });

  return (
    <div style={{ padding: 40 }}>
      <button type="button" {...handlers} style={buttonStyles}>
        Focus me and hold Enter/Space
      </button>
      <p>
        Count: <strong>{count}</strong>
      </p>
    </div>
  );
}

export function TouchAndMouse() {
  const [count, setCount] = useState(0);
  const handlers = useHoldRepeatHandlers(() => setCount((current) => current + 1), {
    delay: 500,
    interval: 100,
    events: ['mouse', 'touch'],
  });

  return (
    <div style={{ padding: 40 }}>
      <button type="button" {...handlers} style={buttonStyles}>
        Hold (mouse + touch)
      </button>
      <p>
        Count: <strong>{count}</strong>
      </p>
    </div>
  );
}
