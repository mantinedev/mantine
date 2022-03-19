import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { createUseContext } from './create-use-context';

interface ContextType {
  foo: string;
  bar: number;
}

describe('@mantine/core/utils/create-use-context', () => {
  it('throws error if hook was rendered outside of context without default value (null)', () => {
    const [, useContext] = createUseContext<ContextType>(null);
    const hook = renderHook(() => useContext('Test.Item'));
    expect(hook.result.error).toStrictEqual(
      new Error('Test.Item component was rendered outside of Test component context')
    );
  });

  it('returns context value if hook is called outside of context with default value', () => {
    const [, useContext] = createUseContext<ContextType>({ foo: 'test', bar: 42 });
    const hook = renderHook(() => useContext('Test.Item'));
    expect(hook.result.current).toStrictEqual({ foo: 'test', bar: 42 });
  });

  it('returns context value', () => {
    const [Provider, useContext] = createUseContext<ContextType>(null);
    const wrapper = ({ children }) => (
      <Provider value={{ foo: 'test-foo', bar: 100 }}>{children}</Provider>
    );

    const hook = renderHook(() => useContext('Test.Item'), { wrapper });
    expect(hook.result.current).toStrictEqual({ foo: 'test-foo', bar: 100 });
  });
});
