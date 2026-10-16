import {
  findKeyboardDropSlot,
  getKeyboardDropDepthRange,
  getKeyboardDropPayload,
  getKeyboardDropRows,
  KeyboardDropRow,
} from './keyboard-drag-drop';

const rows: KeyboardDropRow[] = [
  { value: 'src', level: 1, hasChildren: true },
  { value: 'src/a', level: 2, hasChildren: false },
  { value: 'src/b', level: 2, hasChildren: false },
  { value: 'lib', level: 1, hasChildren: true },
  { value: 'readme', level: 1, hasChildren: false },
];

const allowAll = () => true;

describe('@mantine/core/Tree/keyboard-drag-drop', () => {
  it('removes the dragged node and its descendants from rows', () => {
    const result = getKeyboardDropRows(rows, 'src');
    expect(result!.rows.map((row) => row.value)).toEqual(['lib', 'readme']);
    expect(result!.start).toEqual({ gap: 0, depth: 1 });
  });

  it('returns null when the dragged node is not rendered', () => {
    expect(getKeyboardDropRows(rows, 'missing')).toBeNull();
  });

  it('returns depth range of a gap', () => {
    expect(getKeyboardDropDepthRange(rows, 0)).toEqual({ min: 1, max: 1 });
    expect(getKeyboardDropDepthRange(rows, 1)).toEqual({ min: 2, max: 2 });
    expect(getKeyboardDropDepthRange(rows, 3)).toEqual({ min: 1, max: 2 });
    expect(getKeyboardDropDepthRange(rows, 4)).toEqual({ min: 1, max: 2 });
    expect(getKeyboardDropDepthRange(rows, 5)).toEqual({ min: 1, max: 1 });
  });

  it('converts slots to onDragDrop payloads', () => {
    expect(getKeyboardDropPayload(rows, { gap: 0, depth: 1 }, 'x')).toEqual({
      draggedNode: 'x',
      targetNode: 'src',
      position: 'before',
    });
    expect(getKeyboardDropPayload(rows, { gap: 3, depth: 2 }, 'x')).toEqual({
      draggedNode: 'x',
      targetNode: 'src/b',
      position: 'after',
    });
    expect(getKeyboardDropPayload(rows, { gap: 3, depth: 1 }, 'x')).toEqual({
      draggedNode: 'x',
      targetNode: 'lib',
      position: 'before',
    });
    expect(getKeyboardDropPayload(rows, { gap: 4, depth: 2 }, 'x')).toEqual({
      draggedNode: 'x',
      targetNode: 'lib',
      position: 'inside',
    });
    expect(getKeyboardDropPayload(rows, { gap: 5, depth: 1 }, 'x')).toEqual({
      draggedNode: 'x',
      targetNode: 'readme',
      position: 'after',
    });
  });

  it('moves up and down between gaps, keeping the closest depth', () => {
    const input = { rows, start: { gap: 5, depth: 1 }, draggedValue: 'x', isAllowed: allowAll };
    expect(
      findKeyboardDropSlot({ ...input, current: { gap: 3, depth: 2 }, direction: 'up' })
    ).toEqual({ gap: 2, depth: 2 });
    expect(
      findKeyboardDropSlot({ ...input, current: { gap: 2, depth: 2 }, direction: 'down' })
    ).toEqual({ gap: 3, depth: 2 });
    expect(
      findKeyboardDropSlot({ ...input, current: { gap: 3, depth: 2 }, direction: 'down' })
    ).toEqual({ gap: 4, depth: 2 });
    expect(
      findKeyboardDropSlot({ ...input, current: { gap: 4, depth: 2 }, direction: 'down' })
    ).toEqual({ gap: 5, depth: 1 });
    expect(
      findKeyboardDropSlot({ ...input, current: { gap: 5, depth: 1 }, direction: 'down' })
    ).toBeNull();
    expect(
      findKeyboardDropSlot({ ...input, current: { gap: 0, depth: 1 }, direction: 'up' })
    ).toBeNull();
  });

  it('changes depth within a gap', () => {
    const input = { rows, start: { gap: 5, depth: 1 }, draggedValue: 'x', isAllowed: allowAll };
    expect(
      findKeyboardDropSlot({ ...input, current: { gap: 3, depth: 2 }, direction: 'out' })
    ).toEqual({ gap: 3, depth: 1 });
    expect(
      findKeyboardDropSlot({ ...input, current: { gap: 3, depth: 1 }, direction: 'in' })
    ).toEqual({ gap: 3, depth: 2 });
    expect(
      findKeyboardDropSlot({ ...input, current: { gap: 3, depth: 2 }, direction: 'in' })
    ).toBeNull();
    expect(
      findKeyboardDropSlot({ ...input, current: { gap: 1, depth: 2 }, direction: 'out' })
    ).toBeNull();
  });

  it('jumps to the first and last gap', () => {
    const input = { rows, start: { gap: 5, depth: 1 }, draggedValue: 'x', isAllowed: allowAll };
    expect(
      findKeyboardDropSlot({ ...input, current: { gap: 3, depth: 2 }, direction: 'first' })
    ).toEqual({ gap: 0, depth: 1 });
    expect(
      findKeyboardDropSlot({ ...input, current: { gap: 3, depth: 2 }, direction: 'last' })
    ).toEqual({ gap: 5, depth: 1 });
    expect(
      findKeyboardDropSlot({ ...input, current: { gap: 5, depth: 1 }, direction: 'last' })
    ).toBeNull();
  });

  it('skips slots rejected by isAllowed, except the start slot', () => {
    const input = {
      rows,
      start: { gap: 5, depth: 1 },
      draggedValue: 'x',
      isAllowed: (payload: { position: string }) => payload.position !== 'inside',
    };
    expect(
      findKeyboardDropSlot({ ...input, current: { gap: 3, depth: 2 }, direction: 'down' })
    ).toEqual({ gap: 4, depth: 1 });

    const rejectAll = { ...input, isAllowed: () => false };
    expect(
      findKeyboardDropSlot({ ...rejectAll, current: { gap: 5, depth: 1 }, direction: 'up' })
    ).toBeNull();
    expect(
      findKeyboardDropSlot({ ...rejectAll, current: { gap: 0, depth: 1 }, direction: 'down' })
    ).toEqual({ gap: 5, depth: 1 });
  });
});

describe('@mantine/core/Tree/keyboard-drag-drop/inside-parent', () => {
  it('uses inside parent instead of after the last child when only inside is allowed', () => {
    const isAllowed = (payload: { position: string }) => payload.position === 'inside';
    expect(getKeyboardDropPayload(rows, { gap: 3, depth: 2 }, 'x', isAllowed)).toEqual({
      draggedNode: 'x',
      targetNode: 'src',
      position: 'inside',
    });
    expect(getKeyboardDropPayload(rows, { gap: 3, depth: 2 }, 'x')).toEqual({
      draggedNode: 'x',
      targetNode: 'src/b',
      position: 'after',
    });
    expect(
      findKeyboardDropSlot({
        rows,
        start: { gap: 5, depth: 1 },
        current: { gap: 5, depth: 1 },
        direction: 'up',
        draggedValue: 'x',
        isAllowed,
      })
    ).toEqual({ gap: 4, depth: 2 });
  });
});
