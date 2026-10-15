import type { CascaderOption } from './Cascader';
import { cascaderOptionHasChildren } from './get-cascader-columns';

export interface CascaderFlatPath {
  /** Values from root to node */
  path: string[];

  /** Option chain from root to node */
  options: CascaderOption[];

  /** `true` if the node has no children */
  leaf: boolean;

  /** `true` if the node or any of its ancestors is disabled */
  disabled: boolean;
}

export function flattenCascaderPaths(data: CascaderOption[]): CascaderFlatPath[] {
  const result: CascaderFlatPath[] = [];

  const walk = (
    nodes: CascaderOption[],
    parentPath: string[],
    parentOptions: CascaderOption[],
    parentDisabled: boolean
  ) => {
    for (const node of nodes) {
      const path = [...parentPath, node.value];
      const options = [...parentOptions, node];
      const disabled = parentDisabled || !!node.disabled;
      const hasChildren = cascaderOptionHasChildren(node);

      result.push({ path, options, leaf: !hasChildren, disabled });

      if (hasChildren) {
        walk(node.children!, path, options, disabled);
      }
    }
  };

  walk(data, [], [], false);

  return result;
}
