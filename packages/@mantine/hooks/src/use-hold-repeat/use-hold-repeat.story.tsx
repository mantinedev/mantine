import { useState } from 'react';
import { useHoldRepeat } from './use-hold-repeat';

export default { title: 'useHoldRepeat' };

export function Usage() {
  const [count, setCount] = useState(0);
  const { start, stop } = useHoldRepeat(() => setCount((current) => current + 1), {
    delay: 500,
    interval: (step) => Math.max(50, 300 - step * 20),
  });

  return (
    <div style={{ padding: 40 }}>
      <button
        type="button"
        onPointerDown={start}
        onPointerUp={stop}
        onPointerLeave={stop}
        style={{
          padding: '16px 32px',
          fontSize: 16,
          cursor: 'pointer',
          background: '#228be6',
          color: 'white',
          border: 'none',
          borderRadius: 8,
        }}
      >
        Hold to increment
      </button>
      <p>
        Count: <strong>{count}</strong>
      </p>
    </div>
  );
}

export function SingleFire() {
  const [count, setCount] = useState(0);
  const { start, stop } = useHoldRepeat(() => setCount((current) => current + 1));

  return (
    <div style={{ padding: 40 }}>
      <button
        type="button"
        onPointerDown={start}
        onPointerUp={stop}
        onPointerLeave={stop}
        style={{ padding: '16px 32px', fontSize: 16, cursor: 'pointer' }}
      >
        No delay/interval – fires once per press
      </button>
      <p>
        Count: <strong>{count}</strong>
      </p>
    </div>
  );
}
