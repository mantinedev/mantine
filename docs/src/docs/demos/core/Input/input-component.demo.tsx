import React from 'react';
import { ChevronDownIcon } from '@modulz/radix-icons';
import { Input } from '@mantine/core';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const code = `import React from 'react';
import { Input } from '@mantine/core';
import { ChevronDownIcon } from '@modulz/radix-icons';

export function InputDemo() {
  return (
    <>
      <Input component="button">Button input</Input>
      <Input component="select" rightSection={<ChevronDownIcon />}>
        <option value="1">1</option>
        <option value="2">2</option>
      </Input>
    </>
  );
}`;

export function InputComponentDemo() {
  return (
    <CodeDemo code={code} language="tsx">
      <Input component="button">Button input</Input>
      <Input component="select" style={{ marginTop: 15 }} rightSection={<ChevronDownIcon />}>
        <option value="1">1</option>
        <option value="2">2</option>
      </Input>
    </CodeDemo>
  );
}
