import { Menu, Menubar } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Menu, Menubar } from '@mantine/core';

function Demo() {
  return (
    <Menubar>
      <Menubar.Menu width={220}>
        <Menubar.Target>View</Menubar.Target>
        <Menubar.Dropdown>
          <Menu.CheckboxItem defaultChecked>Show sidebar</Menu.CheckboxItem>
          <Menu.CheckboxItem>Show status bar</Menu.CheckboxItem>
          <Menu.Divider />
          <Menu.Label>Appearance</Menu.Label>
          <Menu.RadioGroup defaultValue="comfortable">
            <Menu.RadioItem value="compact">Compact</Menu.RadioItem>
            <Menu.RadioItem value="comfortable">Comfortable</Menu.RadioItem>
            <Menu.RadioItem value="spacious">Spacious</Menu.RadioItem>
          </Menu.RadioGroup>
        </Menubar.Dropdown>
      </Menubar.Menu>

      <Menubar.Menu width={220}>
        <Menubar.Target>Window</Menubar.Target>
        <Menubar.Dropdown>
          <Menu.Item>Minimize</Menu.Item>
          <Menu.Item>Zoom</Menu.Item>
          <Menu.Item>Bring all to front</Menu.Item>
        </Menubar.Dropdown>
      </Menubar.Menu>
    </Menubar>
  );
}
`;

function Demo() {
  return (
    <Menubar>
      <Menubar.Menu width={220}>
        <Menubar.Target>View</Menubar.Target>
        <Menubar.Dropdown>
          <Menu.CheckboxItem defaultChecked>Show sidebar</Menu.CheckboxItem>
          <Menu.CheckboxItem>Show status bar</Menu.CheckboxItem>
          <Menu.Divider />
          <Menu.Label>Appearance</Menu.Label>
          <Menu.RadioGroup defaultValue="comfortable">
            <Menu.RadioItem value="compact">Compact</Menu.RadioItem>
            <Menu.RadioItem value="comfortable">Comfortable</Menu.RadioItem>
            <Menu.RadioItem value="spacious">Spacious</Menu.RadioItem>
          </Menu.RadioGroup>
        </Menubar.Dropdown>
      </Menubar.Menu>

      <Menubar.Menu width={220}>
        <Menubar.Target>Window</Menubar.Target>
        <Menubar.Dropdown>
          <Menu.Item>Minimize</Menu.Item>
          <Menu.Item>Zoom</Menu.Item>
          <Menu.Item>Bring all to front</Menu.Item>
        </Menubar.Dropdown>
      </Menubar.Menu>
    </Menubar>
  );
}

export const selectable: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
