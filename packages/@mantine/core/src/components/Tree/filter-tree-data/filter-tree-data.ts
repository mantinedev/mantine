import type { TreeNodeData } from '../Tree';

export type TreeNodeFilter = (query: string, node: TreeNodeData) => boolean;

export function defaultTreeNodeFilter(query: string, node: TreeNodeData): boolean {
  const label = typeof node.label === 'string' ? node.label : node.value;
  return label.toLowerCase().includes(query.toLowerCase().trim());
}

export function filterTreeData(
  data: TreeNodeData[],
  query: string,
  filter: TreeNodeFilter = defaultTreeNodeFilter
): TreeNodeData[] {
  if (!query.trim()) {
    return data;
  }

  const result: TreeNodeData[] = [];

  for (const node of data) {
    const nodeMatches = filter(query, node);
    const filteredChildren =
      Array.isArray(node.children) && node.children.length > 0
        ? filterTreeData(node.children, query, filter)
        : [];

    if (nodeMatches || filteredChildren.length > 0) {
      result.push(
        filteredChildren.length > 0 ? { ...node, children: filteredChildren } : { ...node }
      );
    }
  }

  return result;
}
