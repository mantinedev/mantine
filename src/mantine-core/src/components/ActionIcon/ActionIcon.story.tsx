import React from 'react';
import { ActionIcon } from './ActionIcon';

export default { title: 'ActionIcon' };

export function AsLink() {
  return (
    <div style={{ padding: 40 }}>
      <ActionIcon component="a" href="https://mantine.dev">
        $
      </ActionIcon>
    </div>
  );
}
