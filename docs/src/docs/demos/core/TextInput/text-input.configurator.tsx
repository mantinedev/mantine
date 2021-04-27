import React from 'react';
import { TextInput, useMantineTheme } from '@mantine/core';
import Configurator from '../../../../components/Configurator/Configurator';

const codeTemplate = (props: string) => `<TextInput
 ${props}
/>`;

export function TextInputConfigurator() {
  const theme = useMantineTheme();

  return (
    <Configurator
      component={TextInput}
      codeTemplate={codeTemplate}
      multiline
      previewBackground={theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white}
      props={[
        { name: 'placeholder', type: 'string', initialValue: 'Credit card number' },
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
          initialValue: '',
        },
        {
          name: 'variant',
          type: 'select',
          data: [
            { label: 'default', value: 'default' },
            { label: 'filled', value: 'filled' },
            { label: 'unstyled', value: 'unstyled' },
          ],
          initialValue: 'default',
          defaultValue: 'default',
        },
        { name: 'radius', type: 'size', initialValue: 'sm', defaultValue: 'sm' },
        { name: 'disabled', type: 'boolean', initialValue: false, defaultValue: false },
        {
          name: 'required',
          type: 'boolean',
          initialValue: true,
          defaultValue: false,
        },
      ]}
    />
  );
}
