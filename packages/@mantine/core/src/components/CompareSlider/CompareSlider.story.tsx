import { useState } from 'react';
import { CompareSlider } from './CompareSlider';

export default { title: 'CompareSlider' };

function Panel({ color, label }: { color: string; label: string }) {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: 32,
        fontWeight: 700,
        background: color,
      }}
    >
      {label}
    </div>
  );
}

const before = <Panel color="var(--mantine-color-blue-6)" label="Before" />;
const after = <Panel color="var(--mantine-color-pink-6)" label="After" />;

export function Usage() {
  return (
    <div style={{ padding: 40, maxWidth: 500 }}>
      <CompareSlider aria-label="Compare" before={before} after={after} h={300} />
    </div>
  );
}

export function Vertical() {
  return (
    <div style={{ padding: 40, maxWidth: 500 }}>
      <CompareSlider
        aria-label="Compare"
        orientation="vertical"
        before={before}
        after={after}
        h={300}
      />
    </div>
  );
}

export function Controlled() {
  const [position, setPosition] = useState(30);
  return (
    <div style={{ padding: 40, maxWidth: 500 }}>
      <CompareSlider
        aria-label="Compare"
        before={before}
        after={after}
        h={300}
        position={position}
        onPositionChange={setPosition}
      />
      <div style={{ marginTop: 16 }}>Position: {Math.round(position)}%</div>
    </div>
  );
}

export function WithoutHandle() {
  return (
    <div style={{ padding: 40, maxWidth: 500 }}>
      <CompareSlider
        aria-label="Compare"
        withHandle={false}
        before={before}
        after={after}
        h={300}
      />
    </div>
  );
}

export function CustomHandle() {
  return (
    <div style={{ padding: 40, maxWidth: 500 }}>
      <CompareSlider aria-label="Compare" handle="⇄" before={before} after={after} h={300} />
    </div>
  );
}

export function ChangePositionOnHover() {
  return (
    <div style={{ padding: 40, maxWidth: 500 }}>
      <CompareSlider
        aria-label="Compare"
        changePositionOnHover
        before={before}
        after={after}
        h={300}
      />
    </div>
  );
}

export function WithTransition() {
  return (
    <div style={{ padding: 40, maxWidth: 500 }}>
      <CompareSlider aria-label="Compare" transition before={before} after={after} h={300} />
    </div>
  );
}

export function Disabled() {
  return (
    <div style={{ padding: 40, maxWidth: 500 }}>
      <CompareSlider aria-label="Compare" disabled before={before} after={after} h={300} />
    </div>
  );
}

export function Unstyled() {
  return (
    <div style={{ padding: 40, maxWidth: 500 }}>
      <CompareSlider aria-label="Compare" unstyled before={before} after={after} h={300} />
    </div>
  );
}
