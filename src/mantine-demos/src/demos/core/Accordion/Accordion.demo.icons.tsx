import React from 'react';
import { IconPhoto, IconPrinter, IconCameraSelfie } from '@tabler/icons';
import { MantineDemo } from '@mantine/ds';
import { Accordion, AccordionProps, useMantineTheme, Box } from '@mantine/core';

const code = `
import { IconPhoto, IconPrinter, IconCameraSelfie } from '@tabler/icons';
import { Accordion, useMantineTheme } from '@mantine/core';

function Demo() {
  const theme = useMantineTheme();
  const getColor = (color: string) => theme.colors[color][theme.colorScheme === 'dark' ? 5 : 7];

  return (
    <Accordion variant="contained">
      <Accordion.Item value="photos">
        <Accordion.Control icon={<IconPhoto size={20} color={getColor('red')} />}>
          Recent photos
        </Accordion.Control>
        <Accordion.Panel>Content</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="print">
        <Accordion.Control icon={<IconPrinter size={20} color={getColor('blue')} />}>
          Print photos
        </Accordion.Control>
        <Accordion.Panel>Content</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="camera">
        <Accordion.Control icon={<IconCameraSelfie size={20} color={getColor('teal')} />}>
          Camera settings
        </Accordion.Control>
        <Accordion.Panel>Content</Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
}
`;

export function IconsReplacementDemo(props: Partial<AccordionProps>) {
  const theme = useMantineTheme();
  const getColor = (color: string) => theme.colors[color][theme.colorScheme === 'dark' ? 5 : 7];

  return (
    <Accordion variant="contained" {...props}>
      <Accordion.Item value="photos">
        <Accordion.Control icon={<IconPhoto size={20} color={getColor('red')} />}>
          Recent photos
        </Accordion.Control>
        <Accordion.Panel>Content</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="print">
        <Accordion.Control icon={<IconPrinter size={20} color={getColor('blue')} />}>
          Print photos
        </Accordion.Control>
        <Accordion.Panel>Content</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="camera">
        <Accordion.Control icon={<IconCameraSelfie size={20} color={getColor('teal')} />}>
          Camera settings
        </Accordion.Control>
        <Accordion.Panel>Content</Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
}

function Demo() {
  return (
    <Box maw={400} mx="auto">
      <IconsReplacementDemo />
    </Box>
  );
}

export const icons: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
