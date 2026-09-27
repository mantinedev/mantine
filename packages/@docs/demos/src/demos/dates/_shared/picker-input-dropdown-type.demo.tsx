import { Stack } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const getCode = (name: string) => `
import { Stack } from '@mantine/core';
import { ${name} } from '@mantine/dates';

function Demo() {
  return (
    <Stack>
      <${name} dropdownType="drawer" label="Drawer" placeholder="Pick date" />
      <${name} dropdownType="modal" label="Modal" placeholder="Pick date" />
      <${name} dropdownType="popover" label="Popover" placeholder="Pick date" />
      <${name}
        dropdownType={{ base: 'drawer', 600: 'popover' }}
        label="Drawer below 600px, popover above"
        placeholder="Pick date"
      />
    </Stack>
  );
}
`;

function getDemo(Component: React.FC<any>) {
  return () => (
    <Stack>
      <Component dropdownType="drawer" label="Drawer" placeholder="Pick date" />
      <Component dropdownType="modal" label="Modal" placeholder="Pick date" />
      <Component dropdownType="popover" label="Popover" placeholder="Pick date" />
      <Component
        dropdownType={{ base: 'drawer', 600: 'popover' }}
        label="Drawer below 600px, popover above"
        placeholder="Pick date"
      />
    </Stack>
  );
}

export function getPickerInputDropdownTypeDemo(Component: React.FC<any>): MantineDemo {
  return {
    type: 'code',
    centered: true,
    maxWidth: 400,
    code: getCode(Component.displayName!.replace('@mantine/dates/', '')),
    component: getDemo(Component),
  };
}
