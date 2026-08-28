import { CodeHighlight } from '@mantine/code-highlight';
import { Stack, Text } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const exampleCode = `    docker exec mongo mongodump \\
      --authenticationDatabase admin \\
      --out /tmp/mongo-backup
`;

const code = `
import { CodeHighlight } from '@mantine/code-highlight';
import { Stack, Text } from '@mantine/core';

const exampleCode = \`    docker exec mongo mongodump \\\\
      --authenticationDatabase admin \\\\
      --out /tmp/mongo-backup
\`;

function Demo() {
  return (
    <Stack>
      <Text size="sm" fw={500}>Default: the first line is dedented</Text>
      <CodeHighlight code={exampleCode} language="bash" />

      <Text size="sm" fw={500}>withFirstLineIndentation</Text>
      <CodeHighlight code={exampleCode} language="bash" withFirstLineIndentation />
    </Stack>
  );
}
`;

function Demo() {
  return (
    <Stack>
      <Text size="sm" fw={500}>
        Default: the first line is dedented
      </Text>
      <CodeHighlight code={exampleCode} language="bash" />

      <Text size="sm" fw={500}>
        withFirstLineIndentation
      </Text>
      <CodeHighlight code={exampleCode} language="bash" withFirstLineIndentation />
    </Stack>
  );
}

export const firstLineIndentation: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
