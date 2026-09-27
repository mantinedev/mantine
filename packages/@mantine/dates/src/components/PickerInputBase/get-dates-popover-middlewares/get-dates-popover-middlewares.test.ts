import { getDatesPopoverMiddlewares } from './get-dates-popover-middlewares';

function applySize(middlewares: ReturnType<typeof getDatesPopoverMiddlewares>) {
  const floating = document.createElement('div');
  const size = middlewares.size as any;
  size.apply({
    availableHeight: 300,
    availableWidth: 400,
    elements: { floating },
    rects: {},
  });
  return floating;
}

describe('@mantine/dates/get-dates-popover-middlewares', () => {
  it('sets max height variable without limiting the dropdown element', () => {
    const middlewares = getDatesPopoverMiddlewares(undefined);
    expect((middlewares.size as any).padding).toBe(8);
    const floating = applySize(middlewares);
    expect(floating.style.getPropertyValue('--dates-dropdown-max-height')).toBe('300px');
    expect(floating.style.maxHeight).toBe('');
  });

  it('calls user size apply function', () => {
    const apply = jest.fn();
    const middlewares = getDatesPopoverMiddlewares({ shift: false, size: { padding: 20, apply } });
    expect(middlewares.shift).toBe(false);
    expect((middlewares.size as any).padding).toBe(20);
    const floating = applySize(middlewares);
    expect(apply).toHaveBeenCalledTimes(1);
    expect(floating.style.getPropertyValue('--dates-dropdown-max-height')).toBe('300px');
  });

  it('applies default size styles when size is set by the user without apply function', () => {
    const floating = applySize(getDatesPopoverMiddlewares({ size: true }));
    expect(floating.style.maxHeight).toBe('300px');
    expect(floating.style.maxWidth).toBe('400px');
  });

  it('disables size middleware when size is false', () => {
    expect(getDatesPopoverMiddlewares({ size: false }).size).toBe(false);
  });
});
