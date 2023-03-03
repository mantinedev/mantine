import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { InputWrapperProps, Input } from '@mantine/core';

function Wrapper(props: InputWrapperProps) {
  return (
    <Input.Wrapper id="input-demo" maw={440} mx="auto" {...props}>
      <Input id="input-demo" placeholder="Your email" size={props.size} />
    </Input.Wrapper>
  );
}

const codeTemplate = (props: string) => `
import { Input } from '@mantine/core';

function Demo() {
  return (
    <Input.Wrapper
      id="input-demo"
     ${props}
    >
      <Input id="input-demo" placeholder="Your email" />
    </Input.Wrapper>
  );
}
`;

export const wrapperConfigurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  configuratorProps: { multiline: 3 },
  configurator: [
    {
      name: 'withAsterisk',
      type: 'boolean',
      initialValue: true,
      defaultValue: false,
    },
    {
      name: 'label',
      type: 'string',
      initialValue: 'Credit card information',
    },
    {
      name: 'description',
      type: 'string',
      initialValue: 'Please enter your credit card information, we need some money',
    },
    {
      name: 'error',
      type: 'string',
      initialValue: 'Your credit card expired',
    },
    {
      name: 'size',
      type: 'size',
      initialValue: 'sm',
      defaultValue: 'sm',
    },
  ],
};
