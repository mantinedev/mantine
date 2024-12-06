import { IconBrandMantine } from '@tabler/icons-react';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { IconBrandMantine } from '@tabler/icons-react';

function Demo() {
  return (
    <IconBrandMantine
      size={80}
      stroke={1.5}
      color="var(--mantine-color-blue-filled)"
    />
  );
}
`;

function Demo() {
  return <IconBrandMantine size={80} stroke={1.5} color="var(--mantine-color-blue-filled)" />;
}

export const icon: MantineDemo = {
  type: 'code',
  component: Demo,
  centered: true,
  code,
};
