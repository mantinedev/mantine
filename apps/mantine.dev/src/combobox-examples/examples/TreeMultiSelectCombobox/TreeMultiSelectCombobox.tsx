import { useState } from 'react';
import {
  Checkbox,
  Combobox,
  Input,
  Pill,
  PillsInput,
  ScrollArea,
  useCombobox,
} from '@mantine/core';

interface TreeNode {
  value: string;
  label: string;
  children?: TreeNode[];
}

interface FlatNode {
  node: TreeNode;
  level: number;
  hasChildren: boolean;
  isLastChild: boolean;
  lineGuides: boolean[];
}

const LEVEL_OFFSET = 20;
const BASE_PADDING = 8;
const LINE_CONTENT_GAP = 5;
const OPTION_GAP = 6;

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

function flattenTree(
  nodes: TreeNode[],
  expandedState: Record<string, boolean>,
  level: number = 1,
  parentGuides: boolean[] = []
): FlatNode[] {
  const result: FlatNode[] = [];
  nodes.forEach((node, index) => {
    const isLast = index === nodes.length - 1;
    const hasChildren = !!node.children?.length;
    const childGuides = level >= 2 ? [...parentGuides, !isLast] : [];

    result.push({
      node,
      level,
      hasChildren,
      isLastChild: isLast,
      lineGuides: level >= 2 ? parentGuides : [],
    });

    if (hasChildren && expandedState[node.value]) {
      result.push(...flattenTree(node.children!, expandedState, level + 1, childGuides));
    }
  });
  return result;
}

function getLeafValues(node: TreeNode): string[] {
  if (!node.children?.length) {
    return [node.value];
  }
  return node.children.flatMap(getLeafValues);
}

function findLabel(nodes: TreeNode[], value: string): string {
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
  return value;
}

function isChecked(node: TreeNode, selected: string[]): boolean {
  if (!node.children?.length) {
    return selected.includes(node.value);
  }
  return getLeafValues(node).every((v) => selected.includes(v));
}

function isIndeterminate(node: TreeNode, selected: string[]): boolean {
  if (!node.children?.length) {
    return false;
  }
  const leaves = getLeafValues(node);
  const checkedCount = leaves.filter((v) => selected.includes(v)).length;
  return checkedCount > 0 && checkedCount < leaves.length;
}

function findNode(nodes: TreeNode[], value: string): TreeNode | null {
  for (const node of nodes) {
    if (node.value === value) {
      return node;
    }
    if (node.children) {
      const found = findNode(node.children, value);
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
  expanded,
  onToggleExpand,
}: {
  flatNode: FlatNode;
  selected: string[];
  expanded: Record<string, boolean>;
  onToggleExpand: (value: string) => void;
}) {
  const { node, level, hasChildren, isLastChild, lineGuides } = flatNode;
  const checked = isChecked(node, selected);
  const indeterminate = isIndeterminate(node, selected);
  const isExpanded = !!expanded[node.value];

  const lineElements =
    level > 1 ? (
      <>
        {lineGuides.map((show, g) =>
          show ? (
            <span
              key={`g${g}`}
              style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                width: 0,
                borderInlineStart: '1px solid var(--mantine-color-default-border)',
                pointerEvents: 'none',
                insetInlineStart: BASE_PADDING + (g + 1) * LEVEL_OFFSET - LEVEL_OFFSET / 2,
              }}
            />
          ) : null
        )}
        <span
          style={{
            position: 'absolute',
            top: 0,
            width: 0,
            borderInlineStart: '1px solid var(--mantine-color-default-border)',
            pointerEvents: 'none',
            insetInlineStart: BASE_PADDING + (level - 1) * LEVEL_OFFSET - LEVEL_OFFSET / 2,
            ...(isLastChild ? { bottom: 'auto', height: '50%' } : { bottom: 0 }),
          }}
        />
        <span
          style={{
            position: 'absolute',
            top: '50%',
            height: 0,
            borderTop: '1px solid var(--mantine-color-default-border)',
            pointerEvents: 'none',
            insetInlineStart: BASE_PADDING + (level - 1) * LEVEL_OFFSET - LEVEL_OFFSET / 2,
            width: LEVEL_OFFSET / 2,
          }}
        />
      </>
    ) : null;

  return (
    <Combobox.Option
      value={node.value}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        position: 'relative',
        paddingInlineStart:
          BASE_PADDING +
          (level - 1) * LEVEL_OFFSET +
          (level > 1 ? LINE_CONTENT_GAP : 0) +
          (!hasChildren ? OPTION_GAP : 0),
      }}
    >
      {lineElements}
      {hasChildren && (
        <span
          role="button"
          tabIndex={0}
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            onToggleExpand(node.value);
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.stopPropagation();
              e.preventDefault();
              onToggleExpand(node.value);
            }
          }}
          onMouseDown={(e) => e.preventDefault()}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 20,
            minWidth: 20,
            height: 20,
            borderRadius: 'var(--mantine-radius-sm)',
            cursor: 'pointer',
            color: 'var(--mantine-color-dimmed)',
            transform: isExpanded ? 'rotate(0deg)' : 'rotate(-90deg)',
            transition: 'transform 150ms ease',
          }}
        >
          <ChevronIcon size={16} />
        </span>
      )}
      <Checkbox.Indicator
        checked={checked || indeterminate}
        indeterminate={!checked && indeterminate}
        size="18px"
      />
      <span style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
        {node.label}
      </span>
    </Combobox.Option>
  );
}

