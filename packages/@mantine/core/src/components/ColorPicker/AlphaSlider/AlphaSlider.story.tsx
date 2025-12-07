import { useState } from 'react';
import { AlphaSlider } from './AlphaSlider';

export default { title: 'AlphaSlider' };

export function Usage() {
  const [value, onChange] = useState(0.55);

  return (
    <>
      <div>Alpha value: {value}</div>
      <AlphaSlider
        color="#ff0"
        value={value}
        onChange={onChange}
        styles={{ thumb: { border: '1px solid red' } }}
      />
    </>
  );
}
