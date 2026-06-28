import { useState } from 'react';
import { SplitterPaneSize, useSplitter } from './use-splitter';

export default { title: 'use-splitter' };

const pct = (size: SplitterPaneSize) =>
  Math.round(typeof size === 'number' ? size : parseFloat(size));

const handleStyle: React.CSSProperties = {
  width: 8,
  backgroundColor: 'var(--mantine-color-gray-3)',
  cursor: 'col-resize',
  flexShrink: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  touchAction: 'none',
};

const handleStyleVertical: React.CSSProperties = {
  ...handleStyle,
  width: '100%',
  height: 8,
  cursor: 'row-resize',
};

const panelStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 600,
  overflow: 'hidden',
};

const isFixed = (size: SplitterPaneSize) =>
  typeof size === 'string' && (size.endsWith('px') || size.endsWith('rem'));

// Mirrors how @mantine/core Splitter lays panes out: fixed px/rem panes use flex-basis and shrink
// proportionally when they overflow the container, flexible panes share the leftover via flex-grow.
const paneFlexStyle = (size: SplitterPaneSize): React.CSSProperties =>
  isFixed(size)
    ? { flexGrow: 0, flexShrink: 1, flexBasis: size as string }
    : { flexGrow: typeof size === 'number' ? size : parseFloat(size), flexShrink: 1, flexBasis: 0 };

export function Usage() {
  const splitter = useSplitter({
    panels: [{ defaultSize: 50 }, { defaultSize: 50 }],
  });

  return (
    <div ref={splitter.ref} style={{ display: 'flex', height: 300, border: '1px solid #ddd' }}>
      <div style={{ ...panelStyle, width: `${splitter.sizes[0]}%`, backgroundColor: '#e3f2fd' }}>
        Panel 1 ({pct(splitter.sizes[0])}%)
      </div>
      <div {...splitter.getHandleProps({ index: 0 })} style={handleStyle} />
      <div style={{ ...panelStyle, width: `${splitter.sizes[1]}%`, backgroundColor: '#fce4ec' }}>
        Panel 2 ({pct(splitter.sizes[1])}%)
      </div>
    </div>
  );
}

export function Vertical() {
  const splitter = useSplitter({
    panels: [{ defaultSize: 50 }, { defaultSize: 50 }],
    orientation: 'vertical',
  });

  return (
    <div
      ref={splitter.ref}
      style={{ display: 'flex', flexDirection: 'column', height: 400, border: '1px solid #ddd' }}
    >
      <div style={{ ...panelStyle, height: `${splitter.sizes[0]}%`, backgroundColor: '#e3f2fd' }}>
        Panel 1 ({pct(splitter.sizes[0])}%)
      </div>
      <div {...splitter.getHandleProps({ index: 0 })} style={handleStyleVertical} />
      <div style={{ ...panelStyle, height: `${splitter.sizes[1]}%`, backgroundColor: '#fce4ec' }}>
        Panel 2 ({pct(splitter.sizes[1])}%)
      </div>
    </div>
  );
}

export function ThreePanels() {
  const splitter = useSplitter({
    panels: [{ defaultSize: 25 }, { defaultSize: 50 }, { defaultSize: 25 }],
  });

  return (
    <div ref={splitter.ref} style={{ display: 'flex', height: 300, border: '1px solid #ddd' }}>
      <div style={{ ...panelStyle, width: `${splitter.sizes[0]}%`, backgroundColor: '#e3f2fd' }}>
        {pct(splitter.sizes[0])}%
      </div>
      <div {...splitter.getHandleProps({ index: 0 })} style={handleStyle} />
      <div style={{ ...panelStyle, width: `${splitter.sizes[1]}%`, backgroundColor: '#e8f5e9' }}>
        {pct(splitter.sizes[1])}%
      </div>
      <div {...splitter.getHandleProps({ index: 1 })} style={handleStyle} />
      <div style={{ ...panelStyle, width: `${splitter.sizes[2]}%`, backgroundColor: '#fce4ec' }}>
        {pct(splitter.sizes[2])}%
      </div>
    </div>
  );
}

