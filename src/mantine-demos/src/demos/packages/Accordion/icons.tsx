import React from 'react';
import { BlendingModeIcon, MarginIcon, ShuffleIcon } from '@modulz/radix-icons';
import { ThemeIcon, Accordion, AccordionProps } from '@mantine/core';
import { baseAccordionMockdata } from './_mockdata';

const code = `
<Accordion disableIconRotation>
  <Accordion.Item
    label="Customization"
    icon={
      <ThemeIcon color="violet" variant="light">
        <BlendingModeIcon />
      </ThemeIcon>
    }
  >
    Colors, fonts, shadows and many other parts are customizable to fit your design needs
  </Accordion.Item>

  {/* ...other <Accordion.Item /> */}
</Accordion>
`;

export function IconsReplacementDemo(props: Partial<AccordionProps>) {
  return (
    <Accordion disableIconRotation {...props}>
      <Accordion.Item
        label={baseAccordionMockdata[0].label}
        icon={
          <ThemeIcon color="violet" variant="light" size={28} radius="xl">
            <BlendingModeIcon style={{ width: 14, height: 14 }} />
          </ThemeIcon>
        }
      >
        {baseAccordionMockdata[0].content}
      </Accordion.Item>

      <Accordion.Item
        label={baseAccordionMockdata[1].label}
        icon={
          <ThemeIcon color="orange" variant="light" size={28} radius="xl">
            <ShuffleIcon style={{ width: 14, height: 14 }} />
          </ThemeIcon>
        }
      >
        {baseAccordionMockdata[1].content}
      </Accordion.Item>

      <Accordion.Item
        label={baseAccordionMockdata[2].label}
        icon={
          <ThemeIcon color="blue" variant="light" size={28} radius="xl">
            <MarginIcon style={{ width: 14, height: 14 }} />
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
