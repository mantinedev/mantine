import { useState } from 'react';
import { useCollapse } from './use-collapse';

export default { title: 'useCollapse' };

export function Usage() {
  const [expanded, setExpanded] = useState(false);
  const { getCollapseProps, state } = useCollapse({ expanded });

  return (
    <div style={{ padding: 40 }}>
      <button
        onClick={() => setExpanded((v) => !v)}
        style={{ padding: '8px 16px', cursor: 'pointer', marginBottom: 8 }}
      >
        {expanded ? 'Collapse' : 'Expand'} (state: {state})
      </button>
      <div {...getCollapseProps()}>
        <div style={{ padding: 20, background: '#228be6', color: 'white', borderRadius: 8 }}>
          <p>This content is collapsible.</p>
          <p>It animates its height when toggled.</p>
          <p>Third line of content for height.</p>
        </div>
      </div>
    </div>
  );
}

export function InitiallyExpanded() {
  const [expanded, setExpanded] = useState(true);
  const { getCollapseProps, state } = useCollapse({ expanded });

  return (
    <div style={{ padding: 40 }}>
      <button
        onClick={() => setExpanded((v) => !v)}
        style={{ padding: '8px 16px', cursor: 'pointer', marginBottom: 8 }}
      >
        {expanded ? 'Collapse' : 'Expand'} (state: {state})
      </button>
      <div {...getCollapseProps()}>
        <div style={{ padding: 20, background: '#be4bdb', color: 'white', borderRadius: 8 }}>
          <p>This starts expanded.</p>
          <p>Click the button to collapse it.</p>
        </div>
      </div>
    </div>
  );
}
