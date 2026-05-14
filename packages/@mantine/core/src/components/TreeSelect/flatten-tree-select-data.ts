import type { TreeNodeData } from '../Tree';
import type { TreeExpandedState } from '../Tree/use-tree';

export interface TreeSelectFlatNode {
  node: TreeNodeData;
  level: number;
  parent: string | null;
  hasChildren: boolean;
  expanded: boolean;
  isLastChild: boolean;
  lineGuides: boolean[];
}

function flattenTo(
  acc: TreeSelectFlatNode[],
  data: TreeNodeData[],
  expandedState: TreeExpandedState,
  parent: string | null,
  level: number,
  parentGuides: boolean[]
): void {
  for (let i = 0; i < data.length; i++) {
    const node = data[i];
    const isLast = i === data.length - 1;
    const hasLoadedChildren = Array.isArray(node.children);
    const hasAsyncChildren = !!node.hasChildren && !hasLoadedChildren;
    const hasChildren = hasLoadedChildren || hasAsyncChildren;
    const expanded = expandedState[node.value] || false;

    acc.push({
      node,
      level,
      parent,
      hasChildren,
      expanded,
      isLastChild: isLast,
      lineGuides: parentGuides,
    });

    if (expanded && hasLoadedChildren) {
      const childGuides = level >= 2 ? [...parentGuides, !isLast] : [];
      flattenTo(acc, node.children!, expandedState, node.value, level + 1, childGuides);
    }
  }
}

export function flattenTreeSelectData(
  data: TreeNodeData[],
  expandedState: TreeExpandedState
): TreeSelectFlatNode[] {
  const result: TreeSelectFlatNode[] = [];
  flattenTo(result, data, expandedState, null, 1, []);
  return result;
}
