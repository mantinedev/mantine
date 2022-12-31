import React from 'react';
import { MantineProvider } from '@mantine/styles';
import { Input } from './Input';

export default { title: 'Input' };

export function ProviderVariant() {
  return (
    <div style={{ padding: 40 }}>
      <MantineProvider
        inherit
        theme={{
          components: {
            InputWrapper: {
              variants: (_theme, variant) => {
                if (variant === 'provider') {
                  return {
                    root: { border: '1px solid green' },
                    label: { border: '1px solid red' },
                    error: { border: '1px solid black' },
                    description: { border: '1px solid orange' },
                  };
                }
                return null;
              },
            },
          },
        }}
      >
        <Input.Wrapper
          variant="provider"
          label="Provider input"
          error="Error"
          description="description"
        >
          <Input />
        </Input.Wrapper>
      </MantineProvider>
    </div>
  );
}

export function Variants() {
  return (
    <div style={{ padding: 40 }}>
      <Input placeholder="default" />
      <Input placeholder="invalid" mt="md" error />
      <Input placeholder="disabled" mt="md" disabled />
      <Input placeholder="with icon" mt="md" icon="$" />
      <Input placeholder="filled" variant="filled" mt="md" />
      <Input placeholder="unstyled" variant="unstyled" mt="md" />
    </div>
  );
}
