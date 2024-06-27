/* eslint-disable jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */
import { useRef } from 'react';
import { findElementAncestor, GetStylesApi } from '../../core';
import type { RenderNode, TreeFactory, TreeNodeData } from './Tree';
import type { TreeController } from './use-tree';

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
}: TreeNodeProps) {
  const ref = useRef<HTMLLIElement>(null);
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
    />
  ));

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
      const nodes = Array.from(root.querySelectorAll<HTMLLIElement>('[role=treeitem]'));
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

    if (event.nativeEvent.code === 'Space' && expandOnSpace) {
      event.stopPropagation();
      event.preventDefault();
      controller.toggleExpanded(node.value);
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
    'data-hovered': controller.hoveredNode === node.value || undefined,
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
      data-hovered={controller.hoveredNode === node.value || undefined}
      data-level={level}
      tabIndex={rootIndex === 0 ? 0 : -1}
      onKeyDown={handleKeyDown}
      ref={ref}
      onMouseOver={(event) => {
        event.stopPropagation();
        controller.setHoveredNode(node.value);
      }}
      onMouseLeave={(event) => {
        event.stopPropagation();
        controller.setHoveredNode(null);
      }}
    >
      {typeof renderNode === 'function' ? (
        renderNode({
          node,
          level,
          selected,
          expanded: controller.expandedState[node.value] || false,
          hasChildren: Array.isArray(node.children) && node.children.length > 0,
          elementProps,
        })
      ) : (
        <div {...elementProps}>{node.label}</div>
      )}

      {controller.expandedState[node.value] && nested.length > 0 && (
        <ul role="group" {...getStyles('subtree')} data-level={level}>
          {nested}
        </ul>
      )}
    </li>
  );
}

TreeNode.displayName = '@mantine/core/TreeNode';
