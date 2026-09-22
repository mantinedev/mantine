import { Accordion, Button, Group, Text, useAccordion } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import { data, dataCode } from './_base';

const code = `
import { Accordion, Button, Group, Text, useAccordion } from '@mantine/core';
import { data } from './data';

function Demo() {
  const accordion = useAccordion({ multiple: true });

  const items = data.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control icon={item.emoji}>{item.value}</Accordion.Control>
      <Accordion.Panel>{item.description}</Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <>
      <Group justify="center" mb="md">
        <Button onClick={accordion.expandAll}>Expand all</Button>
        <Button variant="default" onClick={accordion.collapseAll}>
          Collapse all
        </Button>
        <Button variant="default" onClick={() => accordion.toggle('Bananas')}>
          Toggle bananas
        </Button>
      </Group>

      <Accordion controller={accordion} order={3}>
        {items}
      </Accordion>

      <Text ta="center" mt="md" size="sm" c="dimmed">
        Expanded: {accordion.getExpandedItems().join(', ') || 'none'}
      </Text>
    </>
  );
}
`;

function Demo() {
  const accordion = useAccordion({ multiple: true });

  const items = data.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control icon={item.emoji}>{item.value}</Accordion.Control>
      <Accordion.Panel>{item.description}</Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <>
      <Group justify="center" mb="md">
        <Button onClick={accordion.expandAll}>Expand all</Button>
        <Button variant="default" onClick={accordion.collapseAll}>
          Collapse all
        </Button>
        <Button variant="default" onClick={() => accordion.toggle('Bananas')}>
          Toggle bananas
        </Button>
      </Group>

      <Accordion controller={accordion} order={3}>
        {items}
      </Accordion>

      <Text ta="center" mt="md" size="sm" c="dimmed">
        Expanded: {accordion.getExpandedItems().join(', ') || 'none'}
      </Text>
    </>
  );
}

export const controller: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { fileName: 'Demo.tsx', code, language: 'tsx' },
    { fileName: 'data.ts', code: dataCode, language: 'tsx' },
  ],
  centered: true,
  maxWidth: 600,
};
