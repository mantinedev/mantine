import React from 'react';
import { MantineProvider } from '@mantine/styles';
import { Alert } from './Alert';

export default { title: 'Alert' };

export function Variants() {
  return (
    <div style={{ maxWidth: 500, margin: 'auto', padding: 40 }}>
      <Alert title="Bummer!" color="red" variant="light" withCloseButton>
        Something terrible happened! You made a mistake and there is no going back, your data was
        lost forever!
      </Alert>
      <Alert withCloseButton title="Bummer!" color="red" variant="filled" mt="xl">
        Something terrible happened! You made a mistake and there is no going back, your data was
        lost forever!
      </Alert>
      <Alert
        withCloseButton
        title="Something terrible happened! You made a mistake and there is no going back, your data was lost forever!"
        color="red"
        variant="outline"
        mt="xl"
      >
        Something terrible happened! You made a mistake and there is no going back, your data was
        lost forever!
      </Alert>
    </div>
  );
}

export function ProviderVariantStyles() {
  return (
    <MantineProvider
      inherit
      theme={{
        components: {
          Alert: {
            variants: (theme, variant) => {
              if (variant === 'provider-variant') {
                return {
                  root: {
                    backgroundColor: theme.colors.cyan[9],
                    color: theme.white,
                  },

                  message: {
                    color: theme.white,
                  },
                };
              }
              return null;
            },
          },
        },
      }}
    >
      <div style={{ padding: 40 }}>
        <Alert title="Provider Alert" withCloseButton variant="provider-variant">
          Provider Alert
        </Alert>
      </div>
    </MantineProvider>
  );
}
