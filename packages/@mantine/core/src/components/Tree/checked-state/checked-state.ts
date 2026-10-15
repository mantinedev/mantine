import type { TreeNodeData } from '../Tree';
import { collectLeafValues, hasLoadedChildren } from '../tree-walk/tree-walk';

export interface CheckedNodeStatus {
  checked: boolean;
  indeterminate: boolean;
  hasChildren: boolean;
  value: string;
}

interface CheckedLookup {
  data: TreeNodeData[];
  checked: Set<string>;
  indeterminate: Set<string>;
}

const nodesIndexCache = new WeakMap<TreeNodeData[], Map<string, TreeNodeData>>();
const normalizedCache = new WeakMap<string[], { data: TreeNodeData[]; value: string[] }>();
const lookupCache = new WeakMap<string[], CheckedLookup>();

function getNodesIndex(data: TreeNodeData[]) {
  const cached = nodesIndexCache.get(data);
  if (cached) {
    return cached;
  }

  const index = new Map<string, TreeNodeData>();
  const visit = (nodes: TreeNodeData[]) => {
    for (const node of nodes) {
      if (!index.has(node.value)) {
        index.set(node.value, node);
      }

      if (Array.isArray(node.children)) {
        visit(node.children);
      }
    }
  };

  visit(data);
  nodesIndexCache.set(data, index);
  return index;
}

export function normalizeCheckedState(checkedState: string[], data: TreeNodeData[]): string[] {
  const index = getNodesIndex(data);
  const acc: string[] = [];

  for (const value of checkedState) {
    const node = index.get(value);
    if (node) {
      collectLeafValues(node, acc);
    } else {
      acc.push(value);
    }
  }

  return Array.from(new Set(acc));
}

export function getNormalizedCheckedState(checkedState: string[], data: TreeNodeData[]) {
  const cached = normalizedCache.get(checkedState);
  if (cached && cached.data === data) {
    return cached.value;
  }

  const value = normalizeCheckedState(checkedState, data);
  normalizedCache.set(checkedState, { data, value });
  return value;
}

function collectCheckedNodes(
  data: TreeNodeData[],
  checkedState: Set<string>,
  acc: CheckedNodeStatus[]
) {
  const currentTreeChecked: CheckedNodeStatus[] = [];

  for (const node of data) {
    if (hasLoadedChildren(node)) {
      const innerChecked = collectCheckedNodes(node.children!, checkedState, acc);
      if (innerChecked.length === node.children!.length) {
        const isChecked = innerChecked.every((item) => item.checked);
        const item = {
          checked: isChecked,
          indeterminate: !isChecked,
          value: node.value,
          hasChildren: true,
        };
        currentTreeChecked.push(item);
        acc.push(item);
      } else if (innerChecked.length > 0) {
        const item = { checked: false, indeterminate: true, value: node.value, hasChildren: true };
        currentTreeChecked.push(item);
        acc.push(item);
      }
    } else if (checkedState.has(node.value)) {
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

  return currentTreeChecked;
}

export function getAllCheckedNodes(data: TreeNodeData[], checkedState: string[]) {
  const acc: CheckedNodeStatus[] = [];
  collectCheckedNodes(data, new Set(checkedState), acc);
  return acc;
}

function getCheckedLookup(data: TreeNodeData[], checkedState: string[]): CheckedLookup {
  const cached = lookupCache.get(checkedState);
  if (cached && cached.data === data) {
    return cached;
  }

  const checked = new Set(checkedState);
  const indeterminate = new Set<string>();

  for (const node of getAllCheckedNodes(data, checkedState)) {
    if (node.checked) {
      checked.add(node.value);
    }

    if (node.indeterminate) {
      indeterminate.add(node.value);
    }
  }

  const lookup = { data, checked, indeterminate };
  lookupCache.set(checkedState, lookup);
  return lookup;
}

export function isNodeChecked(value: string, data: TreeNodeData[], checkedState: string[]) {
  if (checkedState.length === 0) {
    return false;
  }

  return getCheckedLookup(data, checkedState).checked.has(value);
}

export function isNodeIndeterminate(value: string, data: TreeNodeData[], checkedState: string[]) {
  if (checkedState.length === 0) {
    return false;
  }

  return getCheckedLookup(data, checkedState).indeterminate.has(value);
}
