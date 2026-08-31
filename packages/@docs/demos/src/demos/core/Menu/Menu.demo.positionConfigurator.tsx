import { Menu, MenuProps } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import { FLOATING_ARROW_POSITION_DATA } from '../../../shared/floating-position-data';
import { DemoMenuItems } from './_menu-items';

function Wrapper(props: MenuProps) {
  return (
    <Menu opened trapFocus={false} {...props}>
      <DemoMenuItems />
    </Menu>
  );
}

const code = `
import { Menu } from '@mantine/core';

function Demo() {
  return (
    <Menu{{props}}>
      {/* Menu items */}
    </Menu>
  );
}
`;

export const positionConfigurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  centered: true,
  controls: [
    {
      prop: 'position',
      type: 'select',
      initialValue: 'bottom',
      libraryValue: 'bottom',
      data: [
        { label: 'bottom', value: 'bottom' },
        { label: 'bottom-start', value: 'bottom-start' },
        { label: 'bottom-end', value: 'bottom-end' },
        { label: 'top', value: 'top' },
        { label: 'top-start', value: 'top-start' },
        { label: 'top-end', value: 'top-end' },
        { label: 'left', value: 'left' },
        { label: 'left-start', value: 'left-start' },
        { label: 'left-end', value: 'left-end' },
        { label: 'right', value: 'right' },
        { label: 'right-start', value: 'right-start' },
        { label: 'right-end', value: 'right-end' },
      ],
    },
    {
      prop: 'offset',
      type: 'number',
      initialValue: 5,
      libraryValue: 5,
      max: 20,
      min: -20,
    },
    {
      prop: 'withArrow',
      type: 'boolean',
      initialValue: false,
      libraryValue: false,
    },
    {
      prop: 'arrowPosition',
      type: 'select',
      data: FLOATING_ARROW_POSITION_DATA,
      initialValue: 'side',
      libraryValue: 'side',
    },
  ],
};
