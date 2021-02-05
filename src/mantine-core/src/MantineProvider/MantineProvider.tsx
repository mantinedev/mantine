import OpenColor from 'open-color';
import React from 'react';
import { ThemeProvider } from 'react-jss';

interface MantineProviderProps {
  children: React.ReactNode;
}

export default function MantineProvider({ children }: MantineProviderProps) {
  return <ThemeProvider theme={{ colors: OpenColor }}>{children}</ThemeProvider>;
}

MantineProvider.displayName = '@mantine/core/MantineProvider';
