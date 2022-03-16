import { Button, Group } from '@mantine/core';
import { storiesOf } from '@storybook/react';
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

function Wrapper({ children }) {
  return <div style={{ padding: 40, maxWidth: 400 }}>{children}</div>;
}

function Controlled() {
  const [value, setValue] = useState(null);

  return (
    <div>
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
        <Button variant="outline" onClick={() => setValue('react')}>
          Set value
        </Button>
      </Group>
    </div>
  );
}

storiesOf('@mantine/labs/Cascader/stories', module)
  .add('Controlled', () => (
    <Wrapper>
      <Controlled />
    </Wrapper>
  ))
  .add('Many Items', () => (
    <Wrapper>
      <Cascader
        data={[
          ...DEFAULT_DATA,
          ...Array.from(Array(10).keys()).map((_, i) => ({ value: `item ${i}` })),
          { value: 'i' },
        ]}
        defaultValue="I love, react"
      />
    </Wrapper>
  ));
