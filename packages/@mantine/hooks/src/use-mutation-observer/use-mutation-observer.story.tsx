import { useCallback, useState } from 'react';
import { useMutationObserver } from './use-mutation-observer';

export default { title: 'useMutationObserver' };

export function Usage() {
  const [mutations, setMutations] = useState<string[]>([]);

  const callback = useCallback<MutationCallback>((mutationsList) => {
    for (const mutation of mutationsList) {
      setMutations((prev) => [
        ...prev.slice(-9),
        `${mutation.type}: ${mutation.target.nodeName} (${new Date().toLocaleTimeString()})`,
      ]);
    }
  }, []);

  const ref = useMutationObserver<HTMLDivElement>(callback, {
    childList: true,
    subtree: true,
    attributes: true,
  });

  const [items, setItems] = useState(['Item 1', 'Item 2']);
  const [bgColor, setBgColor] = useState('white');

  return (
    <div style={{ padding: 40 }}>
      <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
        <button
          type="button"
          onClick={() => setItems((prev) => [...prev, `Item ${prev.length + 1}`])}
        >
          Add item
        </button>
        <button
          type="button"
          onClick={() => setBgColor((c) => (c === 'white' ? 'lightyellow' : 'white'))}
        >
          Toggle background
        </button>
      </div>

      <div
        ref={ref}
        style={{ padding: 16, border: '1px solid #ccc', background: bgColor, borderRadius: 8 }}
      >
        {items.map((item) => (
          <div key={item}>{item}</div>
        ))}
      </div>

      <div style={{ marginTop: 16, fontFamily: 'monospace', fontSize: 12 }}>
        {mutations.map((m, i) => (
          <div key={i}>{m}</div>
        ))}
      </div>
    </div>
  );
}
