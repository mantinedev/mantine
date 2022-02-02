import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { MANTINE_SIZES } from '@mantine/styles';
import { NumberInput } from './NumberInput';

const sizes = MANTINE_SIZES.map((size) => (
  <NumberInput defaultValue={0} label={size} size={size} key={size} mt="xl" />
));

function Controlled(
  props: Omit<React.ComponentPropsWithoutRef<typeof NumberInput>, 'value' | 'onChange'>
) {
  const [value, setValue] = useState(0);
  return <NumberInput value={value} onChange={(val) => setValue(val)} {...props} />;
}

storiesOf('@mantine/core/NumberInput/stories', module)
  .add('Sizes', () => <div style={{ padding: 40, maxWidth: 400 }}>{sizes}</div>)
  .add('Controlled', () => (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <Controlled />
    </div>
  ))
  .add('Formatter/Parser', () => (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <NumberInput
        label="Price"
        value={1000}
        formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
      />
      <NumberInput
        label="Price with cents"
        value={1000.5}
        precision={2}
        formatter={(value) => `$ ${value}`}
        parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
      />
      <NumberInput
        label="Percentage"
        value={0.1}
        step={0.01}
        precision={2}
        formatter={(value) => `${(parseFloat(value) * 100).toFixed(0)}%`}
        parser={(value) => String(parseFloat(value.replace('%', '')) / 100)}
      />
    </div>
  ))
  .add('Step On Hold', () => (
    <>
      <div style={{ padding: 40, maxWidth: 400 }}>
        <NumberInput label="Step on hold" stepHoldDelay={750} stepHoldInterval={100} />
      </div>
      <div style={{ padding: 40, maxWidth: 400 }}>
        <NumberInput
          label="Step on hold with interval function"
          stepHoldDelay={750}
          stepHoldInterval={(count) => Math.max(1000 - count * count, 0)}
        />
      </div>
      <div style={{ padding: 40, maxWidth: 400 }}>
        <NumberInput label="Don't step on hold" />
      </div>
    </>
  ));
