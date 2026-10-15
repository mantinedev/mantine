import { useMemo, useState } from 'react';
import {
  FileTextIcon,
  FolderOpenIcon,
  FolderSimpleIcon,
  MagnifyingGlassIcon,
  TrashIcon,
} from '@phosphor-icons/react';
import cx from 'clsx';
import {
  ActionIcon,
  Badge,
  filterTreeData,
  getTreeExpandedState,
  Group,
  Highlight,
  moveTreeNode,
  RenderTreeNodePayload,
  TextInput,
  Tree,
  TreeNodeData,
  useTree,
} from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import classes from './Tree.demo.docsEditor.module.css';

const docsCode = `import { TreeNodeData } from '@mantine/core';

export const data: TreeNodeData[] = [
  {
    label: 'Getting started',
    value: 'getting-started',
    children: [
      { label: 'Introduction', value: 'getting-started/introduction' },
      { label: 'Installation', value: 'getting-started/installation' },
      { label: 'Quick start', value: 'getting-started/quick-start' },
    ],
  },
  {
    label: 'Components',
    value: 'components',
    children: [
      {
        label: 'Inputs',
        value: 'components/inputs',
        children: [
          { label: 'Button', value: 'components/inputs/button' },
          { label: 'TextInput', value: 'components/inputs/text-input' },
          { label: 'Select', value: 'components/inputs/select' },
        ],
      },
      {
        label: 'Navigation',
        value: 'components/navigation',
        children: [
          { label: 'Tabs', value: 'components/navigation/tabs' },
          { label: 'Menu', value: 'components/navigation/menu' },
        ],
      },
    ],
  },
  {
    label: 'Hooks',
    value: 'hooks',
    children: [
      { label: 'use-toggle', value: 'hooks/use-toggle' },
      { label: 'use-click-outside', value: 'hooks/use-click-outside' },
    ],
  },
];`;

const docsData: TreeNodeData[] = [
  {
    label: 'Getting started',
    value: 'getting-started',
    children: [
      { label: 'Introduction', value: 'getting-started/introduction' },
      { label: 'Installation', value: 'getting-started/installation' },
      { label: 'Quick start', value: 'getting-started/quick-start' },
    ],
  },
  {
    label: 'Components',
    value: 'components',
    children: [
      {
        label: 'Inputs',
        value: 'components/inputs',
        children: [
          { label: 'Button', value: 'components/inputs/button' },
          { label: 'TextInput', value: 'components/inputs/text-input' },
          { label: 'Select', value: 'components/inputs/select' },
        ],
      },
      {
        label: 'Navigation',
        value: 'components/navigation',
        children: [
          { label: 'Tabs', value: 'components/navigation/tabs' },
          { label: 'Menu', value: 'components/navigation/menu' },
        ],
      },
    ],
  },
  {
    label: 'Hooks',
    value: 'hooks',
    children: [
      { label: 'use-toggle', value: 'hooks/use-toggle' },
      { label: 'use-click-outside', value: 'hooks/use-click-outside' },
    ],
  },
];

const cssCode = `.root {
  font-size: 13px;
}

.row {
  padding-block: 3px;
  padding-inline-end: 4px;

  &[data-selected] {
    background-color: var(--mantine-color-blue-light) !important;
    color: var(--mantine-color-bright);
  }

  &:hover,
  &:focus-within {
    .actions {
      opacity: 1;
    }

    .count {
      opacity: 0;
    }
  }

  &:hover {
    background-color: light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-6));
  }
}

.label {
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.count {
  transition: opacity 100ms ease;
}

.actions {
  opacity: 0;
  transition: opacity 100ms ease;
}`;

