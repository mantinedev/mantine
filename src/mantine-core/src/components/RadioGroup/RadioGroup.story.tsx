import React from 'react';
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
    <Radio value="1">{size}</Radio>
    <Radio value="2">{size}</Radio>
    <Radio value="3">{size}</Radio>
  </RadioGroup>
));

storiesOf('@mantine/core/RadioGroup', module)
  .add('General usage', () => (
    <div style={{ padding: 40 }}>
      <RadioGroup
        label="Your favorite library/framework"
        required
        description="Don't worry it's anonymous, you can safely pick Angular"
      >
        <Radio value="react">React</Radio>
        <Radio value="ng" disabled title="Unless you can't, haha">
          Angular
        </Radio>
        <Radio value="vue">Vue</Radio>
      </RadioGroup>
    </div>
  ))
  .add('Too many items in horizontal', () => (
    <RadioGroup
      style={{ padding: 40, maxWidth: 300, background: 'rgba(0, 0, 0, .1)' }}
      label="Too many items"
    >
      <Radio value="item-1">item-1</Radio>
      <Radio value="item-2">item-2</Radio>
      <Radio value="item-3">item-3</Radio>
      <Radio value="item-4">item-4</Radio>
      <Radio value="item-5">item-5</Radio>
      <Radio value="item-6">item-6</Radio>
    </RadioGroup>
  ))
  .add('Vertical', () => (
    <RadioGroup
      style={{ padding: 40 }}
      defaultValue="react"
      label="Your favorite library/framework"
      required
      description="Don't worry it's anonymous, you can safely pick Angular"
      variant="vertical"
      spacing="xl"
    >
      <Radio value="react">React</Radio>
      <Radio value="ng" disabled title="Unless you can't, haha">
        Angular
      </Radio>
      <Radio value="vue">Vue</Radio>
    </RadioGroup>
  ))
  .add('Sizes', () => <>{sizes}</>);
