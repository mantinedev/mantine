import type { TreeNodeData } from '../Tree';
import type { TreeExpandedState } from '../use-tree';

export interface FlattenedTreeNodeData {
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
}

function flattenTreeDataTo(
  acc: FlattenedTreeNodeData[],
  data: TreeNodeData[],
  expandedState: TreeExpandedState,
  parent: string | null,
  level: number
): void {
  for (let i = 0; i < data.length; i++) {
    const node = data[i];
    const hasLoadedChildren = Array.isArray(node.children);
    const hasAsyncChildren = !!node.hasChildren && !hasLoadedChildren;
    const hasChildren = hasLoadedChildren || hasAsyncChildren;
    const expanded = expandedState[node.value] || false;

    acc.push({ node, level, parent, hasChildren, expanded });

    if (expanded && hasLoadedChildren) {
      flattenTreeDataTo(acc, node.children!, expandedState, node.value, level + 1);
    }
  }
}

export function flattenTreeData(
  data: TreeNodeData[],
  expandedState: TreeExpandedState
): FlattenedTreeNodeData[] {
  const result: FlattenedTreeNodeData[] = [];
  flattenTreeDataTo(result, data, expandedState, null, 1);
  return result;
}
