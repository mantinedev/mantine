import React from 'react';
import { MantineProvider } from '@mantine/styles';
import { Autocomplete } from './Autocomplete';

export default { title: 'Autocomplete' };

const data = ['React', 'Angular', 'Svelte', 'Vue'];

export function Usage() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <Autocomplete label="Autocomplete" placeholder="Autocomplete" data={data} />
    </div>
  );
}

export function ReadOnly() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <Autocomplete label="Autocomplete" placeholder="Autocomplete" data={data} readOnly />
    </div>
  );
}

export function ProviderVariant() {
  return (
    <MantineProvider
      inherit
      theme={{
        components: {
          Autocomplete: {
            variants: (theme, variant) => {
              if (variant === 'filled') {
                return {
                  dropdown: { backgroundColor: 'pink' },
                  item: { backgroundColor: 'orange' },
                };
              }

              return null;
            },
          },
        },
      }}
    >
      <Autocomplete label="Autocomplete" placeholder="Autocomplete" data={data} variant="filled" />
    </MantineProvider>
  );
}
