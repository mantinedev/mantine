import React from 'react';
import { useSessionStorage } from './use-session-storage';

export default {
  title: 'Hooks/use-session-storage',
};

export function Usage() {
  const [value, setValue] = useSessionStorage<string>({
    key: '@mantine/sessionStorage/val',
    defaultValue: 'Value persists through reloads.',
  });

  return (
    <div style={{ padding: 20 }}>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
    </div>
  );
}

export function SerializeJson() {
  const [value, setValue] = useSessionStorage<{ mantine: string }>({
    key: '@mantine/sessionStorage/val',
    defaultValue: { mantine: 'is awesome' },
  });

  const [value2, setValue2] = useSessionStorage<{ mantine: string }>({
    key: '@mantine/sessionStorage/val',
    defaultValue: { mantine: 'is awesome' },
  });

  const [value3, setValue3] = useSessionStorage<{ mantine: string }>({
    key: '@mantine/sessionStorage/another-value',
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
  const [value, setValue] = useSessionStorage<boolean>({
    key: '@mantine/sessionStorage/val',
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
  const [value, setValue] = useSessionStorage<string>({
    key: 'some-value',
    defaultValue: '',
  });

  const [value2] = useSessionStorage<string>({
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
