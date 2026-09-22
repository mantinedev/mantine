import { FileTextIcon, FolderOpenIcon, FolderSimpleIcon } from '@phosphor-icons/react';
import {
  Button,
  Checkbox,
  getTreeExpandedState,
  Group,
  RenderTreeNodePayload,
  Tree,
  useTree,
} from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import { data, dataCode } from './data';

const code = `
import { FileTextIcon, FolderOpenIcon, FolderSimpleIcon } from '@phosphor-icons/react';
import {
  Button,
  Checkbox,
  getTreeExpandedState,
  Group,
  RenderTreeNodePayload,
  Tree,
  useTree,
} from '@mantine/core';
import { data } from './data';

const renderTreeNode = ({
  node,
  expanded,
  hasChildren,
  isRoot,
  elementProps,
  store,
}: RenderTreeNodePayload) => {
  const checked = store.isNodeChecked(node.value);
  const indeterminate = store.isNodeIndeterminate(node.value);

  return (
    <Group gap="xs" {...elementProps}>
      <Checkbox.Indicator
        checked={checked}
        size="xs"
        indeterminate={indeterminate}
        mis={isRoot ? undefined : 2}
        onClick={() => (!checked ? store.checkNode(node.value) : store.uncheckNode(node.value))}
      />

      <Group gap={6} onClick={() => store.toggleExpanded(node.value)}>
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
    </Group>
  );
};

function Demo() {
  const store = useTree({
    initialExpandedState: getTreeExpandedState(data, '*'),
    initialCheckedState: [
      'node_modules',
      'node_modules/@mantine/core/index.d.ts',
      'node_modules/@mantine/form/package.json',
    ],
  });

  return (
    <>
      <Group mb="md">
        <Button onClick={() => store.checkAllNodes()}>Check all</Button>
        <Button onClick={() => store.uncheckAllNodes()}>Uncheck all</Button>
      </Group>

      <Tree
        store={store}
        data={data}
        levelOffset={23}
        expandOnClick={false}
        withLines
        renderNode={renderTreeNode}
      />
    </>
  );
}
`;

const renderTreeNode = ({
  node,
  expanded,
  hasChildren,
  isRoot,
  elementProps,
  store,
}: RenderTreeNodePayload) => {
  const checked = store.isNodeChecked(node.value);
  const indeterminate = store.isNodeIndeterminate(node.value);

  return (
    <Group gap="xs" {...elementProps}>
      <Checkbox.Indicator
        checked={checked}
        size="xs"
        indeterminate={indeterminate}
        mis={isRoot ? undefined : 2}
        onClick={() => (!checked ? store.checkNode(node.value) : store.uncheckNode(node.value))}
      />

      <Group gap={6} onClick={() => store.toggleExpanded(node.value)}>
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
    </Group>
  );
};

function Demo() {
  const store = useTree({
    initialExpandedState: getTreeExpandedState(data, '*'),
    initialCheckedState: [
      'node_modules',
      'node_modules/@mantine/core/index.d.ts',
      'node_modules/@mantine/form/package.json',
    ],
  });

  return (
    <>
      <Group mb="md">
        <Button onClick={() => store.checkAllNodes()}>Check all</Button>
        <Button onClick={() => store.uncheckAllNodes()}>Uncheck all</Button>
      </Group>

      <Tree
        store={store}
        data={data}
        levelOffset={23}
        expandOnClick={false}
        withLines
        renderNode={renderTreeNode}
      />
    </>
  );
}

export const checkAllNodes: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { fileName: 'Demo.tsx', language: 'tsx', code },
    { fileName: 'data.ts', language: 'tsx', code: dataCode },
  ],
};
