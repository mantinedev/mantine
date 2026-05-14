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

function CascadeWrapper({ children }: { children: React.ReactNode }) {
  return (
    <MantineProvider
      theme={{
        components: {
          Input: { defaultProps: { size: 'md', variant: 'umbrella' } },
          InputWrapper: { defaultProps: { withAsterisk: true, size: 'lg' } },
          TestComponent: { defaultProps: { variant: 'specific' } },
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

  it('merges defaults from multiple component names in array order', () => {
    const { result } = renderHook(
      () =>
        useProps<{ size?: string; variant?: string; withAsterisk?: boolean }>(
          ['Input', 'InputWrapper', 'TestComponent'],
          {},
          {}
        ),
      { wrapper: CascadeWrapper }
    );
    expect(result.current.size).toBe('lg');
    expect(result.current.variant).toBe('specific');
    expect(result.current.withAsterisk).toBe(true);
  });

  it('falls back to umbrella defaults when component-specific defaults are not set', () => {
    const { result } = renderHook(
      () => useProps<{ size?: string; variant?: string }>(['Input', 'TestComponent'], {}, {}),
      { wrapper: CascadeWrapper }
    );
    expect(result.current.size).toBe('md');
    expect(result.current.variant).toBe('specific');
  });

  it('lets caller props override every level of theme defaults', () => {
    const { result } = renderHook(
      () =>
        useProps<{ size?: string; variant?: string }>(
          ['Input', 'InputWrapper', 'TestComponent'],
          {},
          { size: 'xl', variant: 'caller' }
        ),
      { wrapper: CascadeWrapper }
    );
    expect(result.current.size).toBe('xl');
    expect(result.current.variant).toBe('caller');
  });

  it('ignores undefined or missing entries in the names array', () => {
    const { result } = renderHook(
      () =>
        useProps<{ size?: string }>(['Input', 'NonExistent', undefined, 'TestComponent'], {}, {}),
      { wrapper: CascadeWrapper }
    );
    expect(result.current.size).toBe('md');
  });
});
