import { useState } from 'react';
import { useHorizontalCollapse } from './use-horizontal-collapse';

export default { title: 'useHorizontalCollapse' };

export function Usage() {
  const [expanded, setExpanded] = useState(false);
  const { getCollapseProps, state } = useHorizontalCollapse({ expanded });

  return (
    <div style={{ padding: 40 }}>
      <button
        onClick={() => setExpanded((v) => !v)}
        style={{ padding: '8px 16px', cursor: 'pointer', marginBottom: 16 }}
      >
        {expanded ? 'Collapse' : 'Expand'} (state: {state})
      </button>
      <div style={{ display: 'flex' }}>
        <div {...getCollapseProps()}>
          <div
            style={{
              padding: 20,
              background: '#228be6',
              color: 'white',
              borderRadius: 8,
              whiteSpace: 'nowrap',
            }}
          >
            This content collapses horizontally. It has enough width to demonstrate the animation.
          </div>
        </div>
      </div>
    </div>
  );
}

export function InitiallyExpanded() {
  const [expanded, setExpanded] = useState(true);
  const { getCollapseProps, state } = useHorizontalCollapse({ expanded });

  return (
    <div style={{ padding: 40 }}>
      <button
        onClick={() => setExpanded((v) => !v)}
        style={{ padding: '8px 16px', cursor: 'pointer', marginBottom: 16 }}
      >
        {expanded ? 'Collapse' : 'Expand'} (state: {state})
      </button>
      <div style={{ display: 'flex' }}>
        <div {...getCollapseProps()}>
          <div
            style={{
              padding: 20,
              background: '#be4bdb',
              color: 'white',
              borderRadius: 8,
              whiteSpace: 'nowrap',
            }}
          >
            This starts expanded and collapses horizontally.
          </div>
        </div>
      </div>
    </div>
  );
}
