import React from 'react';
import { DEFAULT_THEME } from '../../../theme';

export const demoBase: Partial<MantineDemo> = {
  wrapper: ({ children }: { children: React.ReactNode }) => (
    <div style={{ maxWidth: 340, margin: 'auto' }}>{children}</div>
  ),
  background: (colorScheme) =>
    colorScheme === 'dark' ? DEFAULT_THEME.colors.dark[7] : DEFAULT_THEME.colors.gray[0],
};
