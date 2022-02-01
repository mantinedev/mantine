import React from 'react';
import { Meta } from '@storybook/react';
import { useLocalStorageJsonValue } from './use-local-storage-json-value';

export default {
  title: '@mantine/hooks/use-local-storage-json-value',
} as Meta;

export function Example() {
  const [value, setValue] = useLocalStorageJsonValue<string>({
    key: '@mantine/localStorage/val',
    defaultValue: 'Value persists through reloads and changes across multiple tabs',
  });

  return (
    <div style={{ padding: 20 }}>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
    </div>
  );
}
