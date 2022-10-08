import React from 'react';
import { AccordionProps } from '@mantine/core';
import { MantineDemo } from '@mantine/ds';
import { BaseDemo } from './_base';

function Wrapper(props: Partial<AccordionProps>) {
  return <BaseDemo {...props} defaultValue="customization" />;
}

const codeTemplate = (props: string) => `
import { Accordion } from '@mantine/core';

function Demo() {
  return (
    <Accordion${props} defaultValue="customization">
      <Accordion.Item value="customization">
        <Accordion.Control>Customization</Accordion.Control>
        <Accordion.Panel>Colors, fonts, shadows and many other parts are customizable to fit your design needs</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="flexibility">
        <Accordion.Control>Flexibility</Accordion.Control>
        <Accordion.Panel>Configure components appearance and behavior with vast amount of settings or overwrite any part of component styles</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="focus-ring">
        <Accordion.Control>No annoying focus ring</Accordion.Control>
        <Accordion.Panel>With new :focus-visible pseudo-class focus ring appears only when user navigates with keyboard</Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
}
`;

export const configurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  configurator: [
    {
      name: 'variant',
      type: 'select',
      initialValue: 'default',
      defaultValue: 'default',
      data: [
        { label: 'Default', value: 'default' },
        { label: 'Contained', value: 'contained' },
        { label: 'Filled', value: 'filled' },
        { label: 'Separated', value: 'separated' },
      ],
    },
    { name: 'radius', type: 'size', defaultValue: 'sm', initialValue: 'sm' },
    {
      name: 'chevronPosition',
      type: 'segmented',
      data: [
        { label: 'Left', value: 'left' },
        { label: 'Right', value: 'right' },
      ],
      initialValue: 'right',
      defaultValue: 'right',
    },
    { name: 'disableChevronRotation', type: 'boolean', initialValue: false, defaultValue: false },
  ],
};
