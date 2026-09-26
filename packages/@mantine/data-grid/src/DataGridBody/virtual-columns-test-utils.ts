function resolveWidth(cell: HTMLElement) {
  const width = cell.style.width;
  const variable = width.match(/^var\((--dg-col-\d+)\)$/);
  if (!variable) {
    return parseFloat(width);
  }

  const grid = cell.closest<HTMLElement>('[role="grid"]')!;
  return parseFloat(grid.style.getPropertyValue(variable[1]));
}

function getMiddleItems(row: HTMLElement) {
  return (Array.from(row.children) as HTMLElement[]).filter(
    (item) => !item.hasAttribute('data-pinned')
  );
}

export function getVirtualColumnOffset(cell: HTMLElement) {
  let offset = 0;
  for (const item of getMiddleItems(cell.parentElement!)) {
    if (item === cell) {
      return offset;
    }
    offset += resolveWidth(item);
  }

  return offset;
}

export function getVirtualMiddleWidth(row: HTMLElement) {
  return getMiddleItems(row).reduce((sum, item) => sum + resolveWidth(item), 0);
}
