import { act, render, renderHook } from '@testing-library/react';
import { localStorageColorSchemeManager } from '../color-scheme-managers';
import { MantineProvider } from '../MantineProvider';
import { useMantineColorScheme } from './use-mantine-color-scheme';

function Wrapper({ children }: { children: React.ReactNode }) {
  return <MantineProvider defaultColorScheme="dark">{children}</MantineProvider>;
}

describe('@mantine/core/MantineProvider/use-mantine-color-scheme', () => {
  it('returns color scheme from MantineProvider context', () => {
    const { result } = renderHook(() => useMantineColorScheme(), { wrapper: Wrapper });
    expect(result.current.colorScheme).toBe('dark');
  });

  it('follows external changes after a forced color scheme is removed', () => {
    const key = 'external-color-scheme';
    const manager = localStorageColorSchemeManager({ key });
    const set = jest.spyOn(manager, 'set');
    const root = document.createElement('div');

    function CurrentScheme() {
      return <output>{useMantineColorScheme().colorScheme}</output>;
    }

    const provider = (forceColorScheme?: 'light' | 'dark') => (
      <MantineProvider
        colorSchemeManager={manager}
        getRootElement={() => root}
        forceColorScheme={forceColorScheme}
      >
        <CurrentScheme />
      </MantineProvider>
    );
    const notify = (newValue: string) =>
      act(() => {
        window.dispatchEvent(
          new StorageEvent('storage', { key, newValue, storageArea: window.localStorage })
        );
      });

    const { getByRole, rerender } = render(provider('light'));
    const scheme = getByRole('status');
    notify('dark');
    expect(scheme).toHaveTextContent('light');
    expect(root).toHaveAttribute('data-mantine-color-scheme', 'light');

    rerender(provider());
    expect(scheme).toHaveTextContent('dark');
    expect(root).toHaveAttribute('data-mantine-color-scheme', 'dark');

    notify('light');
    expect(scheme).toHaveTextContent('light');
    expect(root).toHaveAttribute('data-mantine-color-scheme', 'light');
    expect(set).not.toHaveBeenCalled();
  });

  describe('with default values', () => {
    function DefaultWrapper({ children }: { children: React.ReactNode }) {
      return <MantineProvider>{children}</MantineProvider>;
    }

    it('returns the correct color schema based on prefers-color-scheme', () => {
      const { result } = renderHook(() => useMantineColorScheme(), { wrapper: DefaultWrapper });
      expect(result.current.colorScheme).toBe('light');
    });
  });
});
