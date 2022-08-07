import React from 'react';
import { TextInput, MultiSelect, NumberInput, MantineProvider } from '@mantine/core';

const code = `
import { TextInput, MultiSelect, NumberInput, MantineProvider } from '@mantine/core';

function Demo() {
  return (
    <MantineProvider
      theme={{
        components: {
          InputWrapper: {
            defaultProps: {
              inputWrapperOrder: ['label', 'error', 'input', 'description'],
            },
          },

          Input: {
            defaultProps: {
              variant: 'filled',
            },
          },
        },
      }}
    >
      <TextInput
        label="TextInput with custom layout"
        placeholder="TextInput with custom layout"
        description="Description below the input"
      />
      <NumberInput
        mt="xl"
        label="NumberInput with custom layout"
        placeholder="NumberInput with custom layout"
        description="Description below the input"
      />
      <MultiSelect
        mt="xl"
        data={['Is not that', 'awesome?']}
        label="MultiSelect with custom layout"
        placeholder="MultiSelect with custom layout"
        description="Description below the input"
      />
    </MantineProvider>
  );
}
`;

function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <MantineProvider
        inherit
        theme={{
          components: {
            InputWrapper: {
              defaultProps: {
                inputWrapperOrder: ['label', 'error', 'input', 'description'],
              },
            },

            Input: {
              defaultProps: {
                variant: 'filled',
              },
            },
          },
        }}
      >
        <TextInput
          label="TextInput with custom layout"
          placeholder="TextInput with custom layout"
          description="Description below the input"
        />
        <NumberInput
          mt="xl"
          label="NumberInput with custom layout"
          placeholder="NumberInput with custom layout"
          description="Description below the input"
        />
        <MultiSelect
          mt="xl"
          data={['Is not that', 'awesome?']}
          label="MultiSelect with custom layout"
          placeholder="MultiSelect with custom layout"
          description="Description below the input"
        />
      </MantineProvider>
    </div>
  );
}

export const providerDefault: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
