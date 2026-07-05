import { Button } from '@mantine/core';
import { useCountdown } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Button } from '@mantine/core';
import { useCountdown } from '@mantine/hooks';

function Demo() {
  const { count, running, start } = useCountdown({
    countStart: 30_000,
    interval: 1000,
  });

  const seconds = Math.ceil(count / 1000);

  return (
    <Button onClick={start} disabled={running} w={220}>
      {running ? \`Resend code in \${seconds}s\` : 'Resend code'}
    </Button>
  );
}
`;

function Demo() {
  const { count, running, start } = useCountdown({
    countStart: 30_000,
    interval: 1000,
  });

  const seconds = Math.ceil(count / 1000);

  return (
    <Button onClick={start} disabled={running} w={220}>
      {running ? `Resend code in ${seconds}s` : 'Resend code'}
    </Button>
  );
}

export const usage: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
  centered: true,
};
