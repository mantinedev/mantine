import React from 'react';
import { InputWrapper, InputWrapperProps, Input, useMantineTheme } from '../../../index';

function Wrapper(props: InputWrapperProps) {
  const theme = useMantineTheme();
  return (
    <div style={{ maxWidth: 300, margin: 'auto' }}>
      <InputWrapper id="input-demo" {...props}>
        <Input
          id="input-demo"
          placeholder="Your email"
          variant={theme.colorScheme === 'dark' ? 'filled' : 'default'}
        />
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
  ],
};
