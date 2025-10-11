import { renderHook } from '@testing-library/react';
import { createOptionalContext } from './create-optional-context';

interface ContextType {
  value: number;
  onChange: (value: number) => void;
}

describe('@mantine/core/create-optional-context', () => {
  it('returns context value when useSafeContext hook was called within Provider', () => {
    const fn = jest.fn();
    const [Provider, useCtx] = createOptionalContext<ContextType>();
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <Provider value={{ value: 100, onChange: fn }}>{children}</Provider>
    );

    const view = renderHook(() => useCtx(), { wrapper });
    expect(view.result.current).toStrictEqual({ value: 100, onChange: fn });
  });

  it('returns null when useSafeContext hook was called without Provider', () => {
    const [, useCtx] = createOptionalContext<ContextType>();
    const wrapper = ({ children }: { children: React.ReactNode }) => children;

    const view = renderHook(() => useCtx(), { wrapper });
    expect(view.result.current).toBe(null);
  });
});
