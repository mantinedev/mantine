import { GetStylesApi } from '../../core';
import type { TreeFactory, TreeNodeData, TreeValue } from './Tree';

interface TreeNodeProps {
  node: TreeNodeData;
  getStyles: GetStylesApi<TreeFactory>;
  value: TreeValue;
}

export function TreeNode({ node, value, getStyles }: TreeNodeProps) {
  const nested = (node.children || []).map((child) => (
    <TreeNode key={child.value} node={child} getStyles={getStyles} value={value} />
  ));

  return (
    <li
      {...getStyles('node', { focusable: true })}
      role="treeitem"
      aria-selected={node.value === value}
      tabIndex={-1}
      onClick={() => console.log('click')}
      onKeyDown={() => console.log('keydown')}
    >
      {node.label}

      {nested.length > 0 && (
        <ul role="group" {...getStyles('subtree')}>
          {nested}
        </ul>
      )}
    </li>
  );
}

TreeNode.displayName = '@mantine/core/TreeNode';
