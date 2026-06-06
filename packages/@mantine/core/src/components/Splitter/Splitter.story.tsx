import { useState } from 'react';
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
      <Splitter sizes={sizes} onSizeChange={(next) => setSizes(next as number[])} h={300}>
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
