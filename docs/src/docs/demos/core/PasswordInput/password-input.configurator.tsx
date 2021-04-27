import React from 'react';
import { PasswordInput, useMantineTheme } from '@mantine/core';
import Configurator from '../../../../components/Configurator/Configurator';

const codeTemplate = (props: string) => `<PasswordInput
 ${props}
/>`;

export function PasswordInputConfigurator() {
  const theme = useMantineTheme();

  return (
    <Configurator
      component={PasswordInput}
      codeTemplate={codeTemplate}
      multiline
      previewBackground={theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white}
      props={[
        { name: 'placeholder', type: 'string', initialValue: 'Password' },
        {
          name: 'label',
          type: 'string',
          initialValue: 'Password',
        },
        {
          name: 'description',
          type: 'string',
          initialValue: 'Password must include at least one letter, number and special character',
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
