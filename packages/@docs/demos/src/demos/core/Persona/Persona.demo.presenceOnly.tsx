import { Persona, Stack } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

function Demo() {
  return (
    <Stack gap="xs">
      <Persona
        name="API"
        secondaryText="All systems operational"
        presence="available"
        presenceOnly
      />
      <Persona name="Database" secondaryText="Degraded performance" presence="away" presenceOnly />
      <Persona name="CDN" secondaryText="Major outage" presence="busy" presenceOnly />
    </Stack>
  );
}

const code = `
import { Persona, Stack } from '@mantine/core';

function Demo() {
  return (
    <Stack gap="xs">
      <Persona name="API" secondaryText="All systems operational" presence="available" presenceOnly />
      <Persona name="Database" secondaryText="Degraded performance" presence="away" presenceOnly />
      <Persona name="CDN" secondaryText="Major outage" presence="busy" presenceOnly />
    </Stack>
  );
}
`;

export const presenceOnly: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
  maxWidth: 320,
};
