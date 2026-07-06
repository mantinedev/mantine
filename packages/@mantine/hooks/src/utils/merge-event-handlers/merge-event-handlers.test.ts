import { mergeEventHandlers } from './merge-event-handlers';

describe('@mantine/hooks/merge-event-handlers', () => {
  it('calls all handlers registered for the same key in order', () => {
    const calls: string[] = [];
    const merged = mergeEventHandlers(
      { onClick: () => calls.push('a') },
      { onClick: () => calls.push('b') },
      { onClick: () => calls.push('c') }
    );

    merged.onClick!();
    expect(calls).toEqual(['a', 'b', 'c']);
  });

  it('forwards arguments to every handler', () => {
    const first = jest.fn();
    const second = jest.fn();
    const merged = mergeEventHandlers({ onKeyDown: first }, { onKeyDown: second });

    const event = { key: 'ArrowUp' };
    merged.onKeyDown!(event as any);

    expect(first).toHaveBeenCalledWith(event);
    expect(second).toHaveBeenCalledWith(event);
  });

  it('keeps handlers that are present in only one object', () => {
    const onKeyDown = jest.fn();
    const onKeyUp = jest.fn();
    const merged = mergeEventHandlers({ onKeyDown }, { onKeyUp });

    merged.onKeyDown!({} as any);
    merged.onKeyUp!({} as any);

    expect(onKeyDown).toHaveBeenCalledTimes(1);
    expect(onKeyUp).toHaveBeenCalledTimes(1);
  });

  it('ignores nullish arguments and non-function values', () => {
    const onClick = jest.fn();
    const merged = mergeEventHandlers(undefined, null, false, { onClick, id: 'test' } as any);

    expect(Object.keys(merged)).toEqual(['onClick']);
    merged.onClick!({} as any);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('does not include non-enumerable properties', () => {
    const start = jest.fn();
    const bundle: Record<string, any> = { onPointerDown: jest.fn() };
    Object.defineProperty(bundle, 'start', { value: start });

    const merged = mergeEventHandlers(bundle);
    expect(Object.keys(merged)).toEqual(['onPointerDown']);
    expect(merged.start).toBeUndefined();
  });
});
