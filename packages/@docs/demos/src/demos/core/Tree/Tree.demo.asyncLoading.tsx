import { useState } from 'react';
import { FileTextIcon, FolderOpenIcon, FolderSimpleIcon } from '@phosphor-icons/react';
import {
  Group,
  mergeAsyncChildren,
  RenderTreeNodePayload,
  Tree,
  TreeNodeData,
  useTree,
} from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import { FileTextIcon, FolderOpenIcon, FolderSimpleIcon } from '@phosphor-icons/react';
import {
  Group,
  mergeAsyncChildren,
  RenderTreeNodePayload,
  Tree,
  TreeNodeData,
  useTree,
} from '@mantine/core';

const initialData: TreeNodeData[] = [
  { label: 'Documents', value: 'documents', hasChildren: true },
  { label: 'Photos', value: 'photos', hasChildren: true },
  { label: 'README.md', value: 'readme' },
];

// Simulates an API call to load children
async function fetchChildren(parentValue: string): Promise<TreeNodeData[]> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return [
    { label: \`\${parentValue}/file-1.txt\`, value: \`\${parentValue}/file-1.txt\` },
    { label: \`\${parentValue}/file-2.txt\`, value: \`\${parentValue}/file-2.txt\` },
    {
      label: \`\${parentValue}/subfolder\`,
      value: \`\${parentValue}/subfolder\`,
      hasChildren: true,
    },
  ];
}

function Leaf({ node, expanded, hasChildren, elementProps }: RenderTreeNodePayload) {
  return (
    <Group gap={6} wrap="nowrap" {...elementProps}>
      {hasChildren ? (
        expanded ? (
          <FolderOpenIcon size={14} style={{ flexShrink: 0, opacity: 0.75 }} />
        ) : (
          <FolderSimpleIcon size={14} style={{ flexShrink: 0, opacity: 0.75 }} />
        )
      ) : (
        <FileTextIcon size={14} style={{ flexShrink: 0, opacity: 0.75 }} />
      )}
      <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
        {node.label}
      </span>
    </Group>
  );
}

function Demo() {
  const [data, setData] = useState(initialData);
  const tree = useTree({
    onLoadChildren: async (value) => {
      const children = await fetchChildren(value);
      setData((prev) => mergeAsyncChildren(prev, value, children));
    },
  });

  return (
    <Tree
      data={data}
      tree={tree}
      withLines
      renderNode={(payload) => <Leaf {...payload} />}
    />
  );
}
`;

const initialData: TreeNodeData[] = [
  { label: 'Documents', value: 'documents', hasChildren: true },
  { label: 'Photos', value: 'photos', hasChildren: true },
  { label: 'README.md', value: 'readme' },
];

async function fetchChildren(parentValue: string): Promise<TreeNodeData[]> {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  return [
    { label: `${parentValue}/file-1.txt`, value: `${parentValue}/file-1.txt` },
    { label: `${parentValue}/file-2.txt`, value: `${parentValue}/file-2.txt` },
    {
      label: `${parentValue}/subfolder`,
      value: `${parentValue}/subfolder`,
      hasChildren: true,
    },
  ];
}

function Leaf({ node, expanded, hasChildren, elementProps }: RenderTreeNodePayload) {
  return (
    <Group gap={6} wrap="nowrap" {...elementProps}>
      {hasChildren ? (
        expanded ? (
          <FolderOpenIcon size={14} style={{ flexShrink: 0, opacity: 0.75 }} />
        ) : (
          <FolderSimpleIcon size={14} style={{ flexShrink: 0, opacity: 0.75 }} />
        )
      ) : (
        <FileTextIcon size={14} style={{ flexShrink: 0, opacity: 0.75 }} />
      )}
      <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
        {node.label}
      </span>
    </Group>
  );
}

function Demo() {
  const [data, setData] = useState(initialData);
  const tree = useTree({
    onLoadChildren: async (value) => {
      const children = await fetchChildren(value);
      setData((prev) => mergeAsyncChildren(prev, value, children));
    },
  });

  return <Tree data={data} tree={tree} withLines renderNode={(payload) => <Leaf {...payload} />} />;
}

export const asyncLoading: MantineDemo = {
  type: 'code',
  component: Demo,
  centered: true,
  maxWidth: 340,
  code,
};
