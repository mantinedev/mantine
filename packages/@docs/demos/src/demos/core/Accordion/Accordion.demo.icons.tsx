import { CameraIcon, ImageIcon, PrinterIcon } from '@phosphor-icons/react';
import { Accordion } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { ImageIcon, PrinterIcon, CameraIcon } from '@phosphor-icons/react';
import { Accordion } from '@mantine/core';

function Demo() {
  return (
    <Accordion variant="filled" radius="md" defaultValue="photos" order={3}>
      <Accordion.Item value="photos">
        <Accordion.Control
          icon={<ImageIcon size={22} color="var(--mantine-color-dimmed)" />}
        >
          Recent photos
        </Accordion.Control>
        <Accordion.Panel>Content</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="print">
        <Accordion.Control
          icon={<PrinterIcon size={22} color="var(--mantine-color-dimmed)" />}
        >
          Print photos
        </Accordion.Control>
        <Accordion.Panel>Content</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="camera">
        <Accordion.Control
          icon={<CameraIcon size={22} color="var(--mantine-color-dimmed)" />}
        >
          CameraIcon settings
        </Accordion.Control>
        <Accordion.Panel>Content</Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
}
`;

function Demo() {
  return (
    <Accordion variant="filled" radius="md" defaultValue="photos" order={3} mih={200}>
      <Accordion.Item value="photos">
        <Accordion.Control icon={<ImageIcon size={22} color="var(--mantine-color-dimmed)" />}>
          Recent photos
        </Accordion.Control>
        <Accordion.Panel>Content</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="print">
        <Accordion.Control icon={<PrinterIcon size={22} color="var(--mantine-color-dimmed)" />}>
          Print photos
        </Accordion.Control>
        <Accordion.Panel>Content</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="camera">
        <Accordion.Control icon={<CameraIcon size={22} color="var(--mantine-color-dimmed)" />}>
          CameraIcon settings
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
