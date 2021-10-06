import React from 'react';
import { BlendingModeIcon, MarginIcon, ShuffleIcon } from '@modulz/radix-icons';
import { ThemeIcon } from '../../ThemeIcon/ThemeIcon';
import { Accordion, AccordionProps } from '../Accordion';

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

  {/* ...other <Accordion.Item /> items */}
</Accordion>
`;

export function IconsReplacementDemo(props: Partial<AccordionProps>) {
  return (
    <Accordion disableIconRotation {...props}>
      <Accordion.Item
        label="Customization"
        icon={
          <ThemeIcon color="violet" variant="light">
            <BlendingModeIcon style={{ width: 14, height: 14 }} />
          </ThemeIcon>
        }
      >
        Colors, fonts, shadows and many other parts are customizable to fit your design needs
      </Accordion.Item>

      <Accordion.Item
        label="Flexibility"
        icon={
          <ThemeIcon color="orange" variant="light">
            <ShuffleIcon style={{ width: 14, height: 14 }} />
          </ThemeIcon>
        }
      >
        Configure components appearance and behavior with vast amount of settings or overwrite any
        part of component styles
      </Accordion.Item>

      <Accordion.Item
        label="No annoying focus ring"
        icon={
          <ThemeIcon color="blue" variant="light">
            <MarginIcon style={{ width: 14, height: 14 }} />
          </ThemeIcon>
        }
      >
        With new :focus-visible pseudo-class focus ring appears only when user navigates with
        keyboard
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
