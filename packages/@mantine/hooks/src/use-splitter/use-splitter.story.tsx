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
