import { useState } from 'react';
import { MantineProvider } from './MantineProvider';

export default { title: 'MantineProvider' };

export function ForceColorScheme() {
  const [forceColorScheme, setForceColorScheme] = useState<'light' | 'dark' | undefined>(undefined);
  return (
    <div style={{ padding: 40 }}>
      <MantineProvider forceColorScheme={forceColorScheme} defaultColorScheme="auto">
        <button type="button" onClick={() => setForceColorScheme('light')}>
          Force light
        </button>
        <button type="button" onClick={() => setForceColorScheme('dark')}>
          Force dark
        </button>
        <button type="button" onClick={() => setForceColorScheme(undefined)}>
          Force undefined
        </button>
      </MantineProvider>
    </div>
  );
}
