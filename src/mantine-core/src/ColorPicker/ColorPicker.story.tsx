import React, { useState } from 'react';
import { ColorPicker } from './ColorPicker';

export default { title: 'ColorPicker' };

export function ColorSwatchesEvents() {
  const [value, setValue] = useState('#efefefe');
  return (
    <>
      <ColorPicker
        value={value}
        onChange={(val) => {
          setValue(val);
        }}
        swatches={['#eeeeee', '#d4d4d4', '#d4d5d6', '#5f3e4e']}
      />
      Value: {value}
    </>
  );
}

export function UncontrolledSwatches() {
  return (
    <>
      <ColorPicker swatches={['#eeeeee', '#d4d4d4', '#d4d5d6', '#5f3e4e']} />
    </>
  );
}
