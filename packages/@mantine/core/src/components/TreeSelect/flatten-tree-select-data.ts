import { TreeNodeData } from '../Tree';
import { hasLoadedChildren, nodeHasChildren } from '../Tree/tree-walk/tree-walk';
import { TreeExpandedState } from '../Tree/use-tree';

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
    const withLoadedChildren = hasLoadedChildren(node);
    const hasChildren = nodeHasChildren(node);
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

    if (expanded && withLoadedChildren) {
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
