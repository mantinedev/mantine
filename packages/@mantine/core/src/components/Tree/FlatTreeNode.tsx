import { memo, useRef } from 'react';
import { findElementAncestor } from '../../core';
import type { RenderNode, TreeNodeData } from './Tree';
import type { TreeController } from './use-tree';
import classes from './Tree.module.css';

export interface FlatTreeNodeProps {
  /** Node data from tree data */
  node: TreeNodeData;

  /** Nesting level of the node, starts at 1 */
  level: number;

  /** Value of the parent node, `null` for root nodes */
  parent: string | null;

  /** Whether the node has children */
  hasChildren: boolean;

  /** Whether the node is expanded */
  expanded: boolean;

  /** Tree controller instance, return value of `useTree` hook */
  tree: TreeController;

  /** If set, tree node with children is expanded on click @default true */
  expandOnClick?: boolean;

  /** If set, tree node is selected on click @default false */
  selectOnClick?: boolean;

  /** If set, tree node with children is expanded on space key press @default true */
  expandOnSpace?: boolean;

  /** If set, tree node is checked on space key press @default false */
  checkOnSpace?: boolean;

  /** A function to render tree node label */
  renderNode?: RenderNode;

  /** Style to apply to the root element, used for virtualizer positioning */
  style?: React.CSSProperties;

  /** Tab index for the node */
  tabIndex?: number;
}

export const FlatTreeNode = memo(function FlatTreeNode({
  node,
  level,
  parent,
  hasChildren,
  expanded,
  tree,
  expandOnClick = true,
  selectOnClick,
  expandOnSpace = true,
  checkOnSpace,
  renderNode,
  style,
  tabIndex = -1,
}: FlatTreeNodeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isLoading = tree.isNodeLoading(node.value);
  const loadError = tree.getNodeLoadError(node.value);
  const selected = tree.selectedState.includes(node.value);

  const handleClick = (event: React.MouseEvent) => {
    event.stopPropagation();

    if (expandOnClick && hasChildren) {
      tree.toggleExpanded(node.value);
    }

    if (selectOnClick) {
      tree.select(node.value);
    }

    ref.current?.focus();
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.nativeEvent.code === 'ArrowRight') {
      event.stopPropagation();
      event.preventDefault();

      if (expanded && hasChildren) {
        const root = findElementAncestor(event.currentTarget as HTMLElement, '[data-tree-root]');
        const nodes = root
          ? Array.from(root.querySelectorAll<HTMLElement>('[role=treeitem]')).filter(
              (treeNode) => treeNode.style.display !== 'none'
            )
          : [];
        const index = nodes.indexOf(event.currentTarget as HTMLElement);
        if (index !== -1) {
          nodes[index + 1]?.focus();
        }
      } else if (hasChildren) {
        tree.expand(node.value);
      }
    }

    if (event.nativeEvent.code === 'ArrowLeft') {
      event.stopPropagation();
      event.preventDefault();

      if (expanded && hasChildren) {
        tree.collapse(node.value);
      } else if (parent) {
        const root = findElementAncestor(event.currentTarget as HTMLElement, '[data-tree-root]');
        const parentElement = root?.querySelector<HTMLElement>(
          `[role=treeitem][data-value="${CSS.escape(parent)}"]`
        );
        parentElement?.focus();
      }
    }

    if (event.nativeEvent.code === 'ArrowDown' || event.nativeEvent.code === 'ArrowUp') {
      const root = findElementAncestor(event.currentTarget as HTMLElement, '[data-tree-root]');

      if (!root) {
        return;
      }

      event.stopPropagation();
      event.preventDefault();
      const nodes = Array.from(root.querySelectorAll<HTMLElement>('[role=treeitem]')).filter(
        (treeNode) => treeNode.style.display !== 'none'
      );
      const index = nodes.indexOf(event.currentTarget as HTMLElement);

      if (index === -1) {
        return;
      }

      const nextIndex = event.nativeEvent.code === 'ArrowDown' ? index + 1 : index - 1;
      nodes[nextIndex]?.focus();
    }

    if (event.nativeEvent.code === 'Space') {
      if (expandOnSpace) {
        event.stopPropagation();
        event.preventDefault();
        tree.toggleExpanded(node.value);
      }

      if (checkOnSpace) {
        event.stopPropagation();
        event.preventDefault();
        if (tree.isNodeChecked(node.value)) {
          tree.uncheckNode(node.value);
        } else {
          tree.checkNode(node.value);
        }
      }
    }
  };

  const elementProps = {
    className: classes.label,
    style: {} as React.CSSProperties,
    onClick: handleClick,
    'data-selected': selected || undefined,
    'data-value': node.value,
  };

  return (
    <div
      ref={ref}
      className={classes.node}
      style={{
        ...({
          '--label-offset': `calc(var(--level-offset, var(--mantine-spacing-lg)) * ${level - 1})`,
        } as React.CSSProperties),
        ...style,
      }}
      role="treeitem"
      aria-selected={selected}
      aria-expanded={hasChildren ? expanded : undefined}
      data-value={node.value}
      data-selected={selected || undefined}
      data-level={level}
      tabIndex={tabIndex}
      onKeyDown={handleKeyDown}
    >
      {typeof renderNode === 'function' ? (
        renderNode({
          node,
          level,
          selected,
          tree,
          expanded,
          hasChildren,
          isLoading,
          loadError,
          elementProps,
          dragHandleProps: undefined,
        })
      ) : (
        <div {...elementProps}>{node.label}</div>
      )}
    </div>
  );
});

FlatTreeNode.displayName = '@mantine/core/FlatTreeNode';
