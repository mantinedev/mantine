import { useState } from 'react';
import { HueSlider } from './HueSlider';

export default { title: 'HueSlider' };

export function Usage() {
  const [value, onChange] = useState(250);

  return (
    <>
      <div>Hue value: {value}</div>
      <HueSlider value={value} onChange={onChange} />
    </>
  );
}
