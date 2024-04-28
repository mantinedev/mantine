import { GetStylesApi } from '../../core';
import type { TreeFactory, TreeNodeData, TreeValue } from './Tree';

interface TreeNodeProps {
  node: TreeNodeData;
  getStyles: GetStylesApi<TreeFactory>;
  value: TreeValue;
  rootIndex: number | undefined;
}

export function TreeNode({ node, value, getStyles, rootIndex }: TreeNodeProps) {
  const nested = (node.children || []).map((child) => (
    <TreeNode
      key={child.value}
      node={child}
      getStyles={getStyles}
      value={value}
      rootIndex={undefined}
    />
  ));

  return (
    <li
      {...getStyles('node')}
      role="treeitem"
      aria-selected={node.value === value}
      tabIndex={rootIndex === 0 ? 0 : -1}
      onClick={() => console.log('click')}
      onKeyDown={() => console.log('keydown')}
    >
      <div {...getStyles('label')}>{node.label}</div>

      {nested.length > 0 && (
        <ul role="group" {...getStyles('subtree')}>
          {nested}
        </ul>
      )}
    </li>
  );
}

TreeNode.displayName = '@mantine/core/TreeNode';
