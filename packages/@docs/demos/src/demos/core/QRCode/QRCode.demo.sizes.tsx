import { Group, QRCode } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Group, QRCode } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <QRCode value="https://mantine.dev" size={100} />
      <QRCode value="https://mantine.dev" size={160} />
      <QRCode value="https://mantine.dev" size={240} />
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group>
      <QRCode value="https://mantine.dev" size={100} />
      <QRCode value="https://mantine.dev" size={160} />
      <QRCode value="https://mantine.dev" size={240} />
    </Group>
  );
}

export const sizes: MantineDemo = {
  type: 'code',
  component: Demo,
  centered: true,
  code,
};
