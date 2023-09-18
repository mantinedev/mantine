import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Input } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';

const code = `
import { Input } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';

function Demo() {
  return (
    <>
      <Input component="button" pointer>
        Button input
      </Input>

      <Input
        component="select"
        rightSection={<IconChevronDown size={14} stroke={1.5} />}
        pointer
        mt="md"
      >
        <option value="1">1</option>
        <option value="2">2</option>
      </Input>
    </>
  );
}
`;

function Demo() {
  return (
    <>
      <Input component="button" pointer>
        Button input
      </Input>

      <Input
        component="select"
        rightSection={<IconChevronDown size={14} stroke={1.5} />}
        pointer
        mt="md"
      >
        <option value="1">1</option>
        <option value="2">2</option>
      </Input>
    </>
  );
}

export const component: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
