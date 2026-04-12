import { useMemo, useState } from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';
import { Button } from '../Button';
import { Combobox } from '../Combobox';
import { useVirtualizedCombobox } from '../Combobox/use-combobox/use-virtualized-combobox';
import { InputBase } from '../InputBase';
import { ScrollArea } from '../ScrollArea';
import type { TreeNodeData } from '../Tree';
import { getTreeExpandedState, TreeExpandedState } from '../Tree/use-tree';
import { flattenTreeSelectData } from './flatten-tree-select-data';
import { TreeSelect } from './TreeSelect';
import { TreeSelectOption } from './TreeSelectOption';
import classes from './TreeSelect.module.css';

export default { title: 'TreeSelect' };

const simpleData: TreeNodeData[] = [
  {
    value: 'frontend',
    label: 'Frontend',
    children: [
      {
        value: 'react',
        label: 'React',
        children: [
          { value: 'nextjs', label: 'Next.js' },
          { value: 'remix', label: 'Remix' },
          { value: 'gatsby', label: 'Gatsby' },
        ],
      },
      {
        value: 'vue',
        label: 'Vue',
        children: [
          { value: 'nuxt', label: 'Nuxt' },
          { value: 'vitepress', label: 'VitePress' },
        ],
      },
      { value: 'angular', label: 'Angular' },
      { value: 'svelte', label: 'Svelte' },
    ],
  },
  {
    value: 'backend',
    label: 'Backend',
    children: [
      { value: 'nodejs', label: 'Node.js' },
      { value: 'python', label: 'Python' },
      { value: 'go', label: 'Go' },
      { value: 'rust', label: 'Rust' },
    ],
  },
  {
    value: 'devops',
    label: 'DevOps',
    children: [
      { value: 'docker', label: 'Docker' },
      { value: 'kubernetes', label: 'Kubernetes' },
      { value: 'terraform', label: 'Terraform' },
    ],
  },
];

const flatData: TreeNodeData[] = [
  { value: 'react', label: 'React' },
  { value: 'angular', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'vue', label: 'Vue' },
];

export function SingleSelect() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <TreeSelect
        data={simpleData}
        placeholder="Select a technology"
        label="Single select"
        onChange={(value) => console.log('Selected:', value)}
      />
    </div>
  );
}

export function SingleSelectSearchable() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <TreeSelect
        data={simpleData}
        placeholder="Search technologies..."
        label="Searchable single select"
        searchable
        nothingFoundMessage="No technologies found"
        onChange={(value) => console.log('Selected:', value)}
      />
    </div>
  );
}

export function SingleSelectControlled() {
  const [value, setValue] = useState<string | null>('react');

  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <TreeSelect
        data={simpleData}
        placeholder="Select a technology"
        label="Controlled single select"
        value={value}
        onChange={setValue}
        defaultExpandAll
      />
      <div style={{ marginTop: 10 }}>
        <Button onClick={() => setValue('python')} size="xs" mr={5}>
          Set Python
        </Button>
        <Button onClick={() => setValue(null)} size="xs">
          Clear
        </Button>
      </div>
      <div style={{ marginTop: 10 }}>Value: {JSON.stringify(value)}</div>
    </div>
  );
}

export function MultipleSelect() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <TreeSelect
        data={simpleData}
        mode="multiple"
        placeholder="Select technologies"
        label="Multiple select"
        defaultExpandAll
        onChange={(value) => console.log('Selected:', value)}
      />
    </div>
  );
}

export function MultipleSelectSearchable() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <TreeSelect
        data={simpleData}
        mode="multiple"
        placeholder="Search and select..."
        label="Searchable multiple select"
        searchable
        nothingFoundMessage="No technologies found"
        defaultExpandAll
        onChange={(value) => console.log('Selected:', value)}
      />
    </div>
  );
}

export function CheckboxMode() {
  const [value, setValue] = useState<string[]>([]);

  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <TreeSelect
        data={simpleData}
        mode="checkbox"
        placeholder="Check technologies"
        label="Checkbox mode (cascade)"
        defaultExpandAll
        value={value}
        onChange={setValue}
      />
      <div style={{ marginTop: 10, fontSize: 12, color: '#666' }}>
        Value: {JSON.stringify(value)}
      </div>
    </div>
  );
}

