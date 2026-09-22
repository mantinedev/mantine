import { FileTextIcon, FolderOpenIcon, FolderSimpleIcon } from '@phosphor-icons/react';
import { Button, Group, RenderTreeNodePayload, Tree, useTree } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import { data, dataCode } from './data';

const code = `
import { FileTextIcon, FolderOpenIcon, FolderSimpleIcon } from '@phosphor-icons/react';
import { Button, Group, RenderTreeNodePayload, Tree, useTree } from '@mantine/core';
import { data } from './data';

function Leaf({ node, expanded, hasChildren, elementProps }: RenderTreeNodePayload) {
  return (
    <Group gap={6} {...elementProps}>
      {hasChildren ? (
        expanded ? (
          <FolderOpenIcon size={14} style={{ opacity: 0.75 }} />
        ) : (
          <FolderSimpleIcon size={14} style={{ opacity: 0.75 }} />
        )
      ) : (
        <FileTextIcon size={14} style={{ opacity: 0.75 }} />
      )}
      <span>{node.label}</span>
    </Group>
  );
}

function Demo() {
  const store = useTree();

  return (
    <>
      <Tree data={data} store={store} withLines renderNode={(payload) => <Leaf {...payload} />} />
      <Group mt="md">
        <Button onClick={() => store.expandAllNodes()}>Expand all</Button>
        <Button onClick={() => store.collapseAllNodes()}>Collapse all</Button>
      </Group>
    </>
  );
}
`;

function Leaf({ node, expanded, hasChildren, elementProps }: RenderTreeNodePayload) {
  return (
    <Group gap={6} {...elementProps}>
      {hasChildren ? (
        expanded ? (
          <FolderOpenIcon size={14} style={{ opacity: 0.75 }} />
        ) : (
          <FolderSimpleIcon size={14} style={{ opacity: 0.75 }} />
        )
      ) : (
        <FileTextIcon size={14} style={{ opacity: 0.75 }} />
      )}
      <span>{node.label}</span>
    </Group>
  );
}

function Demo() {
  const store = useTree();

  return (
    <>
      <Tree data={data} store={store} withLines renderNode={(payload) => <Leaf {...payload} />} />
      <Group mt="md">
        <Button onClick={() => store.expandAllNodes()}>Expand all</Button>
        <Button onClick={() => store.collapseAllNodes()}>Collapse all</Button>
      </Group>
    </>
  );
}

export const controller: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { fileName: 'Demo.tsx', language: 'tsx', code },
    { fileName: 'data.ts', language: 'tsx', code: dataCode },
  ],
};
