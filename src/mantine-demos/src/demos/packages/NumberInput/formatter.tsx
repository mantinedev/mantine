import React from 'react';
import { NumberInput } from '@mantine/core';

const code = `
import { NumberInput } from '@mantine/core';

function Demo() {
  return (
    <NumberInput
      label="Price"
      defaultValue={1000}
      parser={(value) => value.replace(/\\$\\s?|(,*)/g, '')}
      formatter={(value) =>
        !Number.isNaN(parseFloat(value))
          ? \`$ \${value}\`.replace(/\\B(?=(\\d{3})+(?!\\d))/g, ',')
          : '$ '
      }
    />
  );
}
`;

function Demo() {
  return (
    <div style={{ maxWidth: 420, margin: 'auto' }}>
      <NumberInput
        label="Price"
        defaultValue={1000}
        formatter={(value) =>
          !Number.isNaN(parseFloat(value))
            ? `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
            : '$ '
        }
        parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
      />
    </div>
  );
}

export const formatter: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
