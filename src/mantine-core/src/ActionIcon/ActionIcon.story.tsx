import { MantineProvider } from '@mantine/styles';
import React from 'react';
import { ActionIcon } from './ActionIcon';

export default { title: 'ActionIcon' };

export function Loading() {
  const sizes = ['xs', 'sm', 'md', 'lg', 'xl', '15rem'].map((size) => (
    <ActionIcon key={size} size={size} variant="filled" color="blue" mt="md" loading>
      $
    </ActionIcon>
  ));

  return <div style={{ padding: 40 }}>{sizes}</div>;
}

export function ProviderVariant() {
  return (
    <MantineProvider
      inherit
      theme={{
        components: {
          ActionIcon: {
            sizes: {
              'provider-size': () => ({
                root: { width: 100, height: 200, backgroundColor: 'orange' },
              }),
            },
          },
        },
      }}
    >
      <ActionIcon variant="provider-variant" size="provider-size">
        $
      </ActionIcon>
    </MantineProvider>
  );
}
