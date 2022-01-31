import React from 'react';
import { AccordionProps } from '@mantine/core';
import { BaseDemo } from './_base';

function Wrapper(props: Partial<AccordionProps>) {
  return <BaseDemo {...props} initialItem={0} />;
}

const codeTemplate = (props: string) => `<Accordion${props}>
  <Accordion.Item label="Customization">
    Colors, fonts, shadows and many other parts are customizable to fit your design needs
  </Accordion.Item>

  <Accordion.Item label="Flexibility">
    Configure components appearance and behavior with vast amount of settings or overwrite any part of component styles
  </Accordion.Item>

  <Accordion.Item label="No annoying focus ring">
    With new :focus-visible pseudo-class focus ring appears only when user navigates with keyboard
  </Accordion.Item>
</Accordion>`;

export const configurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  configurator: [
    {
      name: 'iconPosition',
      type: 'segmented',
      data: [
        { label: 'Left', value: 'left' },
        { label: 'Right', value: 'right' },
      ],
      initialValue: 'left',
      defaultValue: 'left',
    },
    {
      name: 'iconSize',
      type: 'number',
      initialValue: 24,
      defaultValue: 24,
      min: 10,
      max: 40,
      step: 4,
    },
    { name: 'offsetIcon', type: 'boolean', initialValue: true, defaultValue: true },
    { name: 'disableIconRotation', type: 'boolean', initialValue: false, defaultValue: false },
    { name: 'multiple', type: 'boolean', initialValue: false, defaultValue: false },
  ],
};
