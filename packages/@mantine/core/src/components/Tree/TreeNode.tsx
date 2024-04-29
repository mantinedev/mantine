import { findElementAncestor, GetStylesApi } from '../../core';
import type { RenderNode, TreeFactory, TreeNodeData, TreeValue } from './Tree';
import type { TreeController } from './use-tree';

interface TreeNodeProps {
  node: TreeNodeData;
  getStyles: GetStylesApi<TreeFactory>;
  value: TreeValue;
  rootIndex: number | undefined;
  controller: TreeController;
  expandOnClick: boolean | undefined;
  isSubtree?: boolean;
  level?: number;
  renderNode: RenderNode | undefined;
}

export function TreeNode({
  node,
  value,
  getStyles,
  rootIndex,
  controller,
  expandOnClick,
  isSubtree,
  level = 1,
  renderNode,
}: TreeNodeProps) {
  const nested = (node.children || []).map((child) => (
    <TreeNode
      key={child.value}
      node={child}
      getStyles={getStyles}
      value={value}
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

      if (controller.state[node.value]) {
        event.currentTarget.querySelector<HTMLLIElement>('[role=treeitem]')?.focus();
      } else {
        controller.expandNode(node.value);
      }
    }

    if (event.nativeEvent.code === 'ArrowLeft') {
      event.stopPropagation();
      event.preventDefault();
      if (controller.state[node.value] && (node.children || []).length > 0) {
        controller.collapseNode(node.value);
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

  return (
    <li
      {...getStyles('node')}
      role="treeitem"
      aria-selected={node.value === value}
      tabIndex={rootIndex === 0 ? 0 : -1}
      onClick={(event) => {
        event.stopPropagation();
        expandOnClick && controller.toggleNode(node.value);
        event.currentTarget.focus();
      }}
      onKeyDown={handleKeyDown}
      data-level={level}
    >
      <div {...getStyles('label')}>
        {typeof renderNode === 'function'
          ? renderNode({
              node,
              level,
              expanded: controller.state[node.value] || false,
              hasChildren: Array.isArray(node.children) && node.children.length > 0,
            })
          : node.label}
      </div>

      {controller.state[node.value] && nested.length > 0 && (
        <ul role="group" {...getStyles('subtree')} data-level={level}>
          {nested}
        </ul>
      )}
    </li>
  );
}

TreeNode.displayName = '@mantine/core/TreeNode';
