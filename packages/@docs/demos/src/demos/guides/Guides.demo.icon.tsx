import { AtomIcon } from '@phosphor-icons/react';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { AtomIcon } from '@phosphor-icons/react';

function Demo() {
  return (
    <AtomIcon
      size={80}
      color="var(--mantine-color-blue-filled)"
    />
  );
}
`;

function Demo() {
  return <AtomIcon size={80} color="var(--mantine-color-blue-filled)" />;
}

export const icon: MantineDemo = {
  type: 'code',
  component: Demo,
  centered: true,
  code,
};
