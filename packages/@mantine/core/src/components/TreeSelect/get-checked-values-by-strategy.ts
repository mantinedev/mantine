import { TreeNodeData } from '../Tree';
import { getAllCheckedNodes, isNodeChecked } from '../Tree/checked-state/checked-state';
import { getLeafValues } from '../Tree/tree-walk/tree-walk';

export type CheckedStrategy = 'all' | 'parent' | 'child';

export function expandToLeafChecked(value: string[], data: TreeNodeData[]): string[] {
  const leaves = new Set<string>();
  for (const v of value) {
    for (const leaf of getLeafValues(v, data)) {
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
        .filter((n) => n.checked)
        .map((n) => n.value);
    case 'parent':
      return getTopmostCheckedParents(data, checkedState);
    default:
      return checkedState;
  }
}
