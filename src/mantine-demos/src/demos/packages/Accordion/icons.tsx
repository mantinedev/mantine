import React from 'react';
import { Palette, CircleDashed, Bulb } from 'tabler-icons-react';
import { ThemeIcon, Accordion, AccordionProps } from '@mantine/core';
import { baseAccordionMockdata } from './_mockdata';

const code = `
import { ThemeIcon, Accordion } from '@mantine/core';
import { Palette } from 'tabler-icons-react';

function Demo() {
  return (
    <Accordion disableIconRotation>
      <Accordion.Item
        label="Customization"
        icon={
          <ThemeIcon color="violet" variant="light">
            <Palette size={14} />
          </ThemeIcon>
        }
      >
        Colors, fonts, shadows and many other parts are customizable to fit your design needs
      </Accordion.Item>

      {/* ...other <Accordion.Item /> */}
    </Accordion>
  )
}
`;

export function IconsReplacementDemo(props: Partial<AccordionProps>) {
  return (
    <Accordion disableIconRotation {...props}>
      <Accordion.Item
        label={baseAccordionMockdata[0].label}
        icon={
          <ThemeIcon color="violet" variant="light" size={28} radius="xl">
            <Palette size={14} />
          </ThemeIcon>
        }
      >
        {baseAccordionMockdata[0].content}
      </Accordion.Item>

      <Accordion.Item
        label={baseAccordionMockdata[1].label}
        icon={
          <ThemeIcon color="orange" variant="light" size={28} radius="xl">
            <CircleDashed size={14} />
          </ThemeIcon>
        }
      >
        {baseAccordionMockdata[1].content}
      </Accordion.Item>

      <Accordion.Item
        label={baseAccordionMockdata[2].label}
        icon={
          <ThemeIcon color="blue" variant="light" size={28} radius="xl">
            <Bulb size={14} />
          </ThemeIcon>
        }
      >
        {baseAccordionMockdata[2].content}
      </Accordion.Item>
    </Accordion>
  );
}

function Demo() {
  return (
    <div style={{ maxWidth: 540, marginLeft: 'auto', marginRight: 'auto' }}>
      <IconsReplacementDemo />
    </div>
  );
}

export const icons: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
