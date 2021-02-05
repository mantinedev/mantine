import React from 'react';
import { ThemeProvider } from 'react-jss';
import defaultTheme from '../default-theme';

interface MantineProviderProps {
  children: React.ReactNode;
}

export default function MantineProvider({ children }: MantineProviderProps) {
  return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>;
}

MantineProvider.displayName = '@mantine/core/MantineProvider';
