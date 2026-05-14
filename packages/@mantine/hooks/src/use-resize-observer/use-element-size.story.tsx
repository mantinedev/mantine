import { useState } from 'react';
import { useElementSize } from './use-resize-observer';

export default { title: 'useElementSize' };

export function Usage() {
  const { ref, width, height } = useElementSize<HTMLTextAreaElement>();

  return (
    <div style={{ padding: 40 }}>
      <div style={{ fontFamily: 'monospace', marginBottom: 16 }}>
        Width: {Math.round(width)}px | Height: {Math.round(height)}px
      </div>
      <textarea
        ref={ref}
        style={{ width: 300, height: 150, resize: 'both', padding: 8 }}
        defaultValue="Resize this textarea by dragging the corner"
      />
    </div>
  );
}

export function DynamicContent() {
  const { ref, width, height } = useElementSize<HTMLDivElement>();
  const [items, setItems] = useState(3);

  return (
    <div style={{ padding: 40 }}>
      <div style={{ fontFamily: 'monospace', marginBottom: 16 }}>
        Width: {Math.round(width)}px | Height: {Math.round(height)}px
      </div>
      <button type="button" onClick={() => setItems((n) => n + 1)} style={{ marginBottom: 12 }}>
        Add item ({items} items)
      </button>
      <div
        ref={ref}
        style={{ padding: 16, background: '#f0f0f0', borderRadius: 8, display: 'inline-block' }}
      >
        {Array.from({ length: items }, (_, i) => (
          <div
            key={i}
            style={{ padding: 8, background: 'lightblue', marginBottom: 4, borderRadius: 4 }}
          >
            Item {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
}
