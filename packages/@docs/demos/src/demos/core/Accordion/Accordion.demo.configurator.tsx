import { Accordion, AccordionProps } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import { groceries } from './_base';

const code = `
import { Accordion } from '@mantine/core';

function Demo() {
  // See groceries data above
  const items = groceries.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control icon={item.emoji}>{item.value}</Accordion.Control>
      <Accordion.Panel>{item.description}</Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Accordion{{props}} defaultValue="Apples">
      {items}
    </Accordion>
  );
}
`;

function Demo(props: AccordionProps) {
  const items = groceries.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control icon={item.emoji}>{item.value}</Accordion.Control>
      <Accordion.Panel>{item.description}</Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Accordion {...props} defaultValue="Apples">
      {items}
    </Accordion>
  );
}

export const configurator: MantineDemo = {
  type: 'configurator',
  component: Demo,
  code,
  controls: [
    {
      prop: 'variant',
      type: 'select',
      initialValue: 'default',
      libraryValue: 'default',
      data: [
        { label: 'Default', value: 'default' },
        { label: 'Contained', value: 'contained' },
        { label: 'Filled', value: 'filled' },
        { label: 'Separated', value: 'separated' },
      ],
    },
    { prop: 'radius', type: 'size', libraryValue: 'sm', initialValue: 'sm' },
    {
      prop: 'chevronPosition',
      type: 'segmented',
      data: [
        { label: 'Left', value: 'left' },
        { label: 'Right', value: 'right' },
      ],
      initialValue: 'right',
      libraryValue: 'right',
    },
    { prop: 'disableChevronRotation', type: 'boolean', initialValue: false, libraryValue: false },
  ],
};
