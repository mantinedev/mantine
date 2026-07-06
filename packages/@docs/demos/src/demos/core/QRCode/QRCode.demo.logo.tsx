import { QRCode } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import { MantineLogo } from '@mantinex/mantine-logo';

const code = `
import { QRCode } from '@mantine/core';
import { MantineLogo } from '@mantinex/mantine-logo';

function Demo() {
  return (
    <QRCode
      value="https://mantine.dev"
      size={240}
      errorCorrectionLevel="H"
      logo={<MantineLogo type="mark" style={{ width: '100%', height: '100%' }} />}
    />
  );
}
`;

function Demo() {
  return (
    <QRCode
      value="https://mantine.dev"
      size={240}
      errorCorrectionLevel="H"
      logo={<MantineLogo type="mark" style={{ width: '100%', height: '100%' }} />}
    />
  );
}

export const logo: MantineDemo = {
  type: 'code',
  component: Demo,
  centered: true,
  code,
};
