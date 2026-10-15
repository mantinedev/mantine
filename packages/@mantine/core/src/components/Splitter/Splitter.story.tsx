import { useRef, useState } from 'react';
import type { UseSplitterReturnValue } from '@mantine/hooks';
import { Splitter } from './Splitter';

export default { title: 'Splitter' };

export function Usage() {
  return (
    <Splitter h={300}>
      <Splitter.Pane defaultSize={50} min={20} bg="blue">
        <div style={{ padding: 20, color: 'white' }}>Left pane</div>
      </Splitter.Pane>
      <Splitter.Pane defaultSize={50} min={20} bg="teal">
        <div style={{ padding: 20, color: 'white' }}>Right pane</div>
      </Splitter.Pane>
    </Splitter>
  );
}

export function Vertical() {
  return (
    <Splitter orientation="vertical" h={400}>
      <Splitter.Pane defaultSize={50} min={20} bg="blue">
        <div style={{ padding: 20, color: 'white' }}>Top pane</div>
      </Splitter.Pane>
      <Splitter.Pane defaultSize={50} min={20} bg="teal">
        <div style={{ padding: 20, color: 'white' }}>Bottom pane</div>
      </Splitter.Pane>
    </Splitter>
  );
}

export function ThreePanes() {
  return (
    <Splitter h={300}>
      <Splitter.Pane defaultSize={33} min={10} bg="blue">
        <div style={{ padding: 20, color: 'white' }}>First</div>
      </Splitter.Pane>
      <Splitter.Pane defaultSize={34} min={10} bg="teal">
        <div style={{ padding: 20, color: 'white' }}>Second</div>
      </Splitter.Pane>
      <Splitter.Pane defaultSize={33} min={10} bg="grape">
        <div style={{ padding: 20, color: 'white' }}>Third</div>
      </Splitter.Pane>
    </Splitter>
  );
}

export function MixedUnitsThreePanes() {
  return (
    <Splitter h={300}>
      <Splitter.Pane defaultSize="200px" min="120px" max="50%" bg="blue">
        <div style={{ padding: 20, color: 'white' }}>Fixed 200px</div>
      </Splitter.Pane>
      <Splitter.Pane defaultSize={40} min={10} collapsible bg="teal">
        <div style={{ padding: 20, color: 'white' }}>Flexible 40, collapsible</div>
      </Splitter.Pane>
      <Splitter.Pane defaultSize={60} min={10} bg="grape">
        <div style={{ padding: 20, color: 'white' }}>Flexible 60</div>
      </Splitter.Pane>
    </Splitter>
  );
}

export function Collapsible() {
  return (
    <Splitter h={300}>
      <Splitter.Pane defaultSize={30} min={15} collapsible bg="blue">
        <div style={{ padding: 20, color: 'white' }}>Collapsible sidebar</div>
      </Splitter.Pane>
      <Splitter.Pane defaultSize={70} min={30} bg="teal">
        <div style={{ padding: 20, color: 'white' }}>Main content</div>
      </Splitter.Pane>
    </Splitter>
  );
}

export function Controlled() {
  const [sizes, setSizes] = useState([50, 50]);
  return (
    <div>
      <div style={{ marginBottom: 10 }}>
        <button onClick={() => setSizes([30, 70])}>30/70</button>
        <button onClick={() => setSizes([50, 50])}>50/50</button>
        <button onClick={() => setSizes([70, 30])}>70/30</button>
      </div>
      <Splitter sizes={sizes} onSizeChange={(next) => setSizes(next.map(Number))} h={300}>
        <Splitter.Pane defaultSize={50} min={20} bg="blue">
          <div style={{ padding: 20, color: 'white' }}>Left ({sizes[0].toFixed(1)}%)</div>
        </Splitter.Pane>
        <Splitter.Pane defaultSize={50} min={20} bg="teal">
          <div style={{ padding: 20, color: 'white' }}>Right ({sizes[1].toFixed(1)}%)</div>
        </Splitter.Pane>
      </Splitter>
    </div>
  );
}

export function Nested() {
  return (
    <Splitter h={400}>
      <Splitter.Pane defaultSize={30} min={15} bg="blue">
        <div style={{ padding: 20, color: 'white' }}>Sidebar</div>
      </Splitter.Pane>
      <Splitter.Pane defaultSize={70} min={30}>
        <Splitter orientation="vertical" h="100%">
          <Splitter.Pane defaultSize={60} min={20} bg="teal">
            <div style={{ padding: 20, color: 'white' }}>Editor</div>
          </Splitter.Pane>
          <Splitter.Pane defaultSize={40} min={20} bg="grape">
            <div style={{ padding: 20, color: 'white' }}>Terminal</div>
          </Splitter.Pane>
        </Splitter>
      </Splitter.Pane>
    </Splitter>
  );
}

export function CustomLineSize() {
  return (
    <Splitter lineSize={6} h={300}>
      <Splitter.Pane defaultSize={50} min={20} bg="blue">
        <div style={{ padding: 20, color: 'white' }}>Left pane</div>
      </Splitter.Pane>
      <Splitter.Pane defaultSize={50} min={20} bg="teal">
        <div style={{ padding: 20, color: 'white' }}>Right pane</div>
      </Splitter.Pane>
    </Splitter>
  );
}

