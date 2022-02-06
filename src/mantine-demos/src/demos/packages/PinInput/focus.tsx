import { PinInput } from '@mantine/labs';

const codeTemplate = (props: string) => `<PasswordInput
 ${props}
/>`;

export const focus: MantineDemo = {
  type: 'configurator',
  component: PinInput,
  codeTemplate,
  configuratorProps: { multiline: true },
  configurator: [{ name: 'manageFocus', type: 'boolean', initialValue: true }],
};
