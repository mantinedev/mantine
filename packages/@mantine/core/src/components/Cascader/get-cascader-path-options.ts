import type { CascaderOption } from './Cascader';

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
    if (!level) {
      break;
    }

    const node: CascaderOption | undefined = level.find((option) => option.value === currentValue);

    if (!node) {
      break;
    }

    options.push(node);
    level = node.children;
  }

  return options;
}
