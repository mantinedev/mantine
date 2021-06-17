import React, { useState } from 'react';
import { MANTINE_SIZES } from '../../../theme';
import { Burger } from '../Burger';
import { Group } from '../../Group/Group';

function WrappedBurger(props: Omit<React.ComponentProps<typeof Burger>, 'opened' | 'onChange'>) {
  const [opened, onChange] = useState(false);
  return (
    <div style={{ padding: 10 }}>
      <Burger opened={opened} onClick={() => onChange((s) => !s)} {...props} />
    </div>
  );
}

const items = MANTINE_SIZES.map((size) => <WrappedBurger size={size} key={size} />);

export function Demo() {
  return <Group position="center">{items}</Group>;
}

export const sizes: MantineDemo = {
  type: 'demo',
  component: Demo,
};
