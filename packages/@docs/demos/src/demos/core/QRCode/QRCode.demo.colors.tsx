import { Group, QRCode } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Group, QRCode } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <QRCode value="https://mantine.dev" color="blue.8" bg="blue.0" />
      <QRCode value="https://mantine.dev" color="var(--mantine-color-grape-9)" />
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group>
      <QRCode value="https://mantine.dev" color="blue.8" bg="blue.0" />
      <QRCode value="https://mantine.dev" color="var(--mantine-color-grape-9)" />
    </Group>
  );
}

export const colors: MantineDemo = {
  type: 'code',
  component: Demo,
  centered: true,
  code,
};
