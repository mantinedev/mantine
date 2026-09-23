import { Activity, memo } from 'react';
import { render, renderHook } from '@testing-library/react';
import { useDidUpdate } from './use-did-update';

function Child({ value, onUpdate }: { value: string; onUpdate: (value: string) => void }) {
  useDidUpdate(() => onUpdate(value), [value]);
  return <div>{value}</div>;
}

const NoDepsChild = memo(({ onUpdate }: { onUpdate: () => void }) => {
  useDidUpdate(onUpdate);
  return null;
});

describe('@mantine/hooks/use-did-update', () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  it('calls `fn` on `dependencies` change', () => {
    const fn = jest.fn();
    let dependency = '';
    const { rerender } = renderHook(() => useDidUpdate(fn, [dependency]));
    expect(fn).not.toHaveBeenCalled();
    //Change dependency and rerender
    dependency = 'foo';
    rerender();
    expect(fn).toHaveBeenCalled();
  });

  it('does not call `fn` on the initial mount', () => {
    const fn = jest.fn();
    renderHook(() => useDidUpdate(fn, ['value']));
    expect(fn).not.toHaveBeenCalled();
  });

  it('calls cleanup returned by `fn` before the next run', () => {
    const cleanup = jest.fn();
    let dependency = 'a';
    const { rerender } = renderHook(() => useDidUpdate(() => cleanup, [dependency]));

    dependency = 'b';
    rerender();
    expect(cleanup).not.toHaveBeenCalled();

    dependency = 'c';
    rerender();
    expect(cleanup).toHaveBeenCalledTimes(1);
  });

  it('fires on every rerender when no dependency array is provided', () => {
    const fn = jest.fn();
    const { rerender } = renderHook(() => useDidUpdate(fn));
    expect(fn).not.toHaveBeenCalled();
    rerender();
    expect(fn).toHaveBeenCalledTimes(1);
    rerender();
    expect(fn).toHaveBeenCalledTimes(2);
  });

  it('calls `fn` for a `dependencies` change that happened while hidden by `Activity`', () => {
    const fn = jest.fn();

    const { rerender } = render(
      <Activity mode="visible">
        <Child value="a" onUpdate={fn} />
      </Activity>
    );

    rerender(
      <Activity mode="hidden">
        <Child value="b" onUpdate={fn} />
      </Activity>
    );

    rerender(
      <Activity mode="visible">
        <Child value="b" onUpdate={fn} />
      </Activity>
    );

    expect(fn).toHaveBeenCalledTimes(1);
    expect(fn).toHaveBeenCalledWith('b');
  });

  it('does not call `fn` when `Activity` is revealed without a `dependencies` change', () => {
    const fn = jest.fn();

    const { rerender } = render(
      <Activity mode="visible">
        <Child value="a" onUpdate={fn} />
      </Activity>
    );

    rerender(
      <Activity mode="hidden">
        <Child value="a" onUpdate={fn} />
      </Activity>
    );

    rerender(
      <Activity mode="visible">
        <Child value="a" onUpdate={fn} />
      </Activity>
    );

    expect(fn).not.toHaveBeenCalled();
  });

  it('does not call `fn` without a dependency array when the effect is recreated without a rerender', () => {
    const fn = jest.fn();

    const { rerender } = render(
      <Activity mode="visible">
        <NoDepsChild onUpdate={fn} />
      </Activity>
    );

    rerender(
      <Activity mode="hidden">
        <NoDepsChild onUpdate={fn} />
      </Activity>
    );

    rerender(
      <Activity mode="visible">
        <NoDepsChild onUpdate={fn} />
      </Activity>
    );

    expect(fn).not.toHaveBeenCalled();
  });
});
