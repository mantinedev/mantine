import { type KeyboardEvent, useState } from 'react';
import { Box, CheckIcon, Combobox, Input, InputBase, useCombobox } from '@mantine/core';
import classes from './TreeSelectCombobox.module.css';

interface TreeNode {
  value: string;
  label: string;
  children?: TreeNode[];
}

const data: TreeNode[] = [
  {
    value: 'frontend',
    label: 'Frontend',
    children: [
      { value: 'react', label: 'React' },
      { value: 'vue', label: 'Vue' },
      { value: 'angular', label: 'Angular' },
    ],
  },
  {
    value: 'backend',
    label: 'Backend',
    children: [
      { value: 'node', label: 'Node.js' },
      { value: 'python', label: 'Python' },
      {
        value: 'go-ecosystem',
        label: 'Go ecosystem',
        children: [
          { value: 'go', label: 'Go' },
          { value: 'gin', label: 'Gin' },
        ],
      },
    ],
  },
  { value: 'devops', label: 'DevOps' },
];

function ChevronIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 15 15" fill="none" style={{ display: 'block' }}>
      <path
        d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
}

interface FlatNode {
  node: TreeNode;
  level: number;
  parent: string | null;
  hasChildren: boolean;
  expanded: boolean;
  isLastChild: boolean;
  lineGuides: boolean[];
}

function flattenTree(
  nodes: TreeNode[],
  expanded: Record<string, boolean>,
  level: number = 1,
  parentGuides: boolean[] = [],
  parent: string | null = null
): FlatNode[] {
  const result: FlatNode[] = [];
  nodes.forEach((node, index) => {
    const isLast = index === nodes.length - 1;
    const hasChildren = !!node.children?.length;
    const isExpanded = !!expanded[node.value];
    const childGuides = level >= 2 ? [...parentGuides, !isLast] : [];

    result.push({
      node,
      level,
      parent,
      hasChildren,
      expanded: isExpanded,
      isLastChild: isLast,
      lineGuides: level >= 2 ? parentGuides : [],
    });

    if (hasChildren && isExpanded) {
      result.push(...flattenTree(node.children!, expanded, level + 1, childGuides, node.value));
    }
  });
  return result;
}

function findLabel(nodes: TreeNode[], value: string): string | null {
  for (const node of nodes) {
    if (node.value === value) {
      return node.label;
    }
    if (node.children) {
      const found = findLabel(node.children, value);
      if (found) {
        return found;
      }
    }
  }
  return null;
}

function TreeOption({
  flatNode,
  selected,
  onToggleExpand,
}: {
  flatNode: FlatNode;
  selected: boolean;
  onToggleExpand: (value: string) => void;
}) {
  const { node, level, hasChildren, expanded, isLastChild, lineGuides } = flatNode;

  return (
    <Combobox.Option
      value={node.value}
      active={selected}
      aria-level={level}
      aria-expanded={hasChildren ? expanded : undefined}
      className={classes.option}
      mod={{ nested: level > 1, leaf: !hasChildren }}
      style={{ '--level': level }}
    >
      {level > 1 && (
        <>
          {lineGuides.map(
            (show, index) =>
              show && (
                <Box
                  key={index}
                  component="span"
                  className={classes.guide}
                  style={{ '--guide-index': index }}
                />
              )
          )}
          <span className={classes.connector} data-last={isLastChild || undefined} />
          <span className={classes.elbow} />
        </>
      )}
      {hasChildren && (
        <span
          aria-hidden
          className={classes.chevron}
          data-expanded={expanded || undefined}
          onClick={(event) => {
            event.stopPropagation();
            event.preventDefault();
            onToggleExpand(node.value);
          }}
          onMouseDown={(event) => event.preventDefault()}
        >
          <ChevronIcon size={16} />
        </span>
      )}
      <span className={classes.label}>{node.label}</span>
      {selected && <CheckIcon className={classes.check} />}
    </Combobox.Option>
  );
}

export function TreeSelectCombobox() {
  const store = useCombobox({
    onDropdownClose: () => store.resetSelectedOption(),
  });

  const [value, setValue] = useState<string | null>(null);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const toggleExpand = (nodeValue: string) => {
    setExpanded((prev) => ({ ...prev, [nodeValue]: !prev[nodeValue] }));
  };

  const flatNodes = flattenTree(data, expanded);

  const handleKeyDown = (event: KeyboardEvent) => {
    if (!store.dropdownOpened) {
      return;
    }

    const index = store.getSelectedOptionIndex();
    if (index < 0 || index >= flatNodes.length) {
      return;
    }

    const current = flatNodes[index];

    if (event.key === 'ArrowRight' && current.hasChildren && !current.expanded) {
      event.preventDefault();
      toggleExpand(current.node.value);
    }

    if (event.key === 'ArrowLeft') {
      if (current.hasChildren && current.expanded) {
        event.preventDefault();
        toggleExpand(current.node.value);
      } else if (current.parent) {
        event.preventDefault();
        const parentIndex = flatNodes.findIndex((n) => n.node.value === current.parent);
        if (parentIndex >= 0) {
          store.selectOption(parentIndex);
        }
      }
    }
  };

  return (
    <Combobox
      store={store}
      withinPortal={false}
      onOptionSubmit={(val) => {
        setValue(val);
        store.closeDropdown();
      }}
    >
      <Combobox.Target targetType="button">
        <InputBase
          component="button"
          type="button"
          pointer
          rightSection={<Combobox.Chevron />}
          onClick={() => store.toggleDropdown()}
          onKeyDown={handleKeyDown}
          onBlur={() => store.closeDropdown()}
          rightSectionPointerEvents="none"
          aria-label="Pick a technology"
        >
          {(value && findLabel(data, value)) || (
            <Input.Placeholder>Pick a technology</Input.Placeholder>
          )}
        </InputBase>
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.ScrollArea mah={250} viewportProps={{ tabIndex: -1 }}>
          <Combobox.Options>
            {flatNodes.map((flatNode) => (
              <TreeOption
                key={flatNode.node.value}
                flatNode={flatNode}
                selected={value === flatNode.node.value}
                onToggleExpand={toggleExpand}
              />
            ))}
          </Combobox.Options>
        </Combobox.ScrollArea>
      </Combobox.Dropdown>
    </Combobox>
  );
}
