import type { TreeNodeData } from '../Tree';

export function hasLoadedChildren(node: TreeNodeData) {
  return Array.isArray(node.children) && node.children.length > 0;
}

export function nodeHasChildren(node: TreeNodeData) {
  return hasLoadedChildren(node) || !!node.hasChildren;
}

export function findTreeNode(value: string, data: TreeNodeData[]): TreeNodeData | null {
  for (const node of data) {
    if (node.value === value) {
      return node;
    }

    if (Array.isArray(node.children)) {
      const childNode = findTreeNode(value, node.children);
      if (childNode) {
        return childNode;
      }
    }
  }

  return null;
}

export function collectLeafValues(node: TreeNodeData, acc: string[]) {
  if (!hasLoadedChildren(node)) {
    acc.push(node.value);
    return;
  }

  node.children!.forEach((child) => collectLeafValues(child, acc));
}

export function getLeafValues(value: string, data: TreeNodeData[]): string[] {
  const node = findTreeNode(value, data);
  const acc: string[] = [];

  if (node) {
    collectLeafValues(node, acc);
  }

  return acc;
}

export function getAllLeafValues(data: TreeNodeData[]): string[] {
  const acc: string[] = [];
  data.forEach((node) => collectLeafValues(node, acc));
  return acc;
}

export function getAllNodeValues(data: TreeNodeData[]): string[] {
  const acc: string[] = [];
  for (const node of data) {
    acc.push(node.value);
    if (hasLoadedChildren(node)) {
      acc.push(...getAllNodeValues(node.children!));
    }
  }
  return acc;
}

export function isDescendant(data: TreeNodeData[], ancestorValue: string, value: string): boolean {
  const ancestor = findTreeNode(ancestorValue, data);
  if (!ancestor || !ancestor.children) {
    return false;
  }

  return findTreeNode(value, ancestor.children) !== null;
}
