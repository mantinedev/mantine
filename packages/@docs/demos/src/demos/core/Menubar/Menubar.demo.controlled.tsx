import { useState } from 'react';
import { Button, Group, Menu, Menubar, Stack } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import { Button, Group, Menu, Menubar, Stack } from '@mantine/core';

function Demo() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Stack>
      <Group>
        <Button variant="default" onClick={() => setOpenIndex(0)}>Open File</Button>
        <Button variant="default" onClick={() => setOpenIndex(1)}>Open Edit</Button>
        <Button variant="default" onClick={() => setOpenIndex(null)}>Close all</Button>
      </Group>

      <Menubar openIndex={openIndex} onOpenChange={setOpenIndex}>
        <Menubar.Menu width={220}>
          <Menubar.Target>File</Menubar.Target>
          <Menubar.Dropdown>
            <Menu.Item>New file</Menu.Item>
            <Menu.Item>Save</Menu.Item>
          </Menubar.Dropdown>
        </Menubar.Menu>

        <Menubar.Menu width={220}>
          <Menubar.Target>Edit</Menubar.Target>
          <Menubar.Dropdown>
            <Menu.Item>Undo</Menu.Item>
            <Menu.Item>Redo</Menu.Item>
          </Menubar.Dropdown>
        </Menubar.Menu>
      </Menubar>
    </Stack>
  );
}
`;

function Demo() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Stack>
      <Group>
        <Button variant="default" onClick={() => setOpenIndex(0)}>
          Open File
        </Button>
        <Button variant="default" onClick={() => setOpenIndex(1)}>
          Open Edit
        </Button>
        <Button variant="default" onClick={() => setOpenIndex(null)}>
          Close all
        </Button>
      </Group>

      <Menubar openIndex={openIndex} onOpenChange={setOpenIndex}>
        <Menubar.Menu width={220}>
          <Menubar.Target>File</Menubar.Target>
          <Menubar.Dropdown>
            <Menu.Item>New file</Menu.Item>
            <Menu.Item>Save</Menu.Item>
          </Menubar.Dropdown>
        </Menubar.Menu>

        <Menubar.Menu width={220}>
          <Menubar.Target>Edit</Menubar.Target>
          <Menubar.Dropdown>
            <Menu.Item>Undo</Menu.Item>
            <Menu.Item>Redo</Menu.Item>
          </Menubar.Dropdown>
        </Menubar.Menu>
      </Menubar>
    </Stack>
  );
}

export const controlled: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
