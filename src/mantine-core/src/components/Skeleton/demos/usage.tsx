import React from 'react';
import { Skeleton } from '../Skeleton';

const code = `
<Skeleton height={50} circle mb="xl" />
<Skeleton height={8} radius="xl" />
<Skeleton height={8} mt={6} radius="xl" />
<Skeleton height={8} mt={6} width="70%" radius="xl" />
`;

function Demo() {
  return (
    <div>
      <Skeleton height={50} circle mb="xl" />
      <Skeleton height={8} radius="xl" />
      <Skeleton height={8} mt={6} radius="xl" />
      <Skeleton height={8} mt={6} width="70%" radius="xl" />
    </div>
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
