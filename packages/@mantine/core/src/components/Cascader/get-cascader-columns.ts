import type { CascaderOption } from './Cascader';

export function cascaderOptionHasChildren(option: CascaderOption): boolean {
  return Array.isArray(option.children) && option.children.length > 0;
}

export function findCascaderOption(
  options: CascaderOption[],
  value: string
): CascaderOption | undefined {
  return options.find((option) => option.value === value);
}

export function getCascaderColumns(
  data: CascaderOption[],
  activePath: string[]
): CascaderOption[][] {
  const columns: CascaderOption[][] = [data];
  let level = data;

  for (let index = 0; index < activePath.length; index += 1) {
    const node = findCascaderOption(level, activePath[index]);

    if (!node) {
      break;
    }

    const isLast = index === activePath.length - 1;

    if (Array.isArray(node.children) && node.children.length > 0) {
      if (!isLast) {
        columns.push(node.children);
        level = node.children;
      }
      // The deepest highlighted option is intentionally not expanded
    } else {
      break;
    }
  }

  return columns;
}
