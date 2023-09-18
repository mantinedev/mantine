import React from 'react';
import { Paper } from './Paper';

export default { title: 'Paper' };

export function Usage() {
  return (
    <div style={{ padding: 40, maxWidth: 600 }}>
      <Paper radius="md" shadow="md" withBorder p="xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, et illo? Dolores
        mollitia, maiores est totam ab libero itaque fuga, dolorum hic nesciunt quibusdam, esse amet
        magni quia voluptatibus molestias!
      </Paper>
    </div>
  );
}
