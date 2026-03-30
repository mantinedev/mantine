import { useState } from 'react';
import { useHotkeys } from './use-hotkeys';

export default { title: 'useHotkeys' };

export function Usage() {
  const [count, setCount] = useState(0);
  const [lastKey, setLastKey] = useState('none');

  useHotkeys([
    ['mod+k', () => setLastKey('mod+k')],
    ['mod+j', () => setLastKey('mod+j')],
    ['alt+shift+l', () => setLastKey('alt+shift+l')],
    ['ArrowUp', () => setCount((c) => c + 1)],
    ['ArrowDown', () => setCount((c) => c - 1)],
  ]);

  return (
    <div style={{ padding: 40 }}>
      <p>Press keyboard shortcuts:</p>
      <ul>
        <li>mod+k, mod+j, alt+shift+l to update last key</li>
        <li>ArrowUp / ArrowDown to change counter</li>
      </ul>
      <p>
        Last hotkey: <strong>{lastKey}</strong>
      </p>
      <p>
        Counter: <strong>{count}</strong>
      </p>
    </div>
  );
}