const code = `
import { useMemo, useState } from 'react';
import {
  FileTextIcon,
  FolderOpenIcon,
  FolderSimpleIcon,
  MagnifyingGlassIcon,
  TrashIcon,
} from '@phosphor-icons/react';
import cx from 'clsx';
import {
  ActionIcon,
  Badge,
  filterTreeData,
  getTreeExpandedState,
  Group,
  Highlight,
  moveTreeNode,
  RenderTreeNodePayload,
  TextInput,
  Tree,
  TreeNodeData,
  useTree,
} from '@mantine/core';
import { data } from './data';
import classes from './Demo.module.css';

function countPages(node: TreeNodeData): number {
  if (!node.children) {
    return 1;
  }
  return node.children.reduce((sum, child) => sum + countPages(child), 0);
}

function removeNode(data: TreeNodeData[], value: string): TreeNodeData[] {
  return data
    .filter((node) => node.value !== value)
    .map((node) => (node.children ? { ...node, children: removeNode(node.children, value) } : node));
}

function focusNeighbourTreeItem(item: HTMLElement) {
  const tree = item.closest('[role="tree"]');
  const items = Array.from(tree?.querySelectorAll<HTMLElement>('[role="treeitem"]') ?? []).filter(
    (element) => element === item || !item.contains(element)
  );
  const index = items.indexOf(item);
  (items[index + 1] ?? items[index - 1])?.focus();
}

interface LeafProps extends RenderTreeNodePayload {
  search: string;
  onDelete: (value: string, element: HTMLElement) => void;
}

function Leaf({ node, expanded, hasChildren, elementProps, search, onDelete }: LeafProps) {
  const label = typeof node.label === 'string' ? node.label : node.value;

  return (
    <Group gap={6} {...elementProps} className={cx(classes.row, elementProps.className)}>
      {hasChildren ? (
        expanded ? (
          <FolderOpenIcon size={14} style={{ flexShrink: 0, opacity: 0.75 }} />
        ) : (
          <FolderSimpleIcon size={14} style={{ flexShrink: 0, opacity: 0.75 }} />
        )
      ) : (
        <FileTextIcon size={14} style={{ flexShrink: 0, opacity: 0.75 }} />
      )}

      <Highlight component="span" highlight={search} className={classes.label}>
        {label}
      </Highlight>

      {hasChildren && (
        <Badge size="xs" radius="sm" variant="default" className={classes.count}>
          {countPages(node)}
        </Badge>
      )}

      <ActionIcon
        variant="subtle"
        color="red"
        size="xs"
        className={classes.actions}
        onClick={(event) => {
          event.stopPropagation();
          onDelete(node.value, event.currentTarget);
        }}
        tabIndex={-1}
        draggable={false}
        aria-label={\`Delete \${label}\`}
      >
        <TrashIcon size={14} />
      </ActionIcon>
    </Group>
  );
}

function Demo() {
  const [treeData, setTreeData] = useState(data);
  const [search, setSearch] = useState('');
  const store = useTree({
    initialSelectedState: ['components/inputs/button'],
    initialExpandedState: getTreeExpandedState(data, ['components', 'components/inputs']),
  });

  const filteredData = useMemo(
    () => (search.trim() ? filterTreeData(treeData, search) : treeData),
    [treeData, search]
  );

  const handleDelete = (value: string, element: HTMLElement) => {
    const item = element.closest<HTMLElement>('[role="treeitem"]');
    item && focusNeighbourTreeItem(item);
    setTreeData((current) => removeNode(current, value));
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLUListElement>) => {
    const target = event.target as HTMLElement;
    if (
      (event.key === 'Delete' || event.key === 'Backspace') &&
      target.getAttribute('role') === 'treeitem'
    ) {
      event.preventDefault();
      handleDelete(target.dataset.value!, target);
    }
  };

  const handleSearchChange = (value: string) => {
    setSearch(value);
    if (value.trim()) {
      store.setExpandedState(getTreeExpandedState(filterTreeData(treeData, value), '*'));
    }
  };

  return (
    <div>
      <TextInput
        leftSection={<MagnifyingGlassIcon size={14} />}
        placeholder="Search docs..."
        mb="sm"
        value={search}
        onChange={(event) => handleSearchChange(event.currentTarget.value)}
      />
      <Tree
        classNames={{ root: classes.root }}
        data={filteredData}
        store={store}
        withLines
        selectOnClick
        clearSelectionOnOutsideClick
        onKeyDown={handleKeyDown}
        onDragDrop={(payload) => setTreeData((current) => moveTreeNode(current, payload))}
        renderNode={(payload) => <Leaf {...payload} search={search} onDelete={handleDelete} />}
      />
    </div>
  );
}
`;

function countPages(node: TreeNodeData): number {
  if (!node.children) {
    return 1;
  }
  return node.children.reduce((sum, child) => sum + countPages(child), 0);
}

