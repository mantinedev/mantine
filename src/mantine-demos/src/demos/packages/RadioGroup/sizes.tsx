import React from 'react';
import { Radio, RadioGroup, RadioProps } from '@mantine/core';

const getSizes = (props?: RadioProps) =>
  (['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size, index) => (
    <RadioGroup size={size} key={size}>
      <Radio value={size} style={{ marginTop: index === 0 ? 0 : 15 }} {...props}>
        {size} size radio
      </Radio>
    </RadioGroup>
  ));

function Demo() {
  return <>{getSizes()}</>;
}

export const sizes: MantineDemo = {
  type: 'demo',
  component: Demo,
};