export function CheckboxStrictMode() {
  const [value, setValue] = useState<string[]>([]);

  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <TreeSelect
        data={simpleData}
        mode="checkbox"
        placeholder="Check technologies"
        label="Checkbox strict mode (no cascade)"
        checkStrictly
        defaultExpandAll
        value={value}
        onChange={setValue}
      />
      <div style={{ marginTop: 10, fontSize: 12, color: '#666' }}>
        Value: {JSON.stringify(value)}
      </div>
    </div>
  );
}

export function CheckedStrategyAll() {
  const [value, setValue] = useState<string[]>([]);

  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <TreeSelect
        data={simpleData}
        mode="checkbox"
        placeholder="Check technologies"
        label="checkedStrategy='all' — shows all checked nodes"
        checkedStrategy="all"
        defaultExpandAll
        value={value}
        onChange={setValue}
      />
      <div style={{ marginTop: 10, fontSize: 12, color: '#666' }}>
        Value ({value.length}): {JSON.stringify(value)}
      </div>
    </div>
  );
}

export function CheckedStrategyParent() {
  const [value, setValue] = useState<string[]>([]);

  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <TreeSelect
        data={simpleData}
        mode="checkbox"
        placeholder="Check technologies"
        label="checkedStrategy='parent' — shows topmost checked ancestor"
        checkedStrategy="parent"
        defaultExpandAll
        value={value}
        onChange={setValue}
      />
      <div style={{ marginTop: 10, fontSize: 12, color: '#666' }}>
        Value ({value.length}): {JSON.stringify(value)}
      </div>
    </div>
  );
}

export function CheckedStrategyChild() {
  const [value, setValue] = useState<string[]>([]);

  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <TreeSelect
        data={simpleData}
        mode="checkbox"
        placeholder="Check technologies"
        label="checkedStrategy='child' (default) — shows only leaf nodes"
        checkedStrategy="child"
        defaultExpandAll
        value={value}
        onChange={setValue}
      />
      <div style={{ marginTop: 10, fontSize: 12, color: '#666' }}>
        Value ({value.length}): {JSON.stringify(value)}
      </div>
    </div>
  );
}

export function DefaultExpandAll() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <TreeSelect
        data={simpleData}
        placeholder="All nodes expanded"
        label="Default expand all"
        defaultExpandAll
      />
    </div>
  );
}

export function DefaultExpandedValues() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <TreeSelect
        data={simpleData}
        placeholder="Frontend expanded"
        label="Default expanded values"
        defaultExpandedValues={['frontend', 'react']}
      />
    </div>
  );
}

export function ExpandOnClick() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <TreeSelect
        data={simpleData}
        placeholder="Click node to expand"
        label="Expand on click (click parent to expand + select)"
        expandOnClick
      />
    </div>
  );
}

export function Clearable() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <TreeSelect
        data={simpleData}
        placeholder="Clearable single"
        label="Clearable single"
        defaultValue="react"
        defaultExpandAll
        clearable
      />

      <TreeSelect
        data={simpleData}
        mode="multiple"
        placeholder="Clearable multiple"
        label="Clearable multiple"
        defaultValue={['react', 'python']}
        defaultExpandAll
        clearable
        mt="md"
      />

      <TreeSelect
        data={simpleData}
        mode="checkbox"
        placeholder="Clearable checkbox"
        label="Clearable checkbox"
        defaultValue={['nextjs', 'remix']}
        defaultExpandAll
        clearable
        mt="md"
      />
    </div>
  );
}

export function Disabled() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <TreeSelect
        data={simpleData}
        placeholder="Disabled"
        label="Disabled"
        disabled
        defaultValue="react"
        defaultExpandAll
      />

      <TreeSelect
        data={simpleData}
        mode="multiple"
        placeholder="Disabled multiple"
        label="Disabled multiple"
        disabled
        defaultValue={['react', 'python']}
        defaultExpandAll
        mt="md"
      />
    </div>
  );
}

export function ReadOnly() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <TreeSelect
        data={simpleData}
        placeholder="Read only"
        label="Read only"
        readOnly
        defaultValue="react"
        defaultExpandAll
      />
    </div>
  );
}

export function FlatData() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <TreeSelect data={flatData} placeholder="Flat data (no nesting)" label="Flat data" />
    </div>
  );
}

