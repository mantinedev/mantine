import { MantineProvider } from '@mantine/styles';
import React from 'react';
import { ActionIcon } from './ActionIcon';

export default { title: 'ActionIcon' };

export function Loading() {
  const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 60, 100, 200].map((size) => (
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
            variants: (theme, variant) => {
              if (variant === 'provider-variant') {
                return { root: { backgroundColor: theme.colors.pink[9], color: theme.white } };
              }

              return null;
            },

            sizes: (_theme, size) => {
              if (size === 'provider-size') {
                return { root: { width: 100, height: 200 } };
              }

              return null;
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
