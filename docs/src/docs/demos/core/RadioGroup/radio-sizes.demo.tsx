import React from 'react';
import { Radio, RadioGroup } from '@mantine/core';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const getSizes = (props?: any) =>
  (['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size, index) => (
    <RadioGroup size={size} key={size}>
      <Radio defaultChecked value={size} style={{ marginTop: index === 0 ? 0 : 15 }} {...props}>
        {size} size radio
      </Radio>
    </RadioGroup>
  ));

export function RadioSizesDemo() {
  return <CodeDemo>{getSizes()}</CodeDemo>;
}
