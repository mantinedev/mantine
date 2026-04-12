import type { TreeNodeData } from '../Tree';
import { getAllCheckedNodes } from '../Tree/get-all-checked-nodes/get-all-checked-nodes';
import { getChildrenNodesValues } from '../Tree/get-children-nodes-values/get-children-nodes-values';
import { isNodeChecked } from '../Tree/is-node-checked/is-node-checked';

export type CheckedStrategy = 'all' | 'parent' | 'child';

export function expandToLeafChecked(value: string[], data: TreeNodeData[]): string[] {
  const leaves = new Set<string>();
  for (const v of value) {
    for (const leaf of getChildrenNodesValues(v, data)) {
      leaves.add(leaf);
    }
  }
  return Array.from(leaves);
}

function getTopmostCheckedParents(data: TreeNodeData[], checkedState: string[]): string[] {
  const result: string[] = [];
  for (const node of data) {
    if (isNodeChecked(node.value, data, checkedState)) {
      result.push(node.value);
    } else if (Array.isArray(node.children) && node.children.length > 0) {
      result.push(...getTopmostCheckedParents(node.children, checkedState));
    }
  }
  return result;
}

export function checkedToValue(
  checkedState: string[],
  data: TreeNodeData[],
  strategy: CheckedStrategy
): string[] {
  if (checkedState.length === 0) {
    return [];
  }

  switch (strategy) {
    case 'child':
      return checkedState;
    case 'all':
      return getAllCheckedNodes(data, checkedState)
        .result.filter((n) => n.checked)
        .map((n) => n.value);
    case 'parent':
      return getTopmostCheckedParents(data, checkedState);
    default:
      return checkedState;
  }
}
