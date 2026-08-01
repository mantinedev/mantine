import type { TreeNodeData } from '../Tree';
import type { TreeExpandedState } from '../use-tree';

export type FlatTreeLineState = 'continuing' | 'closing' | 'none';

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

  /** For each level from 2 to this node's `level`, indicates whether a connector
   * line should be drawn at that column for this row:
   * - `'continuing'`: full vertical line passes through this row
   * - `'closing'`: line ends at this row (truncated to the connector level)
   * - `'none'`: no line at this column for this row
   *
   * Index 0 corresponds to level 2, index 1 to level 3, etc.
   * Empty for level-1 (root) nodes. */
  linesPath: FlatTreeLineState[];
}

function flattenTreeDataTo(
  acc: FlattenedTreeNodeData[],
  data: TreeNodeData[],
  expandedState: TreeExpandedState,
  parent: string | null,
  level: number,
  ancestorIsLast: boolean[]
): void {
  for (let i = 0; i < data.length; i++) {
    const node = data[i];
    const isLast = i === data.length - 1;
    const hasLoadedChildren = Array.isArray(node.children) && node.children.length > 0;
    const hasAsyncChildren = !!node.hasChildren && !hasLoadedChildren;
    const hasChildren = hasLoadedChildren || hasAsyncChildren;
    const expanded = expandedState[node.value] || false;

    const linesPath: FlatTreeLineState[] = [];
    for (let l = 2; l <= level; l++) {
      if (l === level) {
        linesPath.push(isLast ? 'closing' : 'continuing');
      } else {
        linesPath.push(ancestorIsLast[l - 1] ? 'none' : 'continuing');
      }
    }

    acc.push({ node, level, parent, hasChildren, expanded, linesPath });

    if (expanded && hasLoadedChildren) {
      flattenTreeDataTo(acc, node.children!, expandedState, node.value, level + 1, [
        ...ancestorIsLast,
        isLast,
      ]);
    }
  }
}

export function flattenTreeData(
  data: TreeNodeData[],
  expandedState: TreeExpandedState
): FlattenedTreeNodeData[] {
  const result: FlattenedTreeNodeData[] = [];
  flattenTreeDataTo(result, data, expandedState, null, 1, []);
  return result;
}
