import { useCallback, useState } from 'react';
import { useEventListener } from './use-event-listener';

export default { title: 'use-event-listener' };

export function Usage() {
  const [visible, setVisible] = useState(false);
  const listener = useCallback(() => console.log('mouse down'), []);
  const ref = useEventListener('mousedown', listener);

  return (
    <div style={{ padding: 40 }}>
      {visible && (
        <div ref={ref} style={{ padding: 40, background: 'orange' }}>
          Click me
        </div>
      )}

      <button onClick={() => setVisible((v) => !v)}>Toggle visible</button>
    </div>
  );
}
