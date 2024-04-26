import { Avatar, Indicator, IndicatorProps } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

function Demo(props: IndicatorProps) {
  return (
    <Indicator {...props}>
      <Avatar
        size="lg"
        radius="sm"
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png"
      />
    </Indicator>
  );
}

const code = `
import { Indicator, Avatar } from '@mantine/core';

function Demo() {
  return (
    <Indicator{{props}}>
      <Avatar
        size="lg"
        radius="sm"
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png"
      />
    </Indicator>
  );
}
`;

export const configurator: MantineDemo = {
  type: 'configurator',
  component: Demo,
  code,
  centered: true,
  controls: [
    { prop: 'color', type: 'color', initialValue: 'blue', libraryValue: 'blue' },
    {
      prop: 'position',
      type: 'select',
      data: [
        { value: 'top-start', label: 'top-start' },
        { value: 'top-center', label: 'top-center' },
        { value: 'top-end', label: 'top-end' },
        { value: 'middle-start', label: 'middle-start' },
        { value: 'middle-center', label: 'middle-center' },
        { value: 'middle-end', label: 'middle-end' },
        { value: 'bottom-start', label: 'bottom-start' },
        { value: 'bottom-center', label: 'bottom-center' },
        { value: 'bottom-end', label: 'bottom-end' },
      ],
      initialValue: 'top-end',
      libraryValue: 'top-end',
    },
    { prop: 'radius', type: 'size', initialValue: 'xl', libraryValue: 'xl' },
    { prop: 'size', type: 'number', initialValue: 10, libraryValue: 10, step: 1, min: 6, max: 30 },
    { prop: 'disabled', type: 'boolean', initialValue: false, libraryValue: false },
    { prop: 'withBorder', type: 'boolean', initialValue: false, libraryValue: false },
    { prop: 'processing', type: 'boolean', initialValue: false, libraryValue: false },
  ],
};
