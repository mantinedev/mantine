import type { TreeDragDropPayload } from '../move-tree-node/move-tree-node';

export interface KeyboardDropRow {
  value: string;
  level: number;
  hasChildren: boolean;
}

export interface KeyboardDropSlot {
  gap: number;
  depth: number;
}

export type KeyboardDropDirection = 'up' | 'down' | 'first' | 'last' | 'in' | 'out';

export function getKeyboardDropRows(rows: KeyboardDropRow[], draggedValue: string) {
  const draggedIndex = rows.findIndex((row) => row.value === draggedValue);

  if (draggedIndex === -1) {
    return null;
  }

  const draggedLevel = rows[draggedIndex].level;
  let end = draggedIndex + 1;

  while (end < rows.length && rows[end].level > draggedLevel) {
    end += 1;
  }

  return {
    rows: [...rows.slice(0, draggedIndex), ...rows.slice(end)],
    start: { gap: draggedIndex, depth: draggedLevel },
  };
}

export function getKeyboardDropDepthRange(rows: KeyboardDropRow[], gap: number) {
  const above = rows[gap - 1];
  const below = rows[gap];
  const min = below ? below.level : 1;
  const max = above ? above.level + (above.hasChildren ? 1 : 0) : 1;
  return { min, max: Math.max(min, max) };
}

const allowAll = () => true;

function findPreviousRow(rows: KeyboardDropRow[], from: number, level: number) {
  for (let index = from; index >= 0; index -= 1) {
    if (rows[index].level === level) {
      return rows[index];
    }

    if (rows[index].level < level) {
      return null;
    }
  }

  return null;
}

export function getKeyboardDropPayload(
  rows: KeyboardDropRow[],
  slot: KeyboardDropSlot,
  draggedValue: string,
  isAllowed: (payload: TreeDragDropPayload) => boolean = allowAll
): TreeDragDropPayload | null {
  const above = rows[slot.gap - 1];
  const below = rows[slot.gap];

  if (below && slot.depth === below.level) {
    return { draggedNode: draggedValue, targetNode: below.value, position: 'before' };
  }

  if (!above) {
    return null;
  }

  if (slot.depth === above.level + 1) {
    return { draggedNode: draggedValue, targetNode: above.value, position: 'inside' };
  }

  const previous = findPreviousRow(rows, slot.gap - 1, slot.depth);

  if (!previous) {
    return null;
  }

  const after: TreeDragDropPayload = {
    draggedNode: draggedValue,
    targetNode: previous.value,
    position: 'after',
  };
  const parent = findPreviousRow(rows, rows.indexOf(previous) - 1, slot.depth - 1);

  if (isAllowed(after) || !parent) {
    return after;
  }

  const inside: TreeDragDropPayload = {
    draggedNode: draggedValue,
    targetNode: parent.value,
    position: 'inside',
  };

  return isAllowed(inside) ? inside : after;
}

interface FindKeyboardDropSlotInput {
  rows: KeyboardDropRow[];
  current: KeyboardDropSlot;
  start: KeyboardDropSlot;
  direction: KeyboardDropDirection;
  draggedValue: string;
  isAllowed: (payload: TreeDragDropPayload) => boolean;
}

export function isSameKeyboardDropSlot(a: KeyboardDropSlot, b: KeyboardDropSlot) {
  return a.gap === b.gap && a.depth === b.depth;
}

function getAllowedDepths(
  rows: KeyboardDropRow[],
  gap: number,
  start: KeyboardDropSlot,
  draggedValue: string,
  isAllowed: (payload: TreeDragDropPayload) => boolean
) {
  const { min, max } = getKeyboardDropDepthRange(rows, gap);
  const depths: number[] = [];

  for (let depth = min; depth <= max; depth += 1) {
    const slot = { gap, depth };
    const payload = getKeyboardDropPayload(rows, slot, draggedValue, isAllowed);

    if (isSameKeyboardDropSlot(slot, start) || (payload && isAllowed(payload))) {
      depths.push(depth);
    }
  }

  return depths;
}

function getClosestDepth(depths: number[], preferred: number) {
  return depths.reduce((closest, depth) =>
    Math.abs(depth - preferred) < Math.abs(closest - preferred) ? depth : closest
  );
}

export function findKeyboardDropSlot({
  rows,
  current,
  start,
  direction,
  draggedValue,
  isAllowed,
}: FindKeyboardDropSlotInput): KeyboardDropSlot | null {
  if (direction === 'in' || direction === 'out') {
    const depths = getAllowedDepths(rows, current.gap, start, draggedValue, isAllowed);
    const candidates =
      direction === 'in'
        ? depths.filter((depth) => depth > current.depth)
        : depths.filter((depth) => depth < current.depth).reverse();

    return candidates.length > 0 ? { gap: current.gap, depth: candidates[0] } : null;
  }

  const step = direction === 'up' || direction === 'last' ? -1 : 1;
  const from = direction === 'first' ? 0 : direction === 'last' ? rows.length : current.gap + step;

  for (let gap = from; gap >= 0 && gap <= rows.length; gap += step) {
    if ((direction === 'first' || direction === 'last') && gap === current.gap) {
      return null;
    }

    const depths = getAllowedDepths(rows, gap, start, draggedValue, isAllowed);

    if (depths.length > 0) {
      return { gap, depth: getClosestDepth(depths, current.depth) };
    }
  }

  return null;
}
