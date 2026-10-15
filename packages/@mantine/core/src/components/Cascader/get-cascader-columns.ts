import type { CascaderOption } from './Cascader';

export function cascaderOptionHasChildren(option: CascaderOption): boolean {
  return Array.isArray(option.children) && option.children.length > 0;
}

export function getCascaderOptionText(option: CascaderOption): string {
  return typeof option.label === 'string' || typeof option.label === 'number'
    ? String(option.label)
    : option.value;
}

export function findCascaderOption(
  options: CascaderOption[],
  value: string
): CascaderOption | undefined {
  return options.find((option) => option.value === value);
}

export function findEnabledCascaderOptionIndex(
  options: CascaderOption[],
  from: number,
  direction: 1 | -1
): number {
  for (let index = from + direction; index >= 0 && index < options.length; index += direction) {
    if (!options[index].disabled) {
      return index;
    }
  }

  return -1;
}

export function getCascaderIndexPath(data: CascaderOption[], path: string[]): number[] {
  const indexPath: number[] = [];
  let level: CascaderOption[] | undefined = data;

  for (const value of path) {
    const index: number = level ? level.findIndex((option) => option.value === value) : -1;

    if (index < 0) {
      break;
    }

    indexPath.push(index);
    level = level![index].children;
  }

  return indexPath;
}

export function getCascaderColumns(
  data: CascaderOption[],
  activePath: string[]
): CascaderOption[][] {
  const columns: CascaderOption[][] = [data];
  let level = data;

  for (let index = 0; index < activePath.length - 1; index += 1) {
    const node = findCascaderOption(level, activePath[index]);

    if (!node || !cascaderOptionHasChildren(node)) {
      break;
    }

    columns.push(node.children!);
    level = node.children!;
  }

  return columns;
}
