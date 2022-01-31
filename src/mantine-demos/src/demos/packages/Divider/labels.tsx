import React from 'react';
import { MagnifyingGlassIcon } from '@modulz/radix-icons';
import { Divider } from '@mantine/core';

const code = `
<Divider my="xs" label="Label on the left" />
<Divider my="xs" label="Label in the center" labelPosition="center" />
<Divider my="xs" label="Label on the right" labelPosition="right" />

<Divider
  my="xs"
  variant="dashed"
  labelPosition="center"
  label={
    <>
      <MagnifyingGlassIcon style={{ width: 12, height: 12 }} />
      <span style={{ marginLeft: 5, marginRight: 5 }}>Search results</span>
    </>
  }
/>

<Divider
  my="xs"
  label="Link label"
  labelProps={{ component: 'a', href: 'https://mantine.dev', variant: 'link', color: 'blue' }}
/>
`;

function Demo() {
  return (
    <>
      <Divider my="xs" label="Label on the left" />
      <Divider my="xs" label="Label in the center" labelPosition="center" />
      <Divider my="xs" label="Label on the right" labelPosition="right" />
      <Divider
        my="xs"
        variant="dashed"
        labelPosition="center"
        label={
          <>
            <MagnifyingGlassIcon style={{ width: 12, height: 12 }} />
            <span style={{ marginLeft: 5, marginRight: 5 }}>Search results</span>
          </>
        }
      />
      <Divider
        my="xs"
        label="Link label"
        labelProps={{ component: 'a', href: 'https://mantine.dev', variant: 'link', color: 'blue' }}
      />
    </>
  );
}

export const labels: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
