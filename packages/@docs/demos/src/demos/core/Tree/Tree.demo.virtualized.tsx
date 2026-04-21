import { useMemo, useRef } from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';
import {
  flattenTreeData,
  FlatTreeNode,
  getTreeExpandedState,
  TreeNodeData,
  useTree,
} from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useMemo, useRef } from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';
import {
  FlatTreeNode,
  flattenTreeData,
  getTreeExpandedState,
  TreeNodeData,
  useTree,
} from '@mantine/core';

const ITEM_HEIGHT = 30;

function generateTreeData(count: number): TreeNodeData[] {
  const result: TreeNodeData[] = [];
  let id = 0;

  function addChildren(
    parent: TreeNodeData[],
    depth: number,
    remaining: { count: number }
  ) {
    const childCount = depth === 0 ? 20 : Math.floor(Math.random() * 8) + 2;

    for (let i = 0; i < childCount && remaining.count > 0; i++) {
      id++;
      remaining.count--;
      const hasChild =
        depth < 3 && remaining.count > 0 && Math.random() > 0.3;
      const node: TreeNodeData = {
        label: \`\${hasChild ? 'Folder' : 'File'} \${id}\`,
        value: \`node-\${id}\`,
        children: hasChild ? [] : undefined,
      };

      if (hasChild) {
        addChildren(node.children!, depth + 1, remaining);
      }

      parent.push(node);
    }
  }

  addChildren(result, 0, { count });
  return result;
}

const largeData = generateTreeData(2000);
const initialExpandedState = getTreeExpandedState(largeData, '*');

function Demo() {
  const tree = useTree({
    initialExpandedState,
  });

  const flatList = useMemo(
    () => flattenTreeData(largeData, tree.expandedState),
    [tree.expandedState]
  );

  const scrollParentRef = useRef<HTMLDivElement>(null);

  const virtualizer = useVirtualizer({
    count: flatList.length,
    getScrollElement: () => scrollParentRef.current,
    estimateSize: () => ITEM_HEIGHT,
    overscan: 20,
  });

  return (
    <div ref={scrollParentRef} style={{ height: 400, overflow: 'auto' }}>
      <div
        data-tree-root
        role="tree"
        style={{
          height: virtualizer.getTotalSize(),
          position: 'relative',
        }}
      >
        {virtualizer.getVirtualItems().map((virtualItem) => (
          <FlatTreeNode
            key={flatList[virtualItem.index].node.value}
            {...flatList[virtualItem.index]}
            tree={tree}
            expandOnClick
            selectOnClick
            tabIndex={virtualItem.index === 0 ? 0 : -1}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: virtualItem.size,
              transform: \`translateY(\${virtualItem.start}px)\`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
`;

const ITEM_HEIGHT = 30;

function generateTreeData(count: number): TreeNodeData[] {
  const result: TreeNodeData[] = [];
  let id = 0;

  function addChildren(parent: TreeNodeData[], depth: number, remaining: { count: number }) {
    const childCount = depth === 0 ? 20 : Math.floor(Math.random() * 8) + 2;

    for (let i = 0; i < childCount && remaining.count > 0; i++) {
      id++;
      remaining.count--;
      const hasChild = depth < 3 && remaining.count > 0 && Math.random() > 0.3;
      const node: TreeNodeData = {
        label: `${hasChild ? 'Folder' : 'File'} ${id}`,
        value: `node-${id}`,
        children: hasChild ? [] : undefined,
      };

      if (hasChild) {
        addChildren(node.children!, depth + 1, remaining);
      }

      parent.push(node);
    }
  }

  addChildren(result, 0, { count });
  return result;
}

const largeData = generateTreeData(2000);
const initialExpandedState = getTreeExpandedState(largeData, '*');

function Demo() {
  const tree = useTree({
    initialExpandedState,
  });

  const flatList = useMemo(
    () => flattenTreeData(largeData, tree.expandedState),
    [tree.expandedState]
  );

  const scrollParentRef = useRef<HTMLDivElement>(null);

  const virtualizer = useVirtualizer({
    count: flatList.length,
    getScrollElement: () => scrollParentRef.current,
    estimateSize: () => ITEM_HEIGHT,
    overscan: 20,
  });

  return (
    <div ref={scrollParentRef} style={{ height: 400, overflow: 'auto' }}>
      <div
        data-tree-root
        role="tree"
        style={{ height: virtualizer.getTotalSize(), position: 'relative' }}
      >
        {virtualizer.getVirtualItems().map((virtualItem) => (
          <FlatTreeNode
            key={flatList[virtualItem.index].node.value}
            {...flatList[virtualItem.index]}
            tree={tree}
            expandOnClick
            selectOnClick
            tabIndex={virtualItem.index === 0 ? 0 : -1}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: virtualItem.size,
              transform: `translateY(${virtualItem.start}px)`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export const virtualized: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  defaultExpanded: false,
};
