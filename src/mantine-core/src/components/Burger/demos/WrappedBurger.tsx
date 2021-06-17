import React, { useState } from 'react';
import { Burger } from '../Burger';

export function WrappedBurger(
  props: Omit<React.ComponentProps<typeof Burger>, 'opened' | 'onChange'>
) {
  const [opened, onChange] = useState(false);
  return (
    <div style={{ padding: 10 }}>
      <Burger opened={opened} onClick={() => onChange((s) => !s)} {...props} />
    </div>
  );
}
