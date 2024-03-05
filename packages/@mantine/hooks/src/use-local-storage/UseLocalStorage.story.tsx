import React, { useEffect } from 'react';
import { readLocalStorageValue, useLocalStorage } from './use-local-storage';

export default { title: 'use-local-storage' };

const key = Math.random().toString(36).substr(2, 5);

export function Usage() {
  const [id] = useLocalStorage({
    defaultValue: 123,
    getInitialValueInEffect: false,
    key,
  });

  const [storedValue, setStoredValue] = React.useState(null);

  useEffect(() => {
    setTimeout(() => {
      setStoredValue(readLocalStorageValue({ key }));
    }, 20);
  }, []);

  return (
    <div style={{ padding: 40 }}>
      <p>Hook value: {id}</p>
      <p>Local storage value: {storedValue}</p>
    </div>
  );
}
