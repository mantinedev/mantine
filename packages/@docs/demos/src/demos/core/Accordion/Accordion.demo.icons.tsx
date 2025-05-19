import { IconCameraSelfie, IconPhoto, IconPrinter } from '@tabler/icons-react';
import { Accordion } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { IconPhoto, IconPrinter, IconCameraSelfie } from '@tabler/icons-react';
import { Accordion } from '@mantine/core';

function Demo() {
  return (
    <Accordion variant="filled" radius="md" defaultValue="photos">
      <Accordion.Item value="photos">
        <Accordion.Control
          icon={<IconPhoto size={22} stroke={1.5} color="var(--mantine-color-dimmed)" />}
        >
          Recent photos
        </Accordion.Control>
        <Accordion.Panel>Content</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="print">
        <Accordion.Control
          icon={<IconPrinter size={22} stroke={1.5} color="var(--mantine-color-dimmed)" />}
        >
          Print photos
        </Accordion.Control>
        <Accordion.Panel>Content</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="camera">
        <Accordion.Control
          icon={<IconCameraSelfie size={22} stroke={1.5} color="var(--mantine-color-dimmed)" />}
        >
          Camera settings
        </Accordion.Control>
        <Accordion.Panel>Content</Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
}
`;

function Demo() {
  return (
    <Accordion variant="filled" radius="md" defaultValue="photos" mih={200}>
      <Accordion.Item value="photos">
        <Accordion.Control
          icon={<IconPhoto size={22} stroke={1.5} color="var(--mantine-color-dimmed)" />}
        >
          Recent photos
        </Accordion.Control>
        <Accordion.Panel>Content</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="print">
        <Accordion.Control
          icon={<IconPrinter size={22} stroke={1.5} color="var(--mantine-color-dimmed)" />}
        >
          Print photos
        </Accordion.Control>
        <Accordion.Panel>Content</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="camera">
        <Accordion.Control
          icon={<IconCameraSelfie size={22} stroke={1.5} color="var(--mantine-color-dimmed)" />}
        >
          Camera settings
        </Accordion.Control>
        <Accordion.Panel>Content</Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
}

export const icons: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  maxWidth: 400,
  centered: true,
  defaultExpanded: false,
};
