import { useEffect, useState } from 'react';
import {
  readLocalStorageValue,
  removeLocalStorageValue,
  useLocalStorage,
  writeLocalStorageValue,
} from './use-local-storage';

export default { title: 'use-local-storage' };

const key = 'mantine-use-local-storage-1';

export function Usage() {
  const [id, set] = useLocalStorage({
    // DefaultValue: 123,
    getInitialValueInEffect: false,
    key,
  });

  const [storedValue, setStoredValue] = useState<string | null | undefined>(null);

  useEffect(() => {
    setTimeout(() => {
      setStoredValue(readLocalStorageValue({ key }));
    }, 20);
  }, []);

  return (
    <div style={{ padding: 40 }}>
      <p>Hook value: {id}</p>
      <p>Local storage value: {storedValue}</p>
      <button type="button" onClick={() => set('test-value')}>
        set
      </button>
    </div>
  );
}

const writerKey = 'mantine-use-local-storage-writer';

function DraftStatus() {
  const [draft] = useLocalStorage<string | null>({ key: writerKey, defaultValue: null });
  return <p>Reader: {draft ? `Draft saved: ${draft}` : 'No draft saved'}</p>;
}

export function WriteWithoutRerender() {
  const [renders, setRenders] = useState(0);
  const [text, setText] = useState('');

  return (
    <div style={{ padding: 40 }}>
      <p>Writer renders: {renders}</p>
      <input
        value={text}
        onChange={(event) => {
          setText(event.currentTarget.value);
          setRenders((count) => count + 1);
        }}
        onBlur={() => writeLocalStorageValue({ key: writerKey, value: text })}
        placeholder="Type, then blur to save"
      />
      <button type="button" onClick={() => removeLocalStorageValue({ key: writerKey })}>
        remove
      </button>
      <DraftStatus />
    </div>
  );
}
