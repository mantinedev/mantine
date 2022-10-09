import { Button, Group } from '@mantine/core';
import React, { useState } from 'react';
import { Cascader } from './Cascader';
import { CascaderItem } from './types';

const DEFAULT_DATA: CascaderItem[] = [
  { value: 'I love', children: [{ value: 'react' }, { value: 'svelte' }, { value: 'vue' }] },
  {
    value: 'I hate',
    children: [{ value: 'react', disabled: true }, { value: 'solid' }, { value: 'angular' }],
  },
];

export default { title: 'Cascader' };

const genItems = ({ num = 10, depth = 1 } = {}) =>
  depth > 0
    ? Array.from(Array(num).keys()).map((i) => ({
        value: `item ${i}`,
        children: genItems({ num, depth: depth - 1 }),
      }))
    : undefined;

function Wrapper({ children }) {
  return <div style={{ padding: 40, maxWidth: 400 }}>{children}</div>;
}

export function Controlled() {
  const [value, setValue] = useState(null);

  return (
    <Wrapper>
      <Cascader
        value={value}
        onChange={setValue}
        data={DEFAULT_DATA}
        clearable
        expandOnHover={false}
        label="Cascader"
        placeholder="Cascader"
      />
      <Group mt="md">
        <Button variant="outline" onClick={() => setValue(null)}>
          Set null
        </Button>
        <Button variant="outline" onClick={() => setValue(['react'])}>
          Set value
        </Button>
      </Group>
    </Wrapper>
  );
}

export function ManyItems() {
  return (
    <Wrapper>
      <Cascader
        data={[
          ...DEFAULT_DATA,
          ...Array.from(Array(10).keys()).map((_, i) => ({
            value: `item ${i}`,
            children: genItems({ depth: 3 }),
          })),
          { value: 'i' },
        ]}
        defaultValue={['i']}
      />
    </Wrapper>
  );
}

export function ExpandOnHover() {
  return (
    <Wrapper>
      <Cascader data={DEFAULT_DATA} expandOnHover />
    </Wrapper>
  );
}
