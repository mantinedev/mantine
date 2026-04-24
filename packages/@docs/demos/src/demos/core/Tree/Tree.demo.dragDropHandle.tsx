import { useState } from 'react';
import { CaretDownIcon, DotsSixVerticalIcon } from '@phosphor-icons/react';
import { Group, moveTreeNode, RenderTreeNodePayload, Tree, TreeNodeData } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import { CaretDownIcon, DotsSixVerticalIcon } from '@phosphor-icons/react';
import { Group, moveTreeNode, RenderTreeNodePayload, Tree, TreeNodeData } from '@mantine/core';

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

function Leaf({ node, expanded, hasChildren, elementProps, dragHandleProps }: RenderTreeNodePayload) {
  return (
    <Group gap={4} {...elementProps}>
      <DotsSixVerticalIcon
        {...dragHandleProps}
        size={16}
        style={{ cursor: 'grab' }}
      />
      {hasChildren && (
        <CaretDownIcon
          size={18}
          style={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
        />
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
      <DotsSixVerticalIcon {...dragHandleProps} size={16} style={{ cursor: 'grab' }} />
      {hasChildren && (
        <CaretDownIcon
          size={18}
          style={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
        />
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
  code,
};
