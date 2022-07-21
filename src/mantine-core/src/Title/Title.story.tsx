import { MantineProvider } from '@mantine/styles';
import React from 'react';
import { Title } from './Title';

export default { title: 'Title' };

const headings = ([1, 2, 3, 4, 5, 6] as const).map((order) => (
  <Title order={order} key={order}>
    Heading with order {order}
  </Title>
));

export function SharedFontWeightOnProvider() {
  return (
    <MantineProvider
      inherit
      theme={{
        headings: {
          fontWeight: 100,
        },
      }}
    >
      {headings}
    </MantineProvider>
  );
}

export function IndividualFontWeightOnProvider() {
  return (
    <MantineProvider
      inherit
      theme={{
        headings: {
          fontWeight: 900,

          sizes: {
            h1: { fontWeight: 100 },
            h2: { fontWeight: 400 },
          },
        },
      }}
    >
      {headings}
    </MantineProvider>
  );
}
