import React from 'react';
import { ColorPicker } from './ColorPicker';

export default { title: 'ColorPicker' };

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
  const [value, setValue] = React.useState('#FFFFFF');

  return (
    <div style={{ padding: 40 }}>
      <React.StrictMode>
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
      </React.StrictMode>
    </div>
  );
}
