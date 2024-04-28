import { GetStylesApi } from '../../core';
import type { TreeFactory, TreeNodeData, TreeValue } from './Tree';
import type { TreeController } from './use-tree';

interface TreeNodeProps {
  node: TreeNodeData;
  getStyles: GetStylesApi<TreeFactory>;
  value: TreeValue;
  rootIndex: number | undefined;
  controller: TreeController;
  expandOnClick: boolean | undefined;
  level?: number;
}

export function TreeNode({
  node,
  value,
  getStyles,
  rootIndex,
  controller,
  expandOnClick,
  level = 1,
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
    />
  ));

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
      onKeyDown={() => console.log('keydown')}
      data-level={level}
    >
      <div {...getStyles('label')}>{node.label}</div>

      {controller.state[node.value] && nested.length > 0 && (
        <ul role="group" {...getStyles('subtree')} data-level={level}>
          {nested}
        </ul>
      )}
    </li>
  );
}

TreeNode.displayName = '@mantine/core/TreeNode';
