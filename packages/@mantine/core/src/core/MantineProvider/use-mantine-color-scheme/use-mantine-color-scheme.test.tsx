import React from 'react';
import { renderHook } from '@testing-library/react';
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
});
