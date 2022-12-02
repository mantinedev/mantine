import React, { useState } from 'react';
import { useEyeDropper } from './use-eye-dropper';

export default { title: 'use-eye-dropper' };

export function Usage() {
  const [color, setColor] = useState('');
  const { open, supported } = useEyeDropper();

  return (
    <div style={{ padding: 40 }}>
      Supported: {supported.toString()}
      Color: {color}
      <button type="button" onClick={async () => setColor((await open()).sRGBHex)}>
        Pick color
      </button>
    </div>
  );
}
