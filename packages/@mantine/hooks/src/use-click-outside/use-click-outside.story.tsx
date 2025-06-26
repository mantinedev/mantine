import { useState } from 'react';
import { useClickOutside } from './use-click-outside';

export default { title: 'use-click-outside' };

export function Usage() {
  const [visible, setVisible] = useState(false);
  const ref = useClickOutside(() => console.log('clicked outside'));

  return (
    <div style={{ padding: 40 }}>
      {visible && (
        <div ref={ref} style={{ padding: 40, background: 'orange' }}>
          Click outside
        </div>
      )}

      <button onClick={() => setVisible((v) => !v)}>Toggle visible</button>
    </div>
  );
}
