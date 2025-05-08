import { useState } from 'react';
import { useFocusWithin } from './use-focus-within';

export default { title: 'use-focus-within' };

export function Usage() {
  const [visible, setVisible] = useState(false);
  const { ref, focused } = useFocusWithin();

  return (
    <div style={{ padding: 40 }}>
      {visible && (
        <div ref={ref} style={{ padding: 40, background: focused ? 'orange' : 'cyan' }}>
          <input />
        </div>
      )}

      <button onClick={() => setVisible((v) => !v)}>Toggle visible</button>
    </div>
  );
}
