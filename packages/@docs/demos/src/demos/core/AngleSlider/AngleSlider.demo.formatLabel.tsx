import { AngleSlider } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { AngleSlider } from '@mantine/core';

function Demo() {
  return <AngleSlider aria-label="Angle slider" formatLabel={(value) => \`\${value}°\`} />;
}
`;

function Demo() {
  return <AngleSlider aria-label="Angle slider" formatLabel={(value) => `${value}°`} />;
}

export const formatLabel: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
