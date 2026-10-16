import { Button, Group, ScrollArea, Text, Tree, useTree } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import { data, dataCode } from './data';

const code = `
import { Button, Group, ScrollArea, Text, Tree, useTree } from '@mantine/core';
import { data } from './data';

function Demo() {
  const store = useTree();
  const selected = store.getSelectedState()[0];
  const path = selected ? store.getNodePath(selected) : null;

  const reveal = (value: string) => {
    store.select(value);
    store.scrollTo(value, { behavior: 'smooth' });
  };

  return (
    <>
      <Group mb="md">
        <Button onClick={() => reveal('node_modules/@mantine/form/package.json')}>
          Show form/package.json
        </Button>
        <Button onClick={() => reveal('src/components/Button.tsx')}>Show Button.tsx</Button>
        <Button variant="default" onClick={() => store.collapseAllNodes()}>
          Collapse all
        </Button>
      </Group>

      <ScrollArea h={180}>
        <Tree data={data} store={store} />
      </ScrollArea>

      <Text size="sm" mt="md">
        Path: {path ? path.join(' / ') : 'none'}
      </Text>
    </>
  );
}
`;

function Demo() {
  const store = useTree();
  const selected = store.getSelectedState()[0];
  const path = selected ? store.getNodePath(selected) : null;

  const reveal = (value: string) => {
    store.select(value);
    store.scrollTo(value, { behavior: 'smooth' });
  };

  return (
    <>
      <Group mb="md">
        <Button onClick={() => reveal('node_modules/@mantine/form/package.json')}>
          Show form/package.json
        </Button>
        <Button onClick={() => reveal('src/components/Button.tsx')}>Show Button.tsx</Button>
        <Button variant="default" onClick={() => store.collapseAllNodes()}>
          Collapse all
        </Button>
      </Group>

      <ScrollArea h={180}>
        <Tree data={data} store={store} />
      </ScrollArea>

      <Text size="sm" mt="md">
        Path: {path ? path.join(' / ') : 'none'}
      </Text>
    </>
  );
}

export const scrollTo: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { fileName: 'Demo.tsx', language: 'tsx', code },
    { fileName: 'data.ts', language: 'tsx', code: dataCode },
  ],
};
