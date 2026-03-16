import { useState } from 'react';
import { useEyeDropper } from './use-eye-dropper';

export default { title: 'useEyeDropper' };

export function Usage() {
  const { supported, open } = useEyeDropper();
  const [color, setColor] = useState('#ffffff');

  const pickColor = async () => {
    const result = await open();
    if (result) {
      setColor(result.sRGBHex);
    }
  };

  return (
    <div style={{ padding: 40 }}>
      {supported ? (
        <>
          <button type="button" onClick={pickColor}>
            Pick a color
          </button>
          <div style={{ marginTop: 20, display: 'flex', alignItems: 'center', gap: 12 }}>
            <div
              style={{
                width: 60,
                height: 60,
                background: color,
                border: '1px solid #ccc',
                borderRadius: 8,
              }}
            />
            <span style={{ fontFamily: 'monospace' }}>{color}</span>
          </div>
        </>
      ) : (
        <div>EyeDropper API is not supported in this browser</div>
      )}
    </div>
  );
}
