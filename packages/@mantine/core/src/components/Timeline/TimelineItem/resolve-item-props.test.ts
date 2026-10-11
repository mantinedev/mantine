import { TimelineContextValue } from '../Timeline.context';
import { getItemActiveState, isCurrentItem, resolveItemProps } from './resolve-item-props';

function getContext(overrides?: Partial<TimelineContextValue>): TimelineContextValue {
  return {
    getStyles: (() => ({})) as any,
    active: 1,
    itemsCount: 3,
    reverseActive: false,
    align: 'left',
    ...overrides,
  };
}

describe('@mantine/core/Timeline/get-item-active-state', () => {
  it('is inactive when the item index is not known', () => {
    expect(getItemActiveState(undefined, getContext({ active: 5 }))).toStrictEqual({
      active: false,
      lineActive: false,
    });
  });

  it('marks every item up to the active one as active', () => {
    const ctx = getContext({ active: 1 });
    expect(getItemActiveState(0, ctx).active).toBe(true);
    expect(getItemActiveState(1, ctx).active).toBe(true);
    expect(getItemActiveState(2, ctx).active).toBe(false);
  });

  it('marks the line as active one item behind', () => {
    const ctx = getContext({ active: 1 });
    expect(getItemActiveState(0, ctx).lineActive).toBe(true);
    expect(getItemActiveState(1, ctx).lineActive).toBe(false);
  });

  it('counts from the last item when reverseActive is set', () => {
    const ctx = getContext({ active: 0, itemsCount: 3, reverseActive: true });
    expect(getItemActiveState(2, ctx).active).toBe(true);
    expect(getItemActiveState(1, ctx).active).toBe(false);
    expect(getItemActiveState(0, ctx).active).toBe(false);
  });

  it('keeps the line in step with the item when reverseActive is set', () => {
    const ctx = getContext({ active: 1, itemsCount: 3, reverseActive: true });
    expect(getItemActiveState(2, ctx)).toStrictEqual({ active: true, lineActive: true });
    expect(getItemActiveState(1, ctx)).toStrictEqual({ active: true, lineActive: true });
    expect(getItemActiveState(0, ctx)).toStrictEqual({ active: false, lineActive: false });
  });
});

describe('@mantine/core/Timeline/resolve-item-props', () => {
  const input = { index: 2, active: undefined, lineActive: undefined, alternate: undefined };

  it('derives active and lineActive from the context', () => {
    const resolved = resolveItemProps(input, getContext({ active: 2 }));
    expect(resolved.active).toBe(true);
    expect(resolved.lineActive).toBe(false);
  });

  it('gives active and lineActive declared on the item precedence', () => {
    expect(resolveItemProps({ ...input, active: true }, getContext({ active: -1 })).active).toBe(
      true
    );
    expect(resolveItemProps({ ...input, active: false }, getContext({ active: 5 })).active).toBe(
      false
    );
    expect(
      resolveItemProps({ ...input, lineActive: true }, getContext({ active: -1 })).lineActive
    ).toBe(true);
  });

  it('resolves bodyFirst from align and alternate', () => {
    const left = getContext({ align: 'left' });
    const right = getContext({ align: 'right' });

    expect(resolveItemProps({ ...input, alternate: true }, left).bodyFirst).toBe(true);
    expect(resolveItemProps({ ...input, alternate: undefined }, left).bodyFirst).toBe(false);
    expect(resolveItemProps({ ...input, alternate: true }, right).bodyFirst).toBe(false);
    expect(resolveItemProps({ ...input, alternate: undefined }, right).bodyFirst).toBe(true);
  });

  it('passes the align of the context through', () => {
    expect(resolveItemProps(input, getContext({ align: 'right' })).align).toBe('right');
  });
});

describe('@mantine/core/Timeline/is-current-item', () => {
  it('marks only the active boundary item as current', () => {
    const ctx = getContext({ active: 1, itemsCount: 3 });
    expect(isCurrentItem(0, ctx)).toBe(false);
    expect(isCurrentItem(1, ctx)).toBe(true);
    expect(isCurrentItem(2, ctx)).toBe(false);
    expect(isCurrentItem(undefined, ctx)).toBe(false);
    expect(isCurrentItem(0, getContext({ active: -1 }))).toBe(false);
    expect(isCurrentItem(1, getContext({ active: 1, itemsCount: 3, reverseActive: true }))).toBe(
      true
    );
  });
});