function removeNode(data: TreeNodeData[], value: string): TreeNodeData[] {
  return data
    .filter((node) => node.value !== value)
    .map((node) =>
      node.children ? { ...node, children: removeNode(node.children, value) } : node
    );
}

function focusNeighbourTreeItem(item: HTMLElement) {
  const tree = item.closest('[role="tree"]');
  const items = Array.from(tree?.querySelectorAll<HTMLElement>('[role="treeitem"]') ?? []).filter(
    (element) => element === item || !item.contains(element)
  );
  const index = items.indexOf(item);
  (items[index + 1] ?? items[index - 1])?.focus();
}

interface LeafProps extends RenderTreeNodePayload {
  search: string;
  onDelete: (value: string, element: HTMLElement) => void;
}

function Leaf({ node, expanded, hasChildren, elementProps, search, onDelete }: LeafProps) {
  const label = typeof node.label === 'string' ? node.label : node.value;

  return (
    <Group gap={6} {...elementProps} className={cx(classes.row, elementProps.className)}>
      {hasChildren ? (
        expanded ? (
          <FolderOpenIcon size={14} style={{ flexShrink: 0, opacity: 0.75 }} />
        ) : (
          <FolderSimpleIcon size={14} style={{ flexShrink: 0, opacity: 0.75 }} />
        )
      ) : (
        <FileTextIcon size={14} style={{ flexShrink: 0, opacity: 0.75 }} />
      )}

      <Highlight component="span" highlight={search} className={classes.label}>
        {label}
      </Highlight>

      {hasChildren && (
        <Badge size="xs" radius="sm" variant="default" className={classes.count}>
          {countPages(node)}
        </Badge>
      )}

      <ActionIcon
        variant="subtle"
        color="red"
        size="xs"
        className={classes.actions}
        onClick={(event) => {
          event.stopPropagation();
          onDelete(node.value, event.currentTarget);
        }}
        tabIndex={-1}
        draggable={false}
        aria-label={`Delete ${label}`}
      >
        <TrashIcon size={14} />
      </ActionIcon>
    </Group>
  );
}

function Demo() {
  const [treeData, setTreeData] = useState(docsData);
  const [search, setSearch] = useState('');
  const store = useTree({
    initialSelectedState: ['components/inputs/button'],
    initialExpandedState: getTreeExpandedState(docsData, ['components', 'components/inputs']),
  });

  const filteredData = useMemo(
    () => (search.trim() ? filterTreeData(treeData, search) : treeData),
    [treeData, search]
  );

  const handleDelete = (value: string, element: HTMLElement) => {
    const item = element.closest<HTMLElement>('[role="treeitem"]');
    item && focusNeighbourTreeItem(item);
    setTreeData((current) => removeNode(current, value));
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLUListElement>) => {
    const target = event.target as HTMLElement;
    if (
      (event.key === 'Delete' || event.key === 'Backspace') &&
      target.getAttribute('role') === 'treeitem'
    ) {
      event.preventDefault();
      handleDelete(target.dataset.value!, target);
    }
  };

  const handleSearchChange = (value: string) => {
    setSearch(value);
    if (value.trim()) {
      store.setExpandedState(getTreeExpandedState(filterTreeData(treeData, value), '*'));
    }
  };

  return (
    <div>
      <TextInput
        leftSection={<MagnifyingGlassIcon size={14} />}
        placeholder="Search docs..."
        mb="sm"
        value={search}
        onChange={(event) => handleSearchChange(event.currentTarget.value)}
      />
      <Tree
        classNames={{ root: classes.root }}
        data={filteredData}
        store={store}
        withLines
        selectOnClick
        clearSelectionOnOutsideClick
        onKeyDown={handleKeyDown}
        onDragDrop={(payload) => setTreeData((current) => moveTreeNode(current, payload))}
        renderNode={(payload) => <Leaf {...payload} search={search} onDelete={handleDelete} />}
      />
    </div>
  );
}

export const docsEditor: MantineDemo = {
  type: 'code',
  component: Demo,
  centered: true,
  maxWidth: 360,
  code: [
    { fileName: 'Demo.tsx', language: 'tsx', code },
    { fileName: 'Demo.module.css', language: 'scss', code: cssCode },
    { fileName: 'data.ts', language: 'tsx', code: docsCode },
  ],
};
