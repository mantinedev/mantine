import React from 'react';
import { InputWrapper, InputWrapperProps, Input } from '@mantine/core';

function Wrapper(props: InputWrapperProps) {
  return (
    <div style={{ maxWidth: 440, marginLeft: 'auto', marginRight: 'auto' }}>
      <InputWrapper id="input-demo" {...props}>
        <Input id="input-demo" placeholder="Your email" size={props.size} />
      </InputWrapper>
    </div>
  );
}

const codeTemplate = (props: string) => `<InputWrapper
  id="input-demo"
 ${props}
>
  <Input id="input-demo" placeholder="Your email" />
</InputWrapper>`;

export const configurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  configuratorProps: { multiline: true },
  configurator: [
    {
      name: 'required',
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
