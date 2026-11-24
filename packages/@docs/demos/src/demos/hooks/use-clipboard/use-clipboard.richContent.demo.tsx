import { Button } from '@mantine/core';
import { useClipboard } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Button } from '@mantine/core';
import { useClipboard } from '@mantine/hooks';

function Demo() {
  const clipboard = useClipboard();

  return (
    <Button
      color={clipboard.copied ? 'teal' : 'blue'}
      onClick={() =>
        clipboard.copy({
          html: '<p><strong>Mantine</strong> – React components library</p>',
          text: 'Mantine – React components library',
        })
      }
    >
      {clipboard.copied ? 'Copied' : 'Copy formatted text'}
    </Button>
  );
}`;

function Demo() {
  const clipboard = useClipboard();

  return (
    <Button
      color={clipboard.copied ? 'teal' : 'blue'}
      onClick={() =>
        clipboard.copy({
          html: '<p><strong>Mantine</strong> – React components library</p>',
          text: 'Mantine – React components library',
        })
      }
    >
      {clipboard.copied ? 'Copied' : 'Copy formatted text'}
    </Button>
  );
}

export const richContent: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
  centered: true,
};
