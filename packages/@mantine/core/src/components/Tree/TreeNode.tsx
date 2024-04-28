import { GetStylesApi } from '../../core';
import type { TreeFactory, TreeNodeData, TreeValue } from './Tree';

interface TreeNodeProps {
  node: TreeNodeData;
  getStyles: GetStylesApi<TreeFactory>;
  value: TreeValue;
  rootIndex: number | undefined;
  level?: number;
}

export function TreeNode({ node, value, getStyles, rootIndex, level = 1 }: TreeNodeProps) {
  const nested = (node.children || []).map((child) => (
    <TreeNode
      key={child.value}
      node={child}
      getStyles={getStyles}
      value={value}
      rootIndex={undefined}
      level={level + 1}
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
      data-level={level}
    >
      <div {...getStyles('label')}>{node.label}</div>

      {nested.length > 0 && (
        <ul role="group" {...getStyles('subtree')} data-level={level}>
          {nested}
        </ul>
      )}
    </li>
  );
}

TreeNode.displayName = '@mantine/core/TreeNode';
