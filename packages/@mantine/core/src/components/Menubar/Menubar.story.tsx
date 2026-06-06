import { useState } from 'react';
import { DirectionProvider } from '../../core';
import { Menu } from '../Menu';
import { Menubar } from './Menubar';

export default { title: 'Menubar' };

function FileMenu() {
  return (
    <Menubar.Menu>
      <Menubar.Target>File</Menubar.Target>
      <Menubar.Dropdown>
        <Menu.Item>New file</Menu.Item>
        <Menu.Item>New window</Menu.Item>
        <Menu.Divider />
        <Menu.Sub>
          <Menu.Sub.Target>
            <Menu.Sub.Item>Open recent</Menu.Sub.Item>
          </Menu.Sub.Target>
          <Menu.Sub.Dropdown>
            <Menu.Item>project-a</Menu.Item>
            <Menu.Item>project-b</Menu.Item>
            <Menu.Item>project-c</Menu.Item>
          </Menu.Sub.Dropdown>
        </Menu.Sub>
        <Menu.Divider />
        <Menu.Item>Save</Menu.Item>
        <Menu.Item>Save as…</Menu.Item>
      </Menubar.Dropdown>
    </Menubar.Menu>
  );
}

function EditMenu() {
  return (
    <Menubar.Menu>
      <Menubar.Target>Edit</Menubar.Target>
      <Menubar.Dropdown>
        <Menu.Item>Undo</Menu.Item>
        <Menu.Item>Redo</Menu.Item>
        <Menu.Divider />
        <Menu.Item>Cut</Menu.Item>
        <Menu.Item>Copy</Menu.Item>
        <Menu.Item>Paste</Menu.Item>
      </Menubar.Dropdown>
    </Menubar.Menu>
  );
}

function ViewMenu() {
  return (
    <Menubar.Menu>
      <Menubar.Target>View</Menubar.Target>
      <Menubar.Dropdown>
        <Menu.CheckboxItem defaultChecked>Show sidebar</Menu.CheckboxItem>
        <Menu.CheckboxItem>Show status bar</Menu.CheckboxItem>
        <Menu.Divider />
        <Menu.RadioGroup defaultValue="comfortable">
          <Menu.RadioItem value="compact">Compact</Menu.RadioItem>
          <Menu.RadioItem value="comfortable">Comfortable</Menu.RadioItem>
        </Menu.RadioGroup>
      </Menubar.Dropdown>
    </Menubar.Menu>
  );
}

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <Menubar>
        <FileMenu />
        <EditMenu />
        <ViewMenu />
      </Menubar>
    </div>
  );
}

export function HoverTrigger() {
  return (
    <div style={{ padding: 40 }}>
      <Menubar trigger="hover">
        <FileMenu />
        <EditMenu />
        <ViewMenu />
      </Menubar>
    </div>
  );
}

export function NoLoop() {
  return (
    <div style={{ padding: 40 }}>
      <Menubar loop={false}>
        <FileMenu />
        <EditMenu />
        <ViewMenu />
      </Menubar>
    </div>
  );
}

export function Controlled() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div style={{ padding: 40 }}>
      <div style={{ marginBottom: 20 }}>Open index: {String(openIndex)}</div>
      <Menubar openIndex={openIndex} onOpenChange={setOpenIndex}>
        <FileMenu />
        <EditMenu />
        <ViewMenu />
      </Menubar>
    </div>
  );
}

export function Rtl() {
  return (
    <DirectionProvider initialDirection="rtl">
      <div dir="rtl" style={{ padding: 40 }}>
        <Menubar>
          <FileMenu />
          <EditMenu />
          <ViewMenu />
        </Menubar>
      </div>
    </DirectionProvider>
  );
}

export function Unstyled() {
  return (
    <div style={{ padding: 40 }}>
      <Menubar unstyled>
        <FileMenu />
        <EditMenu />
        <ViewMenu />
      </Menubar>
    </div>
  );
}