export function TreeMultiSelectCombobox() {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const [selected, setSelected] = useState<string[]>([]);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    frontend: true,
    backend: true,
  });

  const flatNodes = flattenTree(data, expanded);

  const toggleExpand = (val: string) => {
    setExpanded((prev) => ({ ...prev, [val]: !prev[val] }));
  };

  const toggleSelect = (node: TreeNode) => {
    const leaves = getLeafValues(node);
    const allChecked = leaves.every((v) => selected.includes(v));
    if (allChecked) {
      setSelected((prev) => prev.filter((v) => !leaves.includes(v)));
    } else {
      setSelected((prev) => Array.from(new Set([...prev, ...leaves])));
    }
  };

  const handleOptionSubmit = (val: string) => {
    const node = findNode(data, val);
    if (node) {
      toggleSelect(node);
    }
  };

  const pills = selected.map((item) => (
    <Pill
      key={item}
      withRemoveButton
      onRemove={() => setSelected((prev) => prev.filter((v) => v !== item))}
    >
      {findLabel(data, item)}
    </Pill>
  ));

  return (
    <Combobox store={combobox} withinPortal={false} onOptionSubmit={handleOptionSubmit}>
      <Combobox.DropdownTarget>
        <PillsInput
          pointer
          onClick={() => combobox.toggleDropdown()}
          rightSection={<Combobox.Chevron />}
          rightSectionPointerEvents="none"
        >
          <Pill.Group>
            {pills.length > 0 ? pills : <Input.Placeholder>Pick technologies</Input.Placeholder>}
            <Combobox.EventsTarget>
              <PillsInput.Field
                type="hidden"
                onKeyDown={(event) => {
                  if (event.key === 'Backspace' && selected.length > 0) {
                    setSelected((prev) => prev.slice(0, -1));
                  }
                }}
              />
            </Combobox.EventsTarget>
          </Pill.Group>
        </PillsInput>
      </Combobox.DropdownTarget>

      <Combobox.Dropdown>
        <Combobox.Options>
          <ScrollArea.Autosize mah={250} type="scroll">
            {flatNodes.map((flatNode) => (
              <TreeOption
                key={flatNode.node.value}
                flatNode={flatNode}
                selected={selected}
                expanded={expanded}
                onToggleExpand={toggleExpand}
              />
            ))}
          </ScrollArea.Autosize>
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
