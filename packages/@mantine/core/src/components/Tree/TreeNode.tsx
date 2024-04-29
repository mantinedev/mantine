/* eslint-disable jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */
import { useRef } from 'react';
import { findElementAncestor, GetStylesApi } from '../../core';
import type { RenderNode, TreeFactory, TreeNodeData } from './Tree';
import type { TreeController } from './use-tree';

interface TreeNodeProps {
  node: TreeNodeData;
  getStyles: GetStylesApi<TreeFactory>;
  rootIndex: number | undefined;
  controller: TreeController;
  expandOnClick: boolean | undefined;
  isSubtree?: boolean;
  level?: number;
  renderNode: RenderNode | undefined;
}

export function TreeNode({
  node,
  getStyles,
  rootIndex,
  controller,
  expandOnClick,
  isSubtree,
  level = 1,
  renderNode,
}: TreeNodeProps) {
  const ref = useRef<HTMLLIElement>(null);
  const nested = (node.children || []).map((child) => (
    <TreeNode
      key={child.value}
      node={child}
      getStyles={getStyles}
      rootIndex={undefined}
      level={level + 1}
      controller={controller}
      expandOnClick={expandOnClick}
      isSubtree
      renderNode={renderNode}
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
      const focusIndex =
        nextIndex === -1 ? nodes.length - 1 : nextIndex === nodes.length ? 0 : nextIndex;
      const nextNode = nodes[focusIndex];
      nextNode.focus();
    }
  };

  const handleNodeClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    expandOnClick && controller.toggleExpanded(node.value);
    ref.current?.focus();
  };

  const selected = controller.selectedState.includes(node.value);

  return (
    <li
      {...getStyles('node')}
      role="treeitem"
      aria-selected={selected}
      data-selected={selected || undefined}
      tabIndex={rootIndex === 0 ? 0 : -1}
      onKeyDown={handleKeyDown}
      data-level={level}
      ref={ref}
    >
      {typeof renderNode === 'function' ? (
        renderNode({
          node,
          level,
          selected,
          expanded: controller.expandedState[node.value] || false,
          hasChildren: Array.isArray(node.children) && node.children.length > 0,
          elementProps: {
            className: getStyles('label').className,
            style: getStyles('label').style,
            onClick: handleNodeClick,
          },
        })
      ) : (
        <div
          {...getStyles('label')}
          onClick={handleNodeClick}
          data-selected={selected || undefined}
        >
          {node.label}
        </div>
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