export function MaxValues() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <TreeSelect
        data={simpleData}
        mode="multiple"
        placeholder="Max 3 values"
        label="Max values = 3"
        maxValues={3}
        defaultExpandAll
      />
    </div>
  );
}

export function MaxDisplayedValues() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <TreeSelect
        data={simpleData}
        mode="multiple"
        placeholder="Max 2 displayed"
        label="Max displayed values = 2"
        maxDisplayedValues={2}
        defaultValue={['react', 'python', 'docker', 'go']}
        defaultExpandAll
      />
    </div>
  );
}

export function MaxDisplayedValuesCustomContent() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <TreeSelect
        data={simpleData}
        mode="multiple"
        placeholder="Custom overflow"
        label="Custom overflow content"
        maxDisplayedValues={2}
        maxDisplayedValuesContent={(overflow) => `and ${overflow} others`}
        defaultValue={['react', 'python', 'docker', 'go']}
        defaultExpandAll
      />
    </div>
  );
}

export function WithError() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <TreeSelect
        data={simpleData}
        placeholder="With error"
        label="Error state"
        error="Please select a technology"
      />
    </div>
  );
}

function generateLargeData(depth: number, breadth: number, prefix = ''): TreeNodeData[] {
  if (depth === 0) {
    return [];
  }
  return Array.from({ length: breadth }, (_, i) => {
    const value = `${prefix}node-${i}`;
    return {
      value,
      label: `Node ${prefix}${i}`,
      children: depth > 1 ? generateLargeData(depth - 1, breadth, `${value}/`) : undefined,
    };
  });
}

export function LargeData() {
  const data = generateLargeData(3, 20);

  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <TreeSelect
        data={data}
        placeholder="Large dataset (20×20×20)"
        label="Large data"
        searchable
        nothingFoundMessage="Nothing found"
      />
    </div>
  );
}

export function SearchableWithFilter() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <TreeSelect
        data={simpleData}
        placeholder="Search..."
        label="Search auto-expands matching paths"
        searchable
        nothingFoundMessage="No results"
        defaultExpandAll={false}
      />
    </div>
  );
}

export function WithLines() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <TreeSelect
        data={simpleData}
        placeholder="With tree lines"
        label="Single select with lines"
        withLines
        defaultExpandAll
      />

      <TreeSelect
        data={simpleData}
        mode="multiple"
        placeholder="Multiple with lines"
        label="Multiple select with lines"
        withLines
        defaultExpandAll
        mt="md"
      />

      <TreeSelect
        data={simpleData}
        mode="checkbox"
        placeholder="Checkbox with lines"
        label="Checkbox select with lines"
        withLines
        defaultExpandAll
        mt="md"
      />
    </div>
  );
}

export function WithLinesCollapsible() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <TreeSelect
        data={simpleData}
        placeholder="Expand to see lines"
        label="Lines with collapsed nodes"
        withLines
      />
    </div>
  );
}

export function AllModes() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <TreeSelect
        data={simpleData}
        placeholder="Single select"
        label="mode='single'"
        defaultExpandAll
        withLines
      />

      <TreeSelect
        data={simpleData}
        mode="multiple"
        placeholder="Multiple select"
        label="mode='multiple'"
        defaultExpandAll
        withLines
        mt="md"
      />

      <TreeSelect
        data={simpleData}
        mode="checkbox"
        placeholder="Checkbox select"
        label="mode='checkbox'"
        defaultExpandAll
        withLines
        mt="md"
      />
    </div>
  );
}

const ITEM_HEIGHT = 28;

