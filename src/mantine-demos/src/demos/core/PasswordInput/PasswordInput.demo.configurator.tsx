import { MantineDemo } from '@mantine/ds';
import { PasswordInput } from '@mantine/core';

const codeTemplate = (props: string) => `
import { PasswordInput } from '@mantine/core';

function Demo() {
  return (
    <PasswordInput
     ${props}
    />
  );
}
`;

export const configurator: MantineDemo = {
  type: 'configurator',
  component: PasswordInput,
  codeTemplate,
  configuratorProps: { multiline: 3 },
  configurator: [
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
    { name: 'size', type: 'size', initialValue: 'sm', defaultValue: 'sm' },
    { name: 'disabled', type: 'boolean', initialValue: false, defaultValue: false },
    {
      name: 'withAsterisk',
      type: 'boolean',
      initialValue: true,
      defaultValue: false,
    },
  ],
};
