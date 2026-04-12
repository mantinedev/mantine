import { useMemo, useState } from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';
import { Combobox, Input, InputBase, ScrollArea, useCombobox } from '@mantine/core';

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
  hasChildren: boolean;
}

function flattenTree(
  nodes: TreeNode[],
  expanded: Record<string, boolean>,
  level: number = 1
): FlatNode[] {
  const result: FlatNode[] = [];
  nodes.forEach((node) => {
    const hasChildren = !!node.children?.length;
    result.push({ node, level, hasChildren });

    if (hasChildren && expanded[node.value]) {
      result.push(...flattenTree(node.children!, expanded, level + 1));
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
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const [value, setValue] = useState<string | null>(null);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [scrollParent, setScrollParent] = useState<HTMLDivElement | null>(null);

  const toggleExpand = (nodeValue: string) => {
    setExpanded((prev) => ({ ...prev, [nodeValue]: !prev[nodeValue] }));
  };

  const flatNodes = useMemo(() => flattenTree(largeData, expanded), [expanded]);

  const virtualizer = useVirtualizer({
    count: flatNodes.length,
    getScrollElement: () => scrollParent,
    estimateSize: () => ITEM_HEIGHT,
    overscan: 10,
  });

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
                const isSelected = value === flatNode.node.value;
                const isExpanded = !!expanded[flatNode.node.value];

                return (
                  <Combobox.Option
                    key={flatNode.node.value}
                    value={flatNode.node.value}
                    active={isSelected}
                    aria-selected={isSelected}
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
