import type { TreeNodeData } from '../Tree';

export function mergeAsyncChildren(
  data: TreeNodeData[],
  parentValue: string,
  children: TreeNodeData[]
): TreeNodeData[] {
  let changed = false;

  const result = data.map((node) => {
    if (node.value === parentValue) {
      changed = true;
      const merged: TreeNodeData = { ...node, children };
      delete merged.hasChildren;
      return merged;
    }

    if (Array.isArray(node.children)) {
      const updatedChildren = mergeAsyncChildren(node.children, parentValue, children);
      if (updatedChildren !== node.children) {
        changed = true;
        return { ...node, children: updatedChildren };
      }
    }

    return node;
  });

  return changed ? result : data;
}
