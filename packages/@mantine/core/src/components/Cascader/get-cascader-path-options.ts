import type { CascaderOption } from './Cascader';
import { findCascaderOption } from './get-cascader-columns';

export function getCascaderPathOptions(
  data: CascaderOption[],
  value: string[] | null | undefined
): CascaderOption[] {
  if (!value || value.length === 0) {
    return [];
  }

  const options: CascaderOption[] = [];
  let level: CascaderOption[] | undefined = data;

  for (const currentValue of value) {
    const node: CascaderOption | undefined = level
      ? findCascaderOption(level, currentValue)
      : undefined;

    if (!node) {
      break;
    }

    options.push(node);
    level = node.children;
  }

  return options;
}
