import { useState } from 'react';
import { useLongPress } from './use-long-press';

export default { title: 'useLongPress' };

export function Usage() {
  const [state, setState] = useState('idle');
  const handlers = useLongPress(() => setState('long pressed!'), {
    threshold: 500,
    onStart: () => setState('pressing...'),
    onCancel: () => setState('cancelled'),
    onFinish: () => setState('finished'),
  });

  return (
    <div style={{ padding: 40 }}>
      <button
        {...handlers}
        style={{
          padding: '16px 32px',
          fontSize: 16,
          cursor: 'pointer',
          background:
            state === 'long pressed!' ? '#40c057' : state === 'pressing...' ? '#fab005' : '#228be6',
          color: 'white',
          border: 'none',
          borderRadius: 8,
        }}
      >
        Hold me (500ms)
      </button>
      <p>
        State: <strong>{state}</strong>
      </p>
    </div>
  );
}
