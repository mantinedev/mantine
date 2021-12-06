import React from 'react';
import { MantineProvider } from '@mantine/core';
import rtlPlugin from 'stylis-plugin-rtl';

interface RltProviderProps {
  children: React.ReactNode;
}

export function RtlProvider({ children }: RltProviderProps) {
  return (
    <MantineProvider emotionOptions={{ key: 'mantine', stylisPlugins: [rtlPlugin as any] }}>
      <div dir="rtl">{children}</div>
    </MantineProvider>
  );
}
