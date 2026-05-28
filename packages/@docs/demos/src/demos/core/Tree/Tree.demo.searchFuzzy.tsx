import { useMemo, useState } from 'react';
import { FileTextIcon, FolderOpenIcon, FolderSimpleIcon } from '@phosphor-icons/react';
import Fuse from 'fuse.js';
import {
  filterTreeData,
  getTreeExpandedState,
  Group,
  RenderTreeNodePayload,
  TextInput,
  Tree,
  TreeNodeData,
  TreeNodeFilter,
  useTree,
} from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useMemo, useState } from 'react';
import { FileTextIcon, FolderOpenIcon, FolderSimpleIcon } from '@phosphor-icons/react';
import Fuse from 'fuse.js';
import {
  filterTreeData,
  getTreeExpandedState,
  Group,
  RenderTreeNodePayload,
  TextInput,
  Tree,
  TreeNodeData,
  TreeNodeFilter,
  useTree,
} from '@mantine/core';

const data: TreeNodeData[] = [
  {
    label: 'src',
    value: 'src',
    children: [
      {
        label: 'components',
        value: 'src/components',
        children: [
          { label: 'Accordion.tsx', value: 'src/components/Accordion.tsx' },
          { label: 'Tree.tsx', value: 'src/components/Tree.tsx' },
          { label: 'Button.tsx', value: 'src/components/Button.tsx' },
          { label: 'Input.tsx', value: 'src/components/Input.tsx' },
        ],
      },
      {
        label: 'hooks',
        value: 'src/hooks',
        children: [
          { label: 'use-debounce.ts', value: 'src/hooks/use-debounce.ts' },
          { label: 'use-media-query.ts', value: 'src/hooks/use-media-query.ts' },
        ],
      },
    ],
  },
  {
    label: 'public',
    value: 'public',
    children: [
      { label: 'favicon.ico', value: 'public/favicon.ico' },
      { label: 'logo.svg', value: 'public/logo.svg' },
    ],
  },
  { label: 'package.json', value: 'package.json' },
  { label: 'tsconfig.json', value: 'tsconfig.json' },
];

function flattenTreeData(nodes: TreeNodeData[]): TreeNodeData[] {
  return nodes.reduce<TreeNodeData[]>((acc, node) => {
    acc.push(node);
    if (node.children) {
      acc.push(...flattenTreeData(node.children));
    }
    return acc;
  }, []);
}

function createFuzzyFilter(nodes: TreeNodeData[]): TreeNodeFilter {
  const flatNodes = flattenTreeData(nodes);
  const fuse = new Fuse(flatNodes, {
    keys: ['label'],
    threshold: 0.3,
  });

  return (query, node) => {
    const results = fuse.search(query);
    return results.some((result) => result.item.value === node.value);
  };
}

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
  const [search, setSearch] = useState('');
  const tree = useTree();
  const fuzzyFilter = useMemo(() => createFuzzyFilter(data), []);

  const filteredData = useMemo(
    () => filterTreeData(data, search, fuzzyFilter),
    [search, fuzzyFilter]
  );

  const handleSearchChange = (value: string) => {
    setSearch(value);
    if (value.trim()) {
      const next = filterTreeData(data, value, fuzzyFilter);
      tree.setExpandedState(getTreeExpandedState(next, '*'));
    } else {
      tree.collapseAllNodes();
    }
  };

  return (
    <div>
      <TextInput
        placeholder="Fuzzy search..."
        mb="sm"
        value={search}
        onChange={(event) => handleSearchChange(event.currentTarget.value)}
      />
      <Tree
        data={filteredData}
        tree={tree}
        withLines
        renderNode={(payload) => <Leaf {...payload} />}
      />
    </div>
  );
}
`;

const data: TreeNodeData[] = [
  {
    label: 'src',
    value: 'src',
    children: [
      {
        label: 'components',
        value: 'src/components',
        children: [
          { label: 'Accordion.tsx', value: 'src/components/Accordion.tsx' },
          { label: 'Tree.tsx', value: 'src/components/Tree.tsx' },
          { label: 'Button.tsx', value: 'src/components/Button.tsx' },
          { label: 'Input.tsx', value: 'src/components/Input.tsx' },
        ],
      },
      {
        label: 'hooks',
        value: 'src/hooks',
        children: [
          { label: 'use-debounce.ts', value: 'src/hooks/use-debounce.ts' },
          { label: 'use-media-query.ts', value: 'src/hooks/use-media-query.ts' },
        ],
      },
    ],
  },
  {
    label: 'public',
    value: 'public',
    children: [
      { label: 'favicon.ico', value: 'public/favicon.ico' },
      { label: 'logo.svg', value: 'public/logo.svg' },
    ],
  },
  { label: 'package.json', value: 'package.json' },
  { label: 'tsconfig.json', value: 'tsconfig.json' },
];

function flattenTreeData(nodes: TreeNodeData[]): TreeNodeData[] {
  return nodes.reduce<TreeNodeData[]>((acc, node) => {
    acc.push(node);
    if (node.children) {
      acc.push(...flattenTreeData(node.children));
    }
    return acc;
  }, []);
}

function createFuzzyFilter(nodes: TreeNodeData[]): TreeNodeFilter {
  const flatNodes = flattenTreeData(nodes);
  const fuse = new Fuse(flatNodes, {
    keys: ['label'],
    threshold: 0.3,
  });

  return (query, node) => {
    const results = fuse.search(query);
    return results.some((result) => result.item.value === node.value);
  };
}

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
  const [search, setSearch] = useState('');
  const tree = useTree();
  const fuzzyFilter = useMemo(() => createFuzzyFilter(data), []);

  const filteredData = useMemo(
    () => filterTreeData(data, search, fuzzyFilter),
    [search, fuzzyFilter]
  );

  const handleSearchChange = (value: string) => {
    setSearch(value);
    if (value.trim()) {
      const next = filterTreeData(data, value, fuzzyFilter);
      tree.setExpandedState(getTreeExpandedState(next, '*'));
    } else {
      tree.collapseAllNodes();
    }
  };

  return (
    <div>
      <TextInput
        placeholder="Fuzzy search..."
        mb="sm"
        value={search}
        onChange={(event) => handleSearchChange(event.currentTarget.value)}
      />
      <Tree
        data={filteredData}
        tree={tree}
        withLines
        renderNode={(payload) => <Leaf {...payload} />}
      />
    </div>
  );
}

export const searchFuzzy: MantineDemo = {
  type: 'code',
  component: Demo,
  centered: true,
  maxWidth: 340,
  code,
};