export function Collapsible() {
  const splitter = useSplitter({
    panels: [{ defaultSize: 30, collapsible: true, min: 15 }, { defaultSize: 70 }],
  });

  return (
    <div>
      <div ref={splitter.ref} style={{ display: 'flex', height: 300, border: '1px solid #ddd' }}>
        <div style={{ ...panelStyle, width: `${splitter.sizes[0]}%`, backgroundColor: '#e3f2fd' }}>
          {splitter.collapsed[0] ? 'Collapsed' : `${pct(splitter.sizes[0])}%`}
        </div>
        <div {...splitter.getHandleProps({ index: 0 })} style={handleStyle} />
        <div style={{ ...panelStyle, width: `${splitter.sizes[1]}%`, backgroundColor: '#fce4ec' }}>
          {pct(splitter.sizes[1])}%
        </div>
      </div>
      <button type="button" onClick={() => splitter.toggleCollapse(0)} style={{ marginTop: 10 }}>
        Toggle Panel 1
      </button>
    </div>
  );
}

export function OverflowingFixedPanes() {
  // Two 600px panes in an 800px container overflow, so they render down-scaled (~400px each).
  // Before the fix, any drag rewrote the raw sizes to the scaled values, permanently shrinking
  // both panes. After the fix the raw px total stays ~1200px and only the dragged delta moves.
  const splitter = useSplitter({
    panels: [{ defaultSize: '600px' }, { defaultSize: '600px' }],
  });

  return (
    <div
      ref={splitter.ref}
      style={{ display: 'flex', width: 800, height: 300, border: '1px solid #ddd' }}
    >
      <div
        style={{ ...panelStyle, ...paneFlexStyle(splitter.sizes[0]), backgroundColor: '#e3f2fd' }}
      >
        {String(splitter.sizes[0])}
      </div>
      <div {...splitter.getHandleProps({ index: 0 })} style={handleStyle} />
      <div
        style={{ ...panelStyle, ...paneFlexStyle(splitter.sizes[1]), backgroundColor: '#fce4ec' }}
      >
        {String(splitter.sizes[1])}
      </div>
    </div>
  );
}

export function OverflowingFixedWithFlexible() {
  // Two 600px fixed panes (overflowing the 800px container) plus a flexible pane rendered at 0.
  // Dragging the second handle left hands real space to the flexible pane and clears the overflow:
  // the fixed panes must settle at their true rendered px and the flexible pane keep the space.
  const splitter = useSplitter({
    panels: [{ defaultSize: '600px' }, { defaultSize: '600px' }, { defaultSize: 1, min: 0 }],
  });

  return (
    <div
      ref={splitter.ref}
      style={{ display: 'flex', width: 800, height: 300, border: '1px solid #ddd' }}
    >
      <div
        style={{ ...panelStyle, ...paneFlexStyle(splitter.sizes[0]), backgroundColor: '#e3f2fd' }}
      >
        {String(splitter.sizes[0])}
      </div>
      <div {...splitter.getHandleProps({ index: 0 })} style={handleStyle} />
      <div
        style={{ ...panelStyle, ...paneFlexStyle(splitter.sizes[1]), backgroundColor: '#e8f5e9' }}
      >
        {String(splitter.sizes[1])}
      </div>
      <div {...splitter.getHandleProps({ index: 1 })} style={handleStyle} />
      <div
        style={{ ...panelStyle, ...paneFlexStyle(splitter.sizes[2]), backgroundColor: '#fce4ec' }}
      >
        flex ({pct(splitter.sizes[2])})
      </div>
    </div>
  );
}

export function Controlled() {
  const [sizes, setSizes] = useState<SplitterPaneSize[]>([50, 50]);

  const splitter = useSplitter({
    panels: [{ defaultSize: 50 }, { defaultSize: 50 }],
    sizes,
    onSizeChange: setSizes,
  });

  return (
    <div>
      <div ref={splitter.ref} style={{ display: 'flex', height: 300, border: '1px solid #ddd' }}>
        <div style={{ ...panelStyle, width: `${splitter.sizes[0]}%`, backgroundColor: '#e3f2fd' }}>
          {pct(splitter.sizes[0])}%
        </div>
        <div {...splitter.getHandleProps({ index: 0 })} style={handleStyle} />
        <div style={{ ...panelStyle, width: `${splitter.sizes[1]}%`, backgroundColor: '#fce4ec' }}>
          {pct(splitter.sizes[1])}%
        </div>
      </div>
      <button type="button" onClick={() => setSizes([30, 70])} style={{ marginTop: 10 }}>
        Set 30/70
      </button>
      <button
        type="button"
        onClick={() => setSizes([50, 50])}
        style={{ marginTop: 10, marginLeft: 8 }}
      >
        Reset
      </button>
    </div>
  );
}
