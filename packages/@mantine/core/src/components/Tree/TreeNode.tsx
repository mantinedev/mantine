import { Activity, useRef } from 'react';
import { Box, findElementAncestor, GetStylesApi } from '../../core';
import type { TreeDragDropPayload } from './move-tree-node/move-tree-node';
import type { RenderNode, TreeDragState, TreeFactory, TreeNodeData } from './Tree';
import type { TreeController } from './use-tree';
import { useTreeNodeDragDrop } from './use-tree-node-drag-drop';

function getValuesRange(anchor: string | null, value: string | undefined, flatValues: string[]) {
  if (!anchor || !value) {
    return [];
  }

  const anchorIndex = flatValues.indexOf(anchor);
  const valueIndex = flatValues.indexOf(value);
  const start = Math.min(anchorIndex, valueIndex);
  const end = Math.max(anchorIndex, valueIndex);

  return flatValues.slice(start, end + 1);
}

interface TreeNodeProps {
  node: TreeNodeData;
  getStyles: GetStylesApi<TreeFactory>;
  rootIndex: number | undefined;
  controller: TreeController;
  expandOnClick: boolean | undefined;
  flatValues: string[];
  isSubtree?: boolean;
  level?: number;
  renderNode: RenderNode | undefined;
  selectOnClick: boolean | undefined;
  allowRangeSelection: boolean | undefined;
  expandOnSpace: boolean | undefined;
  checkOnSpace: boolean | undefined;
  keepMounted: boolean | undefined;
  onDragDrop: ((payload: TreeDragDropPayload) => void) | undefined;
  dragStateRef: React.RefObject<TreeDragState>;
  data: TreeNodeData[];
}

export function TreeNode({
  node,
  getStyles,
  rootIndex,
  controller,
  expandOnClick,
  selectOnClick,
  isSubtree,
  level = 1,
  renderNode,
  flatValues,
  allowRangeSelection,
  expandOnSpace,
  checkOnSpace,
  keepMounted,
  onDragDrop,
  dragStateRef,
  data,
}: TreeNodeProps) {
  const ref = useRef<HTMLLIElement>(null);
  const hasChildren = Array.isArray(node.children) && node.children.length > 0;
  const nested = (node.children || []).map((child) => (
    <TreeNode
      key={child.value}
      node={child}
      flatValues={flatValues}
      getStyles={getStyles}
      rootIndex={undefined}
      level={level + 1}
      controller={controller}
      expandOnClick={expandOnClick}
      isSubtree
      renderNode={renderNode}
      selectOnClick={selectOnClick}
      allowRangeSelection={allowRangeSelection}
      expandOnSpace={expandOnSpace}
      checkOnSpace={checkOnSpace}
      keepMounted={keepMounted}
      onDragDrop={onDragDrop}
      dragStateRef={dragStateRef}
      data={data}
    />
  ));

  const dragProps = useTreeNodeDragDrop({
    nodeValue: node.value,
    hasChildren,
    data,
    onDragDrop,
    dragStateRef,
  });

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.nativeEvent.code === 'ArrowRight') {
      event.stopPropagation();
      event.preventDefault();

      if (controller.expandedState[node.value]) {
        event.currentTarget.querySelector<HTMLLIElement>('[role=treeitem]')?.focus();
      } else {
        controller.expand(node.value);
      }
    }

    if (event.nativeEvent.code === 'ArrowLeft') {
      event.stopPropagation();
      event.preventDefault();
      if (controller.expandedState[node.value] && (node.children || []).length > 0) {
        controller.collapse(node.value);
      } else if (isSubtree) {
        findElementAncestor(event.currentTarget as HTMLElement, '[role=treeitem]')?.focus();
      }
    }

    if (event.nativeEvent.code === 'ArrowDown' || event.nativeEvent.code === 'ArrowUp') {
      const root = findElementAncestor(event.currentTarget as HTMLElement, '[data-tree-root]');

      if (!root) {
        return;
      }

      event.stopPropagation();
      event.preventDefault();
      const nodes = Array.from(root.querySelectorAll<HTMLLIElement>('[role=treeitem]')).filter(
        (treeNode) => treeNode.style.display !== 'none'
      );
      const index = nodes.indexOf(event.currentTarget as HTMLLIElement);

      if (index === -1) {
        return;
      }

      const nextIndex = event.nativeEvent.code === 'ArrowDown' ? index + 1 : index - 1;
      nodes[nextIndex]?.focus();

      if (event.shiftKey) {
        const selectNode = nodes[nextIndex];

        if (selectNode) {
          controller.setSelectedState(
            getValuesRange(controller.anchorNode, selectNode.dataset.value, flatValues)
          );
        }
      }
    }

    if (event.nativeEvent.code === 'Space') {
      if (expandOnSpace) {
        event.stopPropagation();
        event.preventDefault();
        controller.toggleExpanded(node.value);
      }

      if (checkOnSpace) {
        event.stopPropagation();
        event.preventDefault();
        controller.isNodeChecked(node.value)
          ? controller.uncheckNode(node.value)
          : controller.checkNode(node.value);
      }
    }
  };

  const handleNodeClick = (event: React.MouseEvent) => {
    event.stopPropagation();

    if (allowRangeSelection && event.shiftKey && controller.anchorNode) {
      controller.setSelectedState(getValuesRange(controller.anchorNode, node.value, flatValues));
      ref.current?.focus();
    } else {
      expandOnClick && controller.toggleExpanded(node.value);
      selectOnClick && controller.select(node.value);
      ref.current?.focus();
    }
  };

  const selected = controller.selectedState.includes(node.value);
  const elementProps = {
    ...getStyles('label'),
    onClick: handleNodeClick,
    'data-selected': selected || undefined,
    'data-value': node.value,
    ...dragProps,
  };

  return (
    <li
      {...getStyles('node', {
        style: { '--label-offset': `calc(var(--level-offset) * ${level - 1})` },
      })}
      role="treeitem"
      aria-selected={selected}
      data-value={node.value}
      data-selected={selected || undefined}
      data-level={level}
      tabIndex={rootIndex === 0 ? 0 : -1}
      onKeyDown={handleKeyDown}
      ref={ref}
    >
      {typeof renderNode === 'function' ? (
        renderNode({
          node,
          level,
          selected,
          tree: controller,
          expanded: controller.expandedState[node.value] || false,
          hasChildren,
          elementProps,
        })
      ) : (
        <div {...elementProps}>{node.label}</div>
      )}

      {keepMounted && nested.length > 0 ? (
        <Activity mode={controller.expandedState[node.value] ? 'visible' : 'hidden'}>
          <Box component="ul" role="group" {...getStyles('subtree')} data-level={level}>
            {nested}
          </Box>
        </Activity>
      ) : (
        controller.expandedState[node.value] &&
        nested.length > 0 && (
          <Box component="ul" role="group" {...getStyles('subtree')} data-level={level}>
            {nested}
          </Box>
        )
      )}
    </li>
  );
}

TreeNode.displayName = '@mantine/core/TreeNode';
