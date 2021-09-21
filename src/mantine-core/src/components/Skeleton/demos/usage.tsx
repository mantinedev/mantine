import React from 'react';
import { Skeleton } from '../Skeleton';

const code = `
  <Skeleton height={45} />
  <Skeleton height={45} animated />
  <Skeleton height={45} type="circle" />
  <Skeleton height={45} animated type="circle" />
`;

function Demo() {
  return (
    <>
      <Skeleton height={45} />
      <Skeleton height={45} animated />
      <Skeleton height={45} type="circle" />
      <Skeleton height={45} animated type="circle" />
    </>
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
