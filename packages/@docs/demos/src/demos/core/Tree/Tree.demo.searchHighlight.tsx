import { useState } from 'react';
import {
  defaultTreeNodeFilter,
  getTreeExpandedState,
  Highlight,
  TextInput,
  Tree,
  TreeNodeData,
  useTree,
} from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import {
  defaultTreeNodeFilter,
  getTreeExpandedState,
  Highlight,
  TextInput,
  Tree,
  TreeNodeData,
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

function getMatchingAncestors(
  nodes: TreeNodeData[],
  query: string
): string[] {
  const result: string[] = [];
  for (const node of nodes) {
    const childMatches = node.children
      ? getMatchingAncestors(node.children, query)
      : [];
    if (
      defaultTreeNodeFilter(query, node) ||
      childMatches.length > 0
    ) {
      result.push(node.value, ...childMatches);
    }
  }
  return result;
}

function Demo() {
  const [search, setSearch] = useState('');
  const tree = useTree({
    initialExpandedState: getTreeExpandedState(data, []),
  });

  const handleSearchChange = (value: string) => {
    setSearch(value);
    if (value.trim()) {
      tree.setExpandedState(
        getTreeExpandedState(data, getMatchingAncestors(data, value))
      );
    } else {
      tree.collapseAllNodes();
    }
  };

  return (
    <div>
      <TextInput
        placeholder="Search..."
        mb="sm"
        value={search}
        onChange={(event) => handleSearchChange(event.currentTarget.value)}
      />
      <Tree
        data={data}
        tree={tree}
        renderNode={({ node, elementProps, hasChildren, expanded }) => {
          const label =
            typeof node.label === 'string' ? node.label : node.value;
          return (
            <div {...elementProps}>
              <Highlight highlight={search} component="span">
                {label}
              </Highlight>
            </div>
          );
        }}
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

function getMatchingAncestors(nodes: TreeNodeData[], query: string): string[] {
  const result: string[] = [];
  for (const node of nodes) {
    const childMatches = node.children ? getMatchingAncestors(node.children, query) : [];
    if (defaultTreeNodeFilter(query, node) || childMatches.length > 0) {
      result.push(node.value, ...childMatches);
    }
  }
  return result;
}

function Demo() {
  const [search, setSearch] = useState('');
  const tree = useTree({
    initialExpandedState: getTreeExpandedState(data, []),
  });

  const handleSearchChange = (value: string) => {
    setSearch(value);
    if (value.trim()) {
      tree.setExpandedState(getTreeExpandedState(data, getMatchingAncestors(data, value)));
    } else {
      tree.collapseAllNodes();
    }
  };

  return (
    <div>
      <TextInput
        placeholder="Search..."
        mb="sm"
        value={search}
        onChange={(event) => handleSearchChange(event.currentTarget.value)}
      />
      <Tree
        data={data}
        tree={tree}
        renderNode={({ node, elementProps }) => {
          const label = typeof node.label === 'string' ? node.label : node.value;
          return (
            <div {...elementProps}>
              <Highlight highlight={search} component="span">
                {label}
              </Highlight>
            </div>
          );
        }}
      />
    </div>
  );
}

export const searchHighlight: MantineDemo = {
  type: 'code',
  component: Demo,
  centered: true,
  maxWidth: 340,
  code,
};
