import { QRCode } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { QRCode } from '@mantine/core';

function Demo() {
  return <QRCode value="https://mantine.dev" />;
}
`;

function Demo() {
  return <QRCode value="https://mantine.dev" />;
}

export const usage: MantineDemo = {
  type: 'code',
  component: Demo,
  centered: true,
  code,
};
