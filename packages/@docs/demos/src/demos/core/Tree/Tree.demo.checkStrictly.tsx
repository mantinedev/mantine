import { FileTextIcon, FolderOpenIcon, FolderSimpleIcon } from '@phosphor-icons/react';
import { Checkbox, Group, RenderTreeNodePayload, Tree, useTree } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import { data, dataCode } from './data';

const code = `
import { FileTextIcon, FolderOpenIcon, FolderSimpleIcon } from '@phosphor-icons/react';
import { Checkbox, Group, RenderTreeNodePayload, Tree, useTree } from '@mantine/core';
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

  return (
    <Group gap="xs" {...elementProps}>
      <Checkbox.Indicator
        checked={checked}
        size="xs"
        mis={isRoot ? undefined : 2}
        onClick={() =>
          checked
            ? store.uncheckNode(node.value)
            : store.checkNode(node.value)
        }
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
  const store = useTree({ checkStrictly: true });
  return (
    <Tree
      data={data}
      store={store}
      levelOffset={23}
      expandOnClick={false}
      expandOnSpace={false}
      checkOnSpace
      withLines
      renderNode={renderTreeNode}
    />
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

  return (
    <Group gap="xs" {...elementProps}>
      <Checkbox.Indicator
        checked={checked}
        size="xs"
        mis={isRoot ? undefined : 2}
        onClick={() => (checked ? store.uncheckNode(node.value) : store.checkNode(node.value))}
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
  const store = useTree({ checkStrictly: true });
  return (
    <Tree
      data={data}
      store={store}
      levelOffset={23}
      expandOnClick={false}
      expandOnSpace={false}
      checkOnSpace
      withLines
      renderNode={renderTreeNode}
    />
  );
}

export const checkStrictly: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { fileName: 'Demo.tsx', language: 'tsx', code },
    { fileName: 'data.ts', language: 'tsx', code: dataCode },
  ],
};
