import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { MANTINE_SIZES } from '@mantine/styles';
import { RadioGroup, Radio } from './index';

const sizes = MANTINE_SIZES.map((size) => (
  <RadioGroup
    style={{ padding: 20 }}
    defaultValue="1"
    label={`${size} size`}
    size={size}
    spacing={size}
    key={size}
  >
    <Radio value="1" label={size} />
    <Radio value="2" label={size} />
    <Radio value="3" label={size} />
  </RadioGroup>
));

function Controlled() {
  const [value, setValue] = useState(null);
  return (
    <RadioGroup value={value} onChange={setValue}>
      <Radio value="1" label="Item 1" />
      <Radio value="2" label="Item 2" />
      <Radio value="3" label="Item 3" />
    </RadioGroup>
  );
}

storiesOf('@mantine/core/RadioGroup/stories', module)
  .add('Too many items in horizontal', () => (
    <RadioGroup
      style={{ padding: 40, maxWidth: 300, background: 'rgba(0, 0, 0, .1)' }}
      label="Too many items"
    >
      <Radio value="item-1" label="item-1" />
      <Radio value="item-2" label="item-2" />
      <Radio value="item-3" label="item-3" />
      <Radio value="item-4" label="item-4" />
      <Radio value="item-5" label="item-5" />
      <Radio value="item-6" label="item-6" />
    </RadioGroup>
  ))
  .add('Sizes', () => <>{sizes}</>)
  .add('Controlled', () => <Controlled />);
