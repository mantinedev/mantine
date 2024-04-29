import React from 'react';
import { act, RenderResult, render as testingLibraryRender } from '@testing-library/react';
import { MantineProvider, MantineProviderProps, MantineThemeOverride } from '@mantine/core';

export function render(
  ui: React.ReactNode,
  themeOverride?: MantineThemeOverride,
  providerProps?: Omit<MantineProviderProps, 'theme'>
) : RenderResult {
  return testingLibraryRender(<>{ui}</>, {
    wrapper: ({ children }: { children: React.ReactNode }) => (
      <MantineProvider theme={themeOverride} {...providerProps}>
        {children}
      </MantineProvider>
    ),
  });
}

export async function renderWithAct(ui: React.ReactNode): Promise<RenderResult> {
  let result: RenderResult | null = null;
  await act(async () => {
    result = render(ui);
  });
  return result!;
}
