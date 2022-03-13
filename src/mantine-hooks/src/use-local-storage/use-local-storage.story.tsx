import React from 'react';
import { useLocalStorage } from './use-local-storage';

export default {
  title: '@mantine/hooks/use-local-storage-value',
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
