import { createElement, Suspense, useLayoutEffect } from 'react';
import { act, render, renderHook } from '@testing-library/react';
import { createStorage } from './create-storage';

describe.each(['localStorage', 'sessionStorage'] as const)('%s serializer updates', (type) => {
  const useStorage = createStorage<string>(type, 'use-storage');

  beforeEach(() => {
    window[type].clear();
  });

  it('keeps the codec paired with a retained setter for the previous key', () => {
    const { result, rerender } = renderHook(
      ({ storageKey }) =>
        useStorage({
          key: storageKey,
          defaultValue: 'initial',
          serialize: (value) => `${storageKey}:${value}`,
          deserialize: (value) => value?.split(':')[1] ?? '',
        }),
      { initialProps: { storageKey: 'first' } }
    );
    const oldSetter = result.current[1];

    rerender({ storageKey: 'second' });
    act(() => oldSetter('saved'));

    expect(window[type].getItem('first')).toBe('first:saved');
  });

  it('does not adopt the codec from a suspended render', () => {
    const pending = new Promise<void>(() => {});
    const { result, rerender } = renderHook(
      ({ prefix, suspend }) => {
        const storage = useStorage({
          key: 'concurrent',
          defaultValue: 'initial',
          serialize: (value) => `${prefix}:${value}`,
          deserialize: (value) => value?.split(':')[1] ?? '',
        });
        if (suspend) {
          throw pending;
        }
        return storage;
      },
      {
        initialProps: { prefix: 'v1', suspend: false },
        wrapper: ({ children }) => createElement(Suspense, { fallback: null }, children),
      }
    );

    rerender({ prefix: 'v2', suspend: true });
    act(() => result.current[1]('next'));

    expect(window[type].getItem('concurrent')).toBe('v1:next');
  });

  it.each([false, true])(
    'uses the latest serializer with functional updater %s',
    async (update) => {
      const { result, rerender } = renderHook(
        ({ prefix }) =>
          useStorage({
            key: 'formatter',
            defaultValue: 'initial',
            serialize: (value) => `${prefix}:${value}`,
            deserialize: (value) => value?.split(':')[1] ?? '',
          }),
        { initialProps: { prefix: 'v1' } }
      );

      rerender({ prefix: 'v2' });
      await act(async () => result.current[1](update ? (value) => `${value}-next` : 'next'));

      const expected = update ? 'initial-next' : 'next';
      expect(window[type].getItem('formatter')).toBe(`v2:${expected}`);
      expect(result.current[0]).toBe(expected);
    }
  );

  it('keeps a changed serializer and deserializer consistent', () => {
    const { result, rerender } = renderHook(
      ({ prefix }) =>
        useStorage({
          key: 'versioned',
          defaultValue: 'initial',
          getInitialValueInEffect: false,
          serialize: (value) => `${prefix}:${value}`,
          deserialize: (value) => {
            if (!value?.startsWith(`${prefix}:`)) {
              throw new Error(`Expected ${prefix} encoding`);
            }
            return value.slice(prefix.length + 1);
          },
        }),
      { initialProps: { prefix: 'v1' } }
    );

    rerender({ prefix: 'v2' });
    act(() => result.current[1]('next'));

    expect(window[type].getItem('versioned')).toBe('v2:next');
    expect(result.current[0]).toBe('next');
  });

  it('uses the current codec for a layout-effect write after changing keys', () => {
    const { result, rerender } = renderHook(
      ({ storageKey }) => {
        const storage = useStorage({
          key: storageKey,
          defaultValue: 'initial',
          serialize: (value) => `${storageKey}:${value}`,
          deserialize: (value) =>
            value?.startsWith(`${storageKey}:`) ? value.slice(storageKey.length + 1) : 'invalid',
        });
        const setValue = storage[1];
        useLayoutEffect(() => {
          setValue('saved');
        }, [storageKey, setValue]);
        return storage;
      },
      { initialProps: { storageKey: 'first' } }
    );

    rerender({ storageKey: 'second' });

    expect(window[type].getItem('second')).toBe('second:saved');
    expect(result.current[0]).toBe('saved');
  });

  it('uses the current serializer when a child writes from a layout effect', () => {
    function Child({ write, prefix }: { write: (value: string) => void; prefix: string }) {
      useLayoutEffect(() => {
        write('saved');
      }, [prefix, write]);
      return null;
    }

    function Parent({ prefix }: { prefix: string }) {
      const [, write] = useStorage({
        key: 'child',
        serialize: (value) => `${prefix}:${value}`,
        deserialize: (value) => value?.split(':')[1] ?? '',
      });
      return createElement(Child, { write, prefix });
    }

    const { rerender } = render(createElement(Parent, { prefix: 'v1' }));
    rerender(createElement(Parent, { prefix: 'v2' }));
    expect(window[type].getItem('child')).toBe('v2:saved');
  });
});
