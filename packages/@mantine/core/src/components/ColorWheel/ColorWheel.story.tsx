import { useState } from 'react';
import { ColorWheel } from './ColorWheel';

export default { title: 'ColorWheel' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <ColorWheel aria-label="Hue" />
    </div>
  );
}

export function Controlled() {
  const [value, setValue] = useState(140);
  return (
    <div style={{ padding: 40 }}>
      <ColorWheel aria-label="Hue" value={value} onChange={setValue} />
      <div style={{ marginTop: 16 }}>Value: {value}</div>
    </div>
  );
}

export function Thickness() {
  return (
    <div style={{ padding: 40, display: 'flex', gap: 24 }}>
      <ColorWheel aria-label="Hue" thickness={8} />
      <ColorWheel aria-label="Hue" thickness={40} />
    </div>
  );
}

export function CustomSaturationLightness() {
  return (
    <div style={{ padding: 40, display: 'flex', gap: 24 }}>
      <ColorWheel aria-label="Hue" saturation={60} lightness={70} />
      <ColorWheel aria-label="Hue" saturation={100} lightness={35} />
    </div>
  );
}

export function WithoutThumbIndicator() {
  return (
    <div style={{ padding: 40 }}>
      <ColorWheel aria-label="Hue" withThumbIndicator={false} defaultValue={90} />
    </div>
  );
}

export function Disabled() {
  return (
    <div style={{ padding: 40 }}>
      <ColorWheel aria-label="Hue" disabled defaultValue={90} />
    </div>
  );
}

export function Unstyled() {
  return (
    <div style={{ padding: 40 }}>
      <ColorWheel aria-label="Hue" unstyled />
    </div>
  );
}
