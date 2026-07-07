import { Persona } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

function Demo() {
  return (
    <Persona
      name="Jane Doe"
      secondaryText="Product designer"
      presence={{ status: 'busy', outOfOffice: true }}
    />
  );
}

const code = `
import { Persona } from '@mantine/core';

function Demo() {
  return (
    <Persona
      name="Jane Doe"
      secondaryText="Product designer"
      presence={{ status: 'busy', outOfOffice: true }}
    />
  );
}
`;

export const initials: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
  maxWidth: 320,
};