export function NoIcon() {
  return (
    <Splitter handleIcon={null} h={300}>
      <Splitter.Pane defaultSize={50} min={20} bg="blue">
        <div style={{ padding: 20, color: 'white' }}>Left pane</div>
      </Splitter.Pane>
      <Splitter.Pane defaultSize={50} min={20} bg="teal">
        <div style={{ padding: 20, color: 'white' }}>Right pane</div>
      </Splitter.Pane>
    </Splitter>
  );
}

export function ToggledPane() {
  const [withPreview, setWithPreview] = useState(false);
  return (
    <div>
      <button type="button" onClick={() => setWithPreview((current) => !current)}>
        {withPreview ? 'Remove preview pane' : 'Add preview pane'}
      </button>
      <Splitter h={300} mt="md">
        <Splitter.Pane defaultSize={25} min={10} bg="blue">
          <div style={{ padding: 20, color: 'white' }}>Files</div>
        </Splitter.Pane>
        <Splitter.Pane defaultSize={withPreview ? 45 : 75} min={10} bg="teal">
          <div style={{ padding: 20, color: 'white' }}>Editor</div>
        </Splitter.Pane>
        {withPreview && (
          <Splitter.Pane defaultSize={30} min={10} bg="grape">
            <div style={{ padding: 20, color: 'white' }}>Preview</div>
          </Splitter.Pane>
        )}
      </Splitter>
    </div>
  );
}

export function WithoutHandle() {
  return (
    <Splitter withHandle={false} h={300}>
      <Splitter.Pane defaultSize={50} min={20} bg="blue">
        <div style={{ padding: 20, color: 'white' }}>Left pane</div>
      </Splitter.Pane>
      <Splitter.Pane defaultSize={50} min={20} bg="teal">
        <div style={{ padding: 20, color: 'white' }}>Right pane</div>
      </Splitter.Pane>
    </Splitter>
  );
}

export function ControlledSidebars() {
  const splitterRef = useRef<UseSplitterReturnValue | null>(null);
  const [sizes, setSizes] = useState<number[]>([25, 50, 25]);
  const [limitLeft, setLimitLeft] = useState(false);
  return (
    <div>
      <div style={{ marginBottom: 10, display: 'flex', gap: 8, alignItems: 'center' }}>
        <button
          type="button"
          onClick={() => {
            splitterRef.current?.collapse(0);
            splitterRef.current?.collapse(2);
          }}
        >
          Collapse both sidebars
        </button>
        <button
          type="button"
          onClick={() => {
            splitterRef.current?.expand(0);
            splitterRef.current?.expand(2);
          }}
        >
          Expand both sidebars
        </button>
        <label>
          <input
            type="checkbox"
            checked={limitLeft}
            onChange={(event) => setLimitLeft(event.currentTarget.checked)}
          />{' '}
          Reject left pane above 40%
        </label>
        <span data-testid="sizes">{sizes.map((size) => size.toFixed(1)).join(' / ')}</span>
      </div>
      <Splitter
        splitterRef={splitterRef}
        sizes={sizes}
        onSizeChange={(next) => {
          const numeric = next.map(Number);
          setSizes((prev) => (limitLeft && numeric[0] > 40 ? prev : numeric));
        }}
        h={300}
      >
        <Splitter.Pane defaultSize={25} min={10} collapsible bg="blue">
          <div style={{ padding: 20, color: 'white' }}>Left</div>
        </Splitter.Pane>
        <Splitter.Pane defaultSize={50} min={20} bg="teal">
          <div style={{ padding: 20, color: 'white' }}>Main</div>
        </Splitter.Pane>
        <Splitter.Pane defaultSize={25} min={10} collapsible bg="grape">
          <div style={{ padding: 20, color: 'white' }}>Right</div>
        </Splitter.Pane>
      </Splitter>
    </div>
  );
}

export function AdjacentCollapsible() {
  const splitterRef = useRef<UseSplitterReturnValue | null>(null);
  return (
    <div>
      <div style={{ marginBottom: 10, display: 'flex', gap: 8 }}>
        <button
          type="button"
          onClick={() => {
            splitterRef.current?.collapse(0);
            splitterRef.current?.collapse(1);
          }}
        >
          Collapse first two panes
        </button>
        <button type="button" onClick={() => splitterRef.current?.reset(0)}>
          Reset first handle
        </button>
      </div>
      <Splitter splitterRef={splitterRef} h={300}>
        <Splitter.Pane defaultSize={25} min={10} collapsible bg="blue">
          <div style={{ padding: 20, color: 'white' }}>First</div>
        </Splitter.Pane>
        <Splitter.Pane defaultSize={25} min={10} collapsible bg="teal">
          <div style={{ padding: 20, color: 'white' }}>Second</div>
        </Splitter.Pane>
        <Splitter.Pane defaultSize={50} min={10} bg="grape">
          <div style={{ padding: 20, color: 'white' }}>Third</div>
        </Splitter.Pane>
      </Splitter>
    </div>
  );
}