export function VirtualizedTanstack() {
  const data = useMemo(() => generateLargeData(3, 50), []);
  const [opened, setOpened] = useState(false);
  const [value, setValue] = useState<string | null>(null);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(-1);
  const [scrollParent, setScrollParent] = useState<HTMLDivElement | null>(null);
  const [expandedState, setExpandedState] = useState<TreeExpandedState>(() =>
    getTreeExpandedState(data, [])
  );

  const flatNodes = useMemo(
    () => flattenTreeSelectData(data, expandedState),
    [data, expandedState]
  );

  const activeIndex = useMemo(
    () => (value ? flatNodes.findIndex((n) => n.node.value === value) : -1),
    [value, flatNodes]
  );

  const virtualizer = useVirtualizer({
    count: flatNodes.length,
    getScrollElement: () => scrollParent,
    estimateSize: () => ITEM_HEIGHT,
    overscan: 10,
  });

  const toggleExpand = (nodeValue: string) => {
    setExpandedState((prev) => ({ ...prev, [nodeValue]: !prev[nodeValue] }));
  };

  function onOptionSubmit(index: number) {
    const node = flatNodes[index];
    if (node.hasChildren) {
      toggleExpand(node.node.value);
      return;
    }
    setValue((prev) => (prev === node.node.value ? null : node.node.value));
    store.closeDropdown();
    store.resetSelectedOption();
  }

  const store = useVirtualizedCombobox({
    opened,
    onOpenedChange: setOpened,
    totalOptionsCount: flatNodes.length,
    getOptionId: (index) => flatNodes[index]?.node.value ?? null,
    selectedOptionIndex,
    activeOptionIndex: activeIndex,
    setSelectedOptionIndex: (index) => {
      setSelectedOptionIndex(index);
      if (index !== -1) {
        virtualizer.scrollToIndex(index, { align: 'auto' });
      }
    },
    onDropdownOpen: () => {
      if (activeIndex !== -1) {
        setSelectedOptionIndex(activeIndex);
        requestAnimationFrame(() => {
          virtualizer.scrollToIndex(activeIndex, { align: 'auto' });
        });
      }
    },
    onSelectedOptionSubmit: onOptionSubmit,
  });

  const nodeLabel = value
    ? (flatNodes.find((n) => n.node.value === value)?.node.label ?? value)
    : '';

  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <Combobox store={store} withinPortal={false} resetSelectionOnOptionHover={false}>
        <Combobox.Target targetType="button">
          <InputBase
            label={`Virtualized TanStack (${flatNodes.length} visible nodes)`}
            placeholder="Pick a value"
            pointer
            value={typeof nodeLabel === 'string' ? nodeLabel : (value ?? '')}
            readOnly
            rightSection={<Combobox.Chevron />}
            rightSectionPointerEvents="none"
            onClick={() => store.toggleDropdown()}
            onKeyDown={(event) => {
              if (event.key === 'ArrowRight') {
                const idx = store.getSelectedOptionIndex();
                if (idx >= 0 && flatNodes[idx]?.hasChildren && !flatNodes[idx]?.expanded) {
                  event.preventDefault();
                  toggleExpand(flatNodes[idx].node.value);
                }
              }
              if (event.key === 'ArrowLeft') {
                const idx = store.getSelectedOptionIndex();
                if (idx >= 0 && flatNodes[idx]?.hasChildren && flatNodes[idx]?.expanded) {
                  event.preventDefault();
                  toggleExpand(flatNodes[idx].node.value);
                }
              }
            }}
          />
        </Combobox.Target>
        <Combobox.Dropdown>
          <Combobox.Options className={classes.optionsWrapper}>
            <ScrollArea.Autosize
              mah={300}
              type="scroll"
              scrollbarSize={4}
              viewportRef={setScrollParent}
              onMouseDown={(event) => event.preventDefault()}
            >
              <div style={{ height: virtualizer.getTotalSize(), position: 'relative' }}>
                {virtualizer.getVirtualItems().map((virtualItem) => {
                  const flatNode = flatNodes[virtualItem.index];
                  return (
                    <div
                      key={flatNode.node.value}
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: virtualItem.size,
                        transform: `translateY(${virtualItem.start}px)`,
                      }}
                    >
                      <TreeSelectOption
                        node={flatNode.node}
                        level={flatNode.level}
                        expanded={flatNode.expanded}
                        hasChildren={flatNode.hasChildren}
                        selected={value === flatNode.node.value}
                        checked={false}
                        indeterminate={false}
                        showCheckbox={false}
                        isLastChild={flatNode.isLastChild}
                        lineGuides={flatNode.lineGuides}
                        withLines
                        onToggleExpand={toggleExpand}
                      />
                    </div>
                  );
                })}
              </div>
            </ScrollArea.Autosize>
          </Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>
      <div style={{ marginTop: 10, fontSize: 12, color: '#888' }}>
        Value: {JSON.stringify(value)}
      </div>
    </div>
  );
}
