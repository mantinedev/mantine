import { findTreeNode } from '../get-children-nodes-values/get-children-nodes-values';
import type { TreeNodeData } from '../Tree';

export type TreeDragDropPosition = 'before' | 'after' | 'inside';

export interface TreeDragDropPayload {
  /** Value of the dragged node */
  draggedNode: string;

  /** Value of the target node */
  targetNode: string;

  /** Position relative to the target node */
  position: TreeDragDropPosition;
}

function isDescendant(data: TreeNodeData[], ancestorValue: string, value: string): boolean {
  const ancestor = findTreeNode(ancestorValue, data);
  if (!ancestor || !ancestor.children) {
    return false;
  }

  function check(nodes: TreeNodeData[]): boolean {
    for (const node of nodes) {
      if (node.value === value) {
        return true;
      }

      if (node.children && check(node.children)) {
        return true;
      }
    }

    return false;
  }

  return check(ancestor.children);
}

function removeNode(
  data: TreeNodeData[],
  value: string
): { data: TreeNodeData[]; removed: TreeNodeData | null } {
  let removed: TreeNodeData | null = null;

  const newData = data.reduce<TreeNodeData[]>((acc, node) => {
    if (node.value === value) {
      removed = { ...node };
      return acc;
    }

    if (node.children) {
      const result = removeNode(node.children, value);
      if (result.removed) {
        removed = result.removed;
        acc.push({ ...node, children: result.data });
      } else {
        acc.push(node);
      }
    } else {
      acc.push(node);
    }

    return acc;
  }, []);

  return { data: newData, removed };
}

function insertNode(
  data: TreeNodeData[],
  node: TreeNodeData,
  targetValue: string,
  position: TreeDragDropPosition
): TreeNodeData[] {
  if (position === 'inside') {
    return data.map((item) => {
      if (item.value === targetValue) {
        return { ...item, children: [...(item.children || []), node] };
      }

      if (item.children) {
        return { ...item, children: insertNode(item.children, node, targetValue, position) };
      }

      return item;
    });
  }

  const targetIndex = data.findIndex((item) => item.value === targetValue);

  if (targetIndex !== -1) {
    const result = [...data];
    const insertIndex = position === 'before' ? targetIndex : targetIndex + 1;
    result.splice(insertIndex, 0, node);
    return result;
  }

  return data.map((item) => {
    if (item.children) {
      return { ...item, children: insertNode(item.children, node, targetValue, position) };
    }

    return item;
  });
}

export function moveTreeNode(data: TreeNodeData[], payload: TreeDragDropPayload): TreeNodeData[] {
  const { draggedNode, targetNode, position } = payload;

  if (draggedNode === targetNode) {
    return data;
  }

  if (!findTreeNode(targetNode, data)) {
    return data;
  }

  if (isDescendant(data, draggedNode, targetNode)) {
    return data;
  }

  const { data: dataWithout, removed } = removeNode(data, draggedNode);

  if (!removed) {
    return data;
  }

  return insertNode(dataWithout, removed, targetNode, position);
}
