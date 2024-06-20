import { renderHook } from '@testing-library/react';
import { MantineProvider } from '../MantineProvider';
import { useProps } from './use-props';

function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <MantineProvider
      theme={{
        components: {
          TestComponent: {
            defaultProps: {
              test: 'theme-default-prop',
            },
          },
        },
      }}
    >
      {children}
    </MantineProvider>
  );
}

describe('@mantine/core/use-component-default-props', () => {
  it('returns default props from MantineProvider context', () => {
    const { result } = renderHook(() => useProps<{ test?: string }>('TestComponent', {}, {}), {
      wrapper: Wrapper,
    });
    expect(result.current.test).toBe('theme-default-prop');
  });

  it('overrides theme default props with props passed to hook', () => {
    const { result } = renderHook(
      () => useProps<{ test?: string }>('TestComponent', {}, { test: 'direct-prop' }),
      { wrapper: Wrapper }
    );
    expect(result.current.test).toBe('direct-prop');
  });

  it('overrides component default props with props passed to hook', () => {
    const { result } = renderHook(
      () =>
        useProps<{ test?: string }>(
          'TestComponent',
          { test: 'component-prop' },
          { test: 'direct-prop' }
        ),
      { wrapper: MantineProvider }
    );
    expect(result.current.test).toBe('direct-prop');
  });
});
