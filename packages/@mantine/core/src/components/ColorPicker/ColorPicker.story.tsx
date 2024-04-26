import { useState } from 'react';
import { AlphaSlider } from './AlphaSlider/AlphaSlider';
import { ColorPicker } from './ColorPicker';
import { HueSlider } from './HueSlider/HueSlider';

export default { title: 'ColorPicker' };

export function SeparateAlphaSlider() {
  const [value, onChange] = useState(1);

  return (
    <>
      <div>Alpha value: {value}</div>
      <AlphaSlider color="#1c7ed6" value={value} onChange={onChange} size="xl" />
    </>
  );
}

export function SeparateHueSlider() {
  const [value, onChange] = useState(255);

  return (
    <>
      <div>Alpha value: {value}</div>
      <HueSlider value={value} onChange={onChange} size="xl" />
    </>
  );
}

export function Usage() {
  return (
    <div style={{ padding: 40, maxWidth: 300 }}>
      <ColorPicker
        swatches={[
          '#25262b',
          '#868e96',
          '#fa5252',
          '#e64980',
          '#be4bdb',
          '#7950f2',
          '#4c6ef5',
          '#228be6',
          '#15aabf',
          '#12b886',
          '#40c057',
          '#82c91e',
          '#fab005',
          '#fd7e14',
        ]}
        format="rgba"
        fullWidth
      />
    </div>
  );
}

export function Unstyled() {
  return (
    <div style={{ padding: 40 }}>
      <ColorPicker
        swatches={[
          '#25262b',
          '#868e96',
          '#fa5252',
          '#e64980',
          '#be4bdb',
          '#7950f2',
          '#4c6ef5',
          '#228be6',
          '#15aabf',
          '#12b886',
          '#40c057',
          '#82c91e',
          '#fab005',
          '#fd7e14',
        ]}
        unstyled
      />
    </div>
  );
}

export function Controlled() {
  const [value, setValue] = useState('#FFFFFF');

  return (
    <div style={{ padding: 40 }}>
      <ColorPicker
        swatches={[
          '#25262b',
          '#868e96',
          '#fa5252',
          '#e64980',
          '#be4bdb',
          '#7950f2',
          '#4c6ef5',
          '#228be6',
          '#15aabf',
          '#12b886',
          '#40c057',
          '#82c91e',
          '#fab005',
          '#fd7e14',
        ]}
        size="xl"
        value={value}
        onChange={setValue}
      />

      <button type="button" onClick={() => setValue('#FEFEFE')}>
        Set value
      </button>
    </div>
  );
}
