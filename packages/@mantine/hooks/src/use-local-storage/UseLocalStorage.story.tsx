import { useEffect, useState } from 'react';
import { readLocalStorageValue, useLocalStorage } from './use-local-storage';

export default { title: 'use-local-storage' };

const key = 'mantine-use-local-storage-1';

export function Usage() {
  const [id, set] = useLocalStorage({
    // DefaultValue: 123,
    getInitialValueInEffect: false,
    key,
  });

  const [storedValue, setStoredValue] = useState(null);

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
