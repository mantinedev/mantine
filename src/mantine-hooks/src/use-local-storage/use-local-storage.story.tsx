import React from 'react';
import { useLocalStorage } from './use-local-storage';

export default {
  title: 'Hooks/use-local-storage',
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

  const [value2, setValue2] = useLocalStorage<{ mantine: string }>({
    key: '@mantine/localStorage/val',
    defaultValue: { mantine: 'is awesome' },
  });

  const [value3, setValue3] = useLocalStorage<{ mantine: string }>({
    key: '@mantine/localStorage/another-value',
    defaultValue: { mantine: 'is awesome' },
  });

  return (
    <div style={{ padding: 20 }}>
      <input
        value={value.mantine}
        onChange={(event) => setValue({ mantine: event.target.value })}
      />
      <input
        value={value2.mantine}
        onChange={(event) => setValue2({ mantine: event.target.value })}
      />
      <input
        value={value3.mantine}
        onChange={(event) => setValue3({ mantine: event.target.value })}
      />
    </div>
  );
}

export function SerializeBoolean() {
  const [value, setValue] = useLocalStorage<boolean>({
    key: '@mantine/localStorage/val',
    defaultValue: true,
  });

  return (
    <div style={{ padding: 20 }}>
      <input
        type="checkbox"
        checked={value}
        onChange={(event) => {
          setValue(event.currentTarget.checked);
        }}
      />
    </div>
  );
}

export function MultipleHooks() {
  const [value, setValue] = useLocalStorage<string>({
    key: 'some-value',
    defaultValue: '',
  });

  const [value2] = useLocalStorage<string>({
    key: 'some-value',
    defaultValue: '',
  });

  return (
    <div style={{ padding: 20 }}>
      <input value={value} onChange={(event) => setValue(event.currentTarget.value)} />
      <input value={value2} readOnly />
    </div>
  );
}
