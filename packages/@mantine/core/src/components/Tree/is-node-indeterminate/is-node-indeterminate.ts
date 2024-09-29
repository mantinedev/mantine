import { memoize } from '../../../core';
import { getAllCheckedNodes } from '../get-all-checked-nodes/get-all-checked-nodes';
import type { TreeNodeData } from '../Tree';

export function isNodeIndeterminate(
  value: string,
  data: TreeNodeData[],
  checkedState: string[]
): boolean {
  if (checkedState.length === 0) {
    return false;
  }

  const checkedNodes = getAllCheckedNodes(data, checkedState).result;
  return checkedNodes.some((node) => node.value === value && node.indeterminate);
}

export const memoizedIsNodeIndeterminate = memoize(isNodeIndeterminate);
