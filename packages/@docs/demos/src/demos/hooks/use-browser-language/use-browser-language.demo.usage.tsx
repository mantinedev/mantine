import { Code, Text } from '@mantine/core';
import { useBrowserLanguage } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Code, Text } from '@mantine/core';
import { useBrowserLanguage } from '@mantine/hooks';

function Demo() {
  const language = useBrowserLanguage();

  return (
    <Text>
      Your browser language: <Code>{language ?? 'unknown'}</Code>
    </Text>
  );
}
`;

function Demo() {
  const language = useBrowserLanguage();

  return (
    <Text>
      Your browser language: <Code>{language ?? 'unknown'}</Code>
    </Text>
  );
}

export const usage: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
};
