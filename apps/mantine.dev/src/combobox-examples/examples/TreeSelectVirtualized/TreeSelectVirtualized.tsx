import { type KeyboardEvent, useMemo, useState } from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';
import { Combobox, Input, InputBase, ScrollArea, useVirtualizedCombobox } from '@mantine/core';

interface TreeNode {
  value: string;
  label: string;
  children?: TreeNode[];
}

const ITEM_HEIGHT = 36;
const LEVEL_OFFSET = 20;
const BASE_PADDING = 8;
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
  parent: string | null;
  hasChildren: boolean;
  expanded: boolean;
}

function flattenTree(
  nodes: TreeNode[],
  expanded: Record<string, boolean>,
  level: number = 1,
  parent: string | null = null
): FlatNode[] {
  const result: FlatNode[] = [];
  nodes.forEach((node) => {
    const hasChildren = !!node.children?.length;
    const isExpanded = !!expanded[node.value];
    result.push({ node, level, parent, hasChildren, expanded: isExpanded });

    if (hasChildren && isExpanded) {
      result.push(...flattenTree(node.children!, expanded, level + 1, node.value));
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

function generateTreeData(): TreeNode[] {
  const categories = [
    'Design',
    'Engineering',
    'Marketing',
    'Sales',
    'Support',
    'Product',
    'Legal',
    'Finance',
    'HR',
    'Operations',
    'Research',
    'QA',
    'Security',
    'Data',
    'Infrastructure',
    'Mobile',
    'Web',
    'Platform',
    'Analytics',
    'AI',
  ];

  return categories.map((cat, i) => ({
    value: `cat-${i}`,
    label: cat,
    children: Array.from({ length: 5 + (((i * 7 + 3) % 6) | 0) }, (_, j) => {
      const hasNested = j < 2;
      return {
        value: `cat-${i}-${j}`,
        label: `${cat} Team ${j + 1}`,
        children: hasNested
          ? Array.from({ length: 3 }, (_, k) => ({
              value: `cat-${i}-${j}-${k}`,
              label: `${cat} ${j + 1}.${k + 1}`,
            }))
          : undefined,
      };
    }),
  }));
}

const largeData = generateTreeData();

export function TreeSelectVirtualized() {
  const [opened, setOpened] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const [value, setValue] = useState<string | null>(null);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [scrollParent, setScrollParent] = useState<HTMLDivElement | null>(null);

  const toggleExpand = (nodeValue: string) => {
    setExpanded((prev) => ({ ...prev, [nodeValue]: !prev[nodeValue] }));
  };

  const flatNodes = useMemo(() => flattenTree(largeData, expanded), [expanded]);
  const activeOptionIndex = value ? flatNodes.findIndex((n) => n.node.value === value) : -1;

  const selectedOptionIndex = selectedValue
    ? flatNodes.findIndex((n) => n.node.value === selectedValue)
    : -1;

  const virtualizer = useVirtualizer({
    count: flatNodes.length,
    getScrollElement: () => scrollParent,
    estimateSize: () => ITEM_HEIGHT,
    overscan: 10,
  });

  const combobox = useVirtualizedCombobox({
    opened,
    onOpenedChange: setOpened,
    onDropdownClose: () => setSelectedValue(null),
    onDropdownOpen: () => {
      if (activeOptionIndex !== -1) {
        setSelectedValue(value);
        requestAnimationFrame(() => {
          virtualizer.scrollToIndex(activeOptionIndex, { align: 'auto' });
        });
      }
    },
    totalOptionsCount: flatNodes.length,
    getOptionId: (index) => (flatNodes[index] ? `tsv-${flatNodes[index].node.value}` : null),
    selectedOptionIndex,
    activeOptionIndex,
    setSelectedOptionIndex: (index) => {
      setSelectedValue(index === -1 ? null : (flatNodes[index]?.node.value ?? null));
      if (index !== -1) {
        virtualizer.scrollToIndex(index, { align: 'auto' });
      }
    },
    onSelectedOptionSubmit: onOptionSubmit,
  });

  function onOptionSubmit(index: number) {
    const node = flatNodes[index]?.node;
    if (!node) {
      return;
    }
    setValue(node.value);
    combobox.closeDropdown();
    combobox.resetSelectedOption();
  }

  const handleKeyDown = (event: KeyboardEvent) => {
    if (!combobox.dropdownOpened) {
      return;
    }

    const index = combobox.getSelectedOptionIndex();
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
          combobox.selectOption(parentIndex);
        }
      }
    }
  };

  return (
    <Combobox store={combobox} withinPortal={false} resetSelectionOnOptionHover={false} keepMounted>
      <Combobox.Target targetType="button">
        <InputBase
          component="button"
          type="button"
          pointer
          rightSection={<Combobox.Chevron />}
          onClick={() => combobox.toggleDropdown()}
          onKeyDown={handleKeyDown}
          rightSectionPointerEvents="none"
        >
          {(value && findLabel(largeData, value)) || (
            <Input.Placeholder>Pick a team</Input.Placeholder>
          )}
        </InputBase>
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>
          <ScrollArea.Autosize
            mah={250}
            type="scroll"
            viewportRef={setScrollParent}
            onMouseDown={(event) => event.preventDefault()}
          >
            <div style={{ height: virtualizer.getTotalSize(), position: 'relative' }}>
              {virtualizer.getVirtualItems().map((virtualItem) => {
                const flatNode = flatNodes[virtualItem.index];
                const isExpanded = flatNode.expanded;

                return (
                  <Combobox.Option
                    key={flatNode.node.value}
                    id={`tsv-${flatNode.node.value}`}
                    value={flatNode.node.value}
                    active={virtualItem.index === activeOptionIndex}
                    selected={virtualItem.index === selectedOptionIndex}
                    onClick={() => onOptionSubmit(virtualItem.index)}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: virtualItem.size,
                      transform: `translateY(${virtualItem.start}px)`,
                      paddingInlineStart:
                        BASE_PADDING +
                        (flatNode.level - 1) * LEVEL_OFFSET +
                        (!flatNode.hasChildren ? OPTION_GAP : 0),
                      display: 'flex',
                      alignItems: 'center',
                      gap: 6,
                    }}
                  >
                    {flatNode.hasChildren && (
                      <span
                        role="button"
                        tabIndex={0}
                        aria-label={isExpanded ? 'Collapse' : 'Expand'}
                        onClick={(e) => {
                          e.stopPropagation();
                          e.preventDefault();
                          toggleExpand(flatNode.node.value);
                        }}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.stopPropagation();
                            e.preventDefault();
                            toggleExpand(flatNode.node.value);
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
                          color: 'inherit',
                          opacity: 0.6,
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
                      {flatNode.node.label}
                    </span>
                  </Combobox.Option>
                );
              })}
            </div>
          </ScrollArea.Autosize>
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
