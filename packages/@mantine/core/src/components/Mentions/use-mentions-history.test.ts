import { renderHook } from '@testing-library/react';
import { useMentionsHistory } from './use-mentions-history';

describe('@mantine/core/Mentions/use-mentions-history', () => {
  let now = 1000;
  let nowSpy: jest.SpyInstance;

  beforeEach(() => {
    now = 1000;
    nowSpy = jest.spyOn(Date, 'now').mockImplementation(() => now);
  });

  afterEach(() => {
    nowSpy.mockRestore();
  });

  it('undoes and redoes entries, restoring the caret before and after the edit', () => {
    const { result } = renderHook(() => useMentionsHistory('', 0));
    result.current.push('a', 1, 0, 'paste');
    result.current.push('ab', 2, 1, 'paste');

    expect(result.current.undo()).toEqual({ value: 'a', caret: 1 });
    expect(result.current.undo()).toEqual({ value: '', caret: 0 });
    expect(result.current.undo()).toBeNull();
    expect(result.current.redo()).toEqual({ value: 'a', caret: 1 });
    expect(result.current.redo()).toEqual({ value: 'ab', caret: 2 });
    expect(result.current.redo()).toBeNull();
  });

  it('coalesces consecutive input entries within the coalescing window', () => {
    const { result } = renderHook(() => useMentionsHistory('', 0));
    result.current.push('a', 1, 0, 'input');
    now += 100;
    result.current.push('ab', 2, 1, 'input');
    now += 1000;
    result.current.push('abc', 3, 2, 'input');

    expect(result.current.undo()).toEqual({ value: 'ab', caret: 2 });
    expect(result.current.undo()).toEqual({ value: '', caret: 0 });
  });

  it('does not coalesce input with other change types', () => {
    const { result } = renderHook(() => useMentionsHistory('', 0));
    result.current.push('a', 1, 0, 'input');
    result.current.push('a@[B](b)', 2, 1, 'mention-add');
    result.current.push('a@[B](b)x', 3, 2, 'input');

    expect(result.current.undo()).toEqual({ value: 'a@[B](b)', caret: 2 });
    expect(result.current.undo()).toEqual({ value: 'a', caret: 1 });
  });

  it('drops redo entries after a new edit', () => {
    const { result } = renderHook(() => useMentionsHistory('', 0));
    result.current.push('a', 1, 0, 'paste');
    result.current.undo();
    result.current.push('b', 1, 0, 'paste');
    expect(result.current.redo()).toBeNull();
  });

  it('records external values once and ignores the current value', () => {
    const { result } = renderHook(() => useMentionsHistory('a', 1));
    result.current.syncExternal('a', 1);
    expect(result.current.undo()).toBeNull();
    result.current.syncExternal('external', 8);
    expect(result.current.undo()).toEqual({ value: 'a', caret: 8 });
  });
});
