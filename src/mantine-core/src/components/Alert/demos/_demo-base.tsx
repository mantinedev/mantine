import React from 'react';

export const demoBase: Partial<MantineDemo> = {
  wrapper: ({ children }: { children: React.ReactNode }) => (
    <div style={{ maxWidth: 400, margin: 'auto' }}>{children}</div>
  ),
};
