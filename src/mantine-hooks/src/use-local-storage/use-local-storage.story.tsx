import React from 'react';
import { useLocalStorage } from './use-local-storage';

export default {
  title: '@mantine/hooks/use-local-storage',
};

export function Usage() {
  const [value, setValue] = useLocalStorage<string>({
    key: '@mantine/localStorage/val',
    defaultValue: 'Value persists through reloads and changes across multiple tabs',
  });

  return (
    <div style={{ padding: 20 }}>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
    </div>
  );
}

export function SerializeJson() {
  const [value, setValue] = useLocalStorage<{ mantine: string }>({
    key: '@mantine/localStorage/val',
    defaultValue: { mantine: 'is awesome' },
  });

  return (
    <div style={{ padding: 20 }}>
      <input
        value={value.mantine}
        onChange={(event) => setValue({ mantine: event.target.value })}
      />
    </div>
  );
}
