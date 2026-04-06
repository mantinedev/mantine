import { useEffect, useState } from 'react';
import { useScroller } from './use-scroller';

export default { title: 'useScroller' };

export function Usage() {
  const { ref, canScrollStart, canScrollEnd, scrollStart, scrollEnd, isDragging, dragHandlers } =
    useScroller<HTMLDivElement>();

  return (
    <div style={{ padding: 40, maxWidth: 500 }}>
      <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
        <button type="button" onClick={scrollStart} disabled={!canScrollStart}>
          Scroll Start
        </button>
        <button type="button" onClick={scrollEnd} disabled={!canScrollEnd}>
          Scroll End
        </button>
        <span style={{ fontFamily: 'monospace' }}>
          {isDragging ? 'Dragging...' : 'Drag to scroll'}
        </span>
      </div>
      <div
        ref={ref}
        {...dragHandlers}
        style={{
          overflow: 'auto',
          whiteSpace: 'nowrap',
          cursor: isDragging ? 'grabbing' : 'grab',
          border: '1px solid #ccc',
          borderRadius: 8,
          padding: 12,
        }}
      >
        {Array.from({ length: 20 }, (_, i) => (
          <span
            key={i}
            style={{
              display: 'inline-block',
              width: 120,
              height: 80,
              background: i % 2 === 0 ? 'lightblue' : 'lightgreen',
              marginRight: 8,
              borderRadius: 4,
              textAlign: 'center',
              lineHeight: '80px',
            }}
          >
            Item {i + 1}
          </span>
        ))}
      </div>
      <div style={{ marginTop: 12, fontFamily: 'monospace' }}>
        canScrollStart: {String(canScrollStart)} | canScrollEnd: {String(canScrollEnd)}
      </div>
    </div>
  );
}

export function AsyncContent() {
  const [items, setItems] = useState<number[]>([]);
  const { ref, canScrollStart, canScrollEnd, scrollStart, scrollEnd, dragHandlers } =
    useScroller<HTMLDivElement>();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setItems(Array.from({ length: 20 }, (_, i) => i));
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div style={{ padding: 40, maxWidth: 500 }}>
      <p>
        Items load after 1 second. Bug: canScrollEnd stays false after items appear (should be
        true). Scroll buttons remain disabled until you manually scroll.
      </p>
      <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
        <button type="button" onClick={scrollStart} disabled={!canScrollStart}>
          Scroll Start
        </button>
        <button type="button" onClick={scrollEnd} disabled={!canScrollEnd}>
          Scroll End
        </button>
      </div>
      <div
        ref={ref}
        {...dragHandlers}
        style={{
          overflow: 'auto',
          whiteSpace: 'nowrap',
          border: '1px solid #ccc',
          borderRadius: 8,
          padding: 12,
        }}
      >
        {items.length === 0 ? (
          <span>Loading items...</span>
        ) : (
          items.map((i) => (
            <span
              key={i}
              style={{
                display: 'inline-block',
                width: 120,
                height: 80,
                background: i % 2 === 0 ? 'lightblue' : 'lightgreen',
                marginRight: 8,
                borderRadius: 4,
                textAlign: 'center',
                lineHeight: '80px',
              }}
            >
              Item {i + 1}
            </span>
          ))
        )}
      </div>
      <div style={{ marginTop: 12, fontFamily: 'monospace' }}>
        canScrollStart: {String(canScrollStart)} | canScrollEnd: {String(canScrollEnd)}
      </div>
    </div>
  );
}
