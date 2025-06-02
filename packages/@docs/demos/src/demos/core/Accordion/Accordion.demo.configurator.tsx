import { Accordion, AccordionProps } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import { data, dataCode } from './_base';

const code = `
import { Accordion } from '@mantine/core';
import { data } from './data';

function Demo() {
  const items = data.map((item) => (
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
  const items = data.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control icon={item.emoji}>{item.value}</Accordion.Control>
      <Accordion.Panel>{item.description}</Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Accordion {...props} defaultValue="Apples" mih={320}>
      {items}
    </Accordion>
  );
}

export const configurator: MantineDemo = {
  type: 'configurator',
  component: Demo,
  code: [
    { fileName: 'Demo.tsx', code, language: 'tsx' },
    { fileName: 'data.ts', code: dataCode, language: 'tsx' },
  ],
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
        { label: 'Unstyled', value: 'unstyled' },
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
    {
      prop: 'chevronIconSize',
      type: 'number',
      initialValue: 16,
      libraryValue: 16,
      min: 12,
      max: 25,
    },
    { prop: 'disableChevronRotation', type: 'boolean', initialValue: false, libraryValue: false },
  ],
};
