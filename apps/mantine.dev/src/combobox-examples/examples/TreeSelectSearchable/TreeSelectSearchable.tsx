import { useMemo, useState } from 'react';
import { CheckIcon, Combobox, ScrollArea, TextInput, useCombobox } from '@mantine/core';

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

const LEVEL_OFFSET = 20;
const BASE_PADDING = 8;
const LINE_CONTENT_GAP = 5;
const OPTION_GAP = 6;

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
  hasChildren: boolean;
  isLastChild: boolean;
  lineGuides: boolean[];
}

function flattenTree(
  nodes: TreeNode[],
  expanded: Record<string, boolean>,
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

    if (hasChildren && expanded[node.value]) {
      result.push(...flattenTree(node.children!, expanded, level + 1, childGuides));
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

function filterTree(nodes: TreeNode[], query: string): TreeNode[] {
  return nodes.reduce<TreeNode[]>((acc, node) => {
    const children = node.children ? filterTree(node.children, query) : [];
    if (node.label.toLowerCase().includes(query.toLowerCase()) || children.length > 0) {
      acc.push({ ...node, children: children.length > 0 ? children : node.children });
    }
    return acc;
  }, []);
}

function getAllParentValues(nodes: TreeNode[]): Record<string, boolean> {
  const result: Record<string, boolean> = {};
  nodes.forEach((node) => {
    if (node.children?.length) {
      result[node.value] = true;
      const childParents = getAllParentValues(node.children);
      Object.assign(result, childParents);
    }
  });
  return result;
}

export function TreeSelectSearchable() {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const [value, setValue] = useState<string | null>(null);
  const [search, setSearch] = useState('');
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const toggleExpand = (nodeValue: string) => {
    setExpanded((prev) => ({ ...prev, [nodeValue]: !prev[nodeValue] }));
  };

  const filteredData = useMemo(() => {
    if (!search.trim()) {
      return data;
    }
    return filterTree(data, search.trim());
  }, [search]);

  const resolvedExpanded = useMemo(() => {
    if (search.trim()) {
      return getAllParentValues(filteredData);
    }
    return expanded;
  }, [search, expanded, filteredData]);

  const flatNodes = flattenTree(filteredData, resolvedExpanded);

  return (
    <Combobox
      store={combobox}
      withinPortal={false}
      onOptionSubmit={(val) => {
        setValue(val);
        setSearch(findLabel(data, val) || '');
        combobox.closeDropdown();
      }}
    >
      <Combobox.Target>
        <TextInput
          placeholder="Search technologies"
          value={search}
          onChange={(event) => {
            setSearch(event.currentTarget.value);
            combobox.openDropdown();
            combobox.resetSelectedOption();
          }}
          onClick={() => combobox.openDropdown()}
          onFocus={() => combobox.openDropdown()}
          onBlur={() => {
            combobox.closeDropdown();
            if (value) {
              setSearch(findLabel(data, value) || '');
            } else {
              setSearch('');
            }
          }}
          rightSection={<Combobox.Chevron />}
          rightSectionPointerEvents="none"
        />
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>
          <ScrollArea.Autosize mah={250} type="scroll">
            {flatNodes.length === 0 ? (
              <Combobox.Empty>No results found</Combobox.Empty>
            ) : (
              flatNodes.map(({ node, level, hasChildren, isLastChild, lineGuides }) => {
                const isSelected = value === node.value;
                const isExpanded = !!resolvedExpanded[node.value];

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
                              insetInlineStart:
                                BASE_PADDING + (g + 1) * LEVEL_OFFSET - LEVEL_OFFSET / 2,
                            }}
                          />
                        ) : null
                      )}
                      <span
                        style={{
                          position: 'absolute',
                          top: 0,
                          bottom: isLastChild ? 'auto' : 0,
                          height: isLastChild ? '50%' : undefined,
                          width: 0,
                          borderInlineStart: '1px solid var(--mantine-color-default-border)',
                          pointerEvents: 'none',
                          insetInlineStart:
                            BASE_PADDING + (level - 1) * LEVEL_OFFSET - LEVEL_OFFSET / 2,
                        }}
                      />
                      <span
                        style={{
                          position: 'absolute',
                          top: '50%',
                          height: 0,
                          borderTop: '1px solid var(--mantine-color-default-border)',
                          pointerEvents: 'none',
                          insetInlineStart:
                            BASE_PADDING + (level - 1) * LEVEL_OFFSET - LEVEL_OFFSET / 2,
                          width: LEVEL_OFFSET / 2,
                        }}
                      />
                    </>
                  ) : null;

                return (
                  <Combobox.Option
                    key={node.value}
                    value={node.value}
                    active={isSelected}
                    aria-selected={isSelected}
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
                          toggleExpand(node.value);
                        }}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.stopPropagation();
                            e.preventDefault();
                            toggleExpand(node.value);
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
                    <span
                      style={{
                        flex: 1,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {node.label}
                    </span>
                    {isSelected && (
                      <CheckIcon
                        style={{
                          opacity: 0.4,
                          width: '0.8em',
                          minWidth: '0.8em',
                          height: '0.8em',
                          marginInlineStart: 'auto',
                        }}
                      />
                    )}
                  </Combobox.Option>
                );
              })
            )}
          </ScrollArea.Autosize>
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
