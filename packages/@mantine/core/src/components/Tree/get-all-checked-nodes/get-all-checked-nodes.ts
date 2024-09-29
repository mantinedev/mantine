import type { TreeNodeData } from '../Tree';

export interface CheckedNodeStatus {
  checked: boolean;
  indeterminate: boolean;
  hasChildren: boolean;
  value: string;
}

export function getAllCheckedNodes(
  data: TreeNodeData[],
  checkedState: string[],
  acc: CheckedNodeStatus[] = []
) {
  const currentTreeChecked: CheckedNodeStatus[] = [];

  for (const node of data) {
    if (Array.isArray(node.children) && node.children.length > 0) {
      const innerChecked = getAllCheckedNodes(node.children, checkedState, acc);
      if (innerChecked.currentTreeChecked.length === node.children.length) {
        const isChecked = innerChecked.currentTreeChecked.every((item) => item.checked);
        const item = {
          checked: isChecked,
          indeterminate: !isChecked,
          value: node.value,
          hasChildren: true,
        };
        currentTreeChecked.push(item);
        acc.push(item);
      } else if (innerChecked.currentTreeChecked.length > 0) {
        const item = { checked: false, indeterminate: true, value: node.value, hasChildren: true };
        currentTreeChecked.push(item);
        acc.push(item);
      }
    } else if (checkedState.includes(node.value)) {
      const item: CheckedNodeStatus = {
        checked: true,
        indeterminate: false,
        value: node.value,
        hasChildren: false,
      };
      currentTreeChecked.push(item);
      acc.push(item);
    }
  }

  return { result: acc, currentTreeChecked };
}
