import { Menu, MenuProps } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

function Wrapper(props: MenuProps) {
  return (
    <Menu opened trapFocus={false} closeOnItemClick={false} width={240} shadow="md" {...props}>
      <Menu.Target>
        <button type="button">Toggle menu</button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item>View details</Menu.Item>
        <Menu.Item>Duplicate</Menu.Item>
        <Menu.Divider />
        <Menu.CheckboxItem defaultChecked>Pinned</Menu.CheckboxItem>
        <Menu.CheckboxItem>Archived</Menu.CheckboxItem>
        <Menu.Divider />
        <Menu.RadioGroup defaultValue="newest">
          <Menu.RadioItem value="newest">Newest first</Menu.RadioItem>
          <Menu.RadioItem value="oldest">Oldest first</Menu.RadioItem>
        </Menu.RadioGroup>
      </Menu.Dropdown>
    </Menu>
  );
}

const code = `
import { Menu } from '@mantine/core';

function Demo() {
  return (
    <Menu{{props}}>
      <Menu.Target>
        <button type="button">Toggle menu</button>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item>View details</Menu.Item>
        <Menu.Item>Duplicate</Menu.Item>
        <Menu.Divider />
        <Menu.CheckboxItem defaultChecked>Pinned</Menu.CheckboxItem>
        <Menu.CheckboxItem>Archived</Menu.CheckboxItem>
        <Menu.Divider />
        <Menu.RadioGroup defaultValue="newest">
          <Menu.RadioItem value="newest">Newest first</Menu.RadioItem>
          <Menu.RadioItem value="oldest">Oldest first</Menu.RadioItem>
        </Menu.RadioGroup>
      </Menu.Dropdown>
    </Menu>
  );
}
`;

export const alignItemsLabels: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  centered: true,
  controls: [
    {
      prop: 'alignItemsLabels',
      type: 'select',
      initialValue: 'with-indicators',
      libraryValue: 'with-indicators',
      data: [
        { label: 'with-indicators', value: 'with-indicators' },
        { label: 'all', value: 'all' },
        { label: 'none', value: 'none' },
      ],
    },
  ],
};
