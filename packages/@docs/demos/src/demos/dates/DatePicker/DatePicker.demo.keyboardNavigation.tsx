import { DatePicker } from '@mantine/dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { DatePicker } from '@mantine/dates';

function Demo() {
  return (
    <DatePicker 
      label="Pick date with keyboard navigation"
      placeholder="Use Ctrl/Cmd + Arrow keys"
      enableKeyboardNavigation
    />
  );
}
`;

function Demo() {
  return (
    <DatePicker 
      label="Pick date with keyboard navigation"
      placeholder="Use Ctrl/Cmd + Arrow keys"
      enableKeyboardNavigation
    />
  );
}

export const keyboardNavigation: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};