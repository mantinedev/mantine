import { useState } from 'react';
import { Burger } from './Burger';

export default { title: 'Burger' };

export function Usage() {
  const [opened, setOpened] = useState(false);
  return (
    <div style={{ padding: 40 }}>
      <Burger opened={opened} onClick={() => setOpened((o) => !o)} size={400} lineSize={1} />
    </div>
  );
}

export function Unstyled() {
  const [opened, setOpened] = useState(false);
  return (
    <div style={{ padding: 40 }}>
      <Burger opened={opened} onClick={() => setOpened((o) => !o)} unstyled />
    </div>
  );
}
