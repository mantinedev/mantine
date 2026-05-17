import { useState } from 'react';
import { FileTextIcon, FolderOpenIcon, FolderSimpleIcon } from '@phosphor-icons/react';
import { Group, moveTreeNode, RenderTreeNodePayload, Tree, TreeNodeData } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import { FileTextIcon, FolderOpenIcon, FolderSimpleIcon } from '@phosphor-icons/react';
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
    label: 'Components (locked)',
    value: 'components',
    children: [
      { label: 'Header.tsx', value: 'components/Header.tsx' },
      { label: 'Footer.tsx', value: 'components/Footer.tsx' },
    ],
  },
  { label: 'package.json', value: 'package.json' },
];

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
  const [treeData, setTreeData] = useState(data);

  return (
    <Tree
      data={treeData}
      withLines
      // Forbid dropping into or onto "components" branch
      allowDrop={({ draggedNode, targetNode, position }) => {
        if (draggedNode === 'components' || draggedNode.startsWith('components/')) {
          return false;
        }

        if (targetNode === 'components' && position === 'inside') {
          return false;
        }

        return !targetNode.startsWith('components/');
      }}
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
    label: 'Components (locked)',
    value: 'components',
    children: [
      { label: 'Header.tsx', value: 'components/Header.tsx' },
      { label: 'Footer.tsx', value: 'components/Footer.tsx' },
    ],
  },
  { label: 'package.json', value: 'package.json' },
];

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
  const [treeData, setTreeData] = useState(demoData);

  return (
    <Tree
      data={treeData}
      withLines
      allowDrop={({ draggedNode, targetNode, position }) => {
        if (draggedNode === 'components' || draggedNode.startsWith('components/')) {
          return false;
        }

        if (targetNode === 'components' && position === 'inside') {
          return false;
        }

        return !targetNode.startsWith('components/');
      }}
      onDragDrop={(payload) => setTreeData((current) => moveTreeNode(current, payload))}
      renderNode={(payload) => <Leaf {...payload} />}
    />
  );
}

export const dragDropAllow: MantineDemo = {
  type: 'code',
  component: Demo,
  centered: true,
  maxWidth: 340,
  code,
};
