import { useState } from 'react';
import { Input } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = (props: any) => `
import { Input } from '@mantine/core';

function Demo(){
  const [value, setValue] = useState('clearable');

  return (
    <Input
      placeholder="Clearable input"
      value={value}
      onChange={(event) => setValue(event.currentTarget.value)}
      rightSection={value !== '' ? <Input.ClearButton onClick={() => setValue('')} /> : undefined}
      rightSectionPointerEvents="auto"
      size="${props.size}"
    />
  );
}
`;

function Wrapper(props: any) {
  const [value, setValue] = useState('clearable');

  return (
    <Input
      placeholder="Clearable input"
      value={value}
      onChange={(event) => setValue(event.currentTarget.value)}
      rightSection={value !== '' ? <Input.ClearButton onClick={() => setValue('')} /> : undefined}
      rightSectionPointerEvents="auto"
      {...props}
    />
  );
}

export const clearButton: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  maxWidth: 340,
  centered: true,
  controls: [{ type: 'size', prop: 'size', initialValue: 'sm', libraryValue: '__' }],
};
