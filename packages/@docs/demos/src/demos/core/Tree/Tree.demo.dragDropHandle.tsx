import { useState } from 'react';
import {
  DotsSixVerticalIcon,
  FileTextIcon,
  FolderOpenIcon,
  FolderSimpleIcon,
} from '@phosphor-icons/react';
import { Group, moveTreeNode, RenderTreeNodePayload, Tree, TreeNodeData } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import classes from './Tree.demo.dragDropHandle.module.css';

const cssCode = `.handle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 22px;
  padding: 0;
  border: 0;
  background: transparent;
  border-radius: var(--mantine-radius-sm);
  color: light-dark(var(--mantine-color-gray-5), var(--mantine-color-dark-3));
  cursor: grab;
  transition:
    background-color 100ms ease,
    color 100ms ease;
}

.handle:hover {
  background-color: light-dark(var(--mantine-color-gray-2), var(--mantine-color-dark-5));
  color: light-dark(var(--mantine-color-gray-9), var(--mantine-color-dark-0));
}

.handle:active {
  cursor: grabbing;
  background-color: light-dark(var(--mantine-color-gray-3), var(--mantine-color-dark-4));
}`;

const code = `
import { useState } from 'react';
import {
  DotsSixVerticalIcon,
  FileTextIcon,
  FolderOpenIcon,
  FolderSimpleIcon,
} from '@phosphor-icons/react';
import { Group, moveTreeNode, RenderTreeNodePayload, Tree, TreeNodeData } from '@mantine/core';
import classes from './Demo.module.css';

const data: TreeNodeData[] = [
  {
    label: 'Pages',
    value: 'pages',
    children: [
      { label: 'index.tsx', value: 'pages/index.tsx' },
      { label: 'about.tsx', value: 'pages/about.tsx' },
    ],
  },
  {
    label: 'Components',
    value: 'components',
    children: [
      { label: 'Header.tsx', value: 'components/Header.tsx' },
      { label: 'Footer.tsx', value: 'components/Footer.tsx' },
    ],
  },
  { label: 'package.json', value: 'package.json' },
];

function Leaf({
  node,
  expanded,
  hasChildren,
  elementProps,
  dragHandleProps,
}: RenderTreeNodePayload) {
  return (
    <Group gap={4} {...elementProps}>
      <button
        type="button"
        {...dragHandleProps}
        className={classes.handle}
        aria-label="Drag to reorder"
      >
        <DotsSixVerticalIcon size={14} weight="bold" />
      </button>
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
  const [treeData, setTreeData] = useState(data);

  return (
    <Tree
      data={treeData}
      withDragHandle
      withLines
      onDragDrop={(payload) =>
        setTreeData((current) => moveTreeNode(current, payload))
      }
      renderNode={(payload) => <Leaf {...payload} />}
    />
  );
}
`;

const demoData: TreeNodeData[] = [
  {
    label: 'Pages',
    value: 'pages',
    children: [
      { label: 'index.tsx', value: 'pages/index.tsx' },
      { label: 'about.tsx', value: 'pages/about.tsx' },
    ],
  },
  {
    label: 'Components',
    value: 'components',
    children: [
      { label: 'Header.tsx', value: 'components/Header.tsx' },
      { label: 'Footer.tsx', value: 'components/Footer.tsx' },
    ],
  },
  { label: 'package.json', value: 'package.json' },
];

function Leaf({
  node,
  expanded,
  hasChildren,
  elementProps,
  dragHandleProps,
}: RenderTreeNodePayload) {
  return (
    <Group gap={4} {...elementProps}>
      <button
        type="button"
        {...dragHandleProps}
        className={classes.handle}
        aria-label="Drag to reorder"
      >
        <DotsSixVerticalIcon size={14} weight="bold" />
      </button>
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
  const [treeData, setTreeData] = useState(demoData);

  return (
    <Tree
      data={treeData}
      withDragHandle
      withLines
      onDragDrop={(payload) => setTreeData((current) => moveTreeNode(current, payload))}
      renderNode={(payload) => <Leaf {...payload} />}
    />
  );
}

export const dragDropHandle: MantineDemo = {
  type: 'code',
  component: Demo,
  centered: true,
  maxWidth: 340,
  code: [
    { fileName: 'Demo.tsx', language: 'tsx', code },
    { fileName: 'Demo.module.css', language: 'scss', code: cssCode },
  ],
};
