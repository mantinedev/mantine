import { useState } from 'react';
import { useMove } from './use-move';

export default { title: 'use-move' };

export function Usage() {
  const [visible, setVisible] = useState(true);
  const { ref, active } = useMove(console.log);

  return (
    <div style={{ padding: 40 }}>
      {visible && (
        <div ref={ref} style={{ padding: 40, background: active ? 'orange' : 'cyan' }}>
          Click me
        </div>
      )}

      <button onClick={() => setVisible((v) => !v)}>Toggle visible</button>
    </div>
  );
}
