import { useState } from 'react';
import { CheckIcon, Combobox, Input, InputBase, ScrollArea, useCombobox } from '@mantine/core';

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

export function TreeSelectCombobox() {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const [value, setValue] = useState<string | null>(null);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const toggleExpand = (nodeValue: string) => {
    setExpanded((prev) => ({ ...prev, [nodeValue]: !prev[nodeValue] }));
  };

  const flatNodes = flattenTree(data, expanded);

  return (
    <Combobox
      store={combobox}
      withinPortal={false}
      onOptionSubmit={(val) => {
        setValue(val);
        combobox.closeDropdown();
      }}
    >
      <Combobox.Target>
        <InputBase
          component="button"
          type="button"
          pointer
          rightSection={<Combobox.Chevron />}
          onClick={() => combobox.toggleDropdown()}
          rightSectionPointerEvents="none"
        >
          {(value && findLabel(data, value)) || (
            <Input.Placeholder>Pick a technology</Input.Placeholder>
          )}
        </InputBase>
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>
          <ScrollArea.Autosize mah={250} type="scroll">
            {flatNodes.map(({ node, level, hasChildren, isLastChild, lineGuides }) => {
              const isSelected = value === node.value;
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
                  aria-level={level}
                  aria-expanded={hasChildren ? isExpanded : undefined}
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
            })}
          </ScrollArea.Autosize>
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
