import { InlineCodeHighlight } from '@mantine/code-highlight';
import { Text } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Text } from '@mantine/core';
import { InlineCodeHighlight } from '@mantine/code-highlight';

function Demo() {
  return (
    <Text>
      You can highlight code inline:{' '}
      <InlineCodeHighlight code='<InlineCodeHighlight code="" language="tsx" />' language="tsx" />.
      Is that not cool?
    </Text>
  );
}
`;

function Demo() {
  return (
    <Text>
      You can highlight code inline:{' '}
      <InlineCodeHighlight code='<InlineCodeHighlight code="" language="tsx" />' language="tsx" />.
      Is that not cool?
    </Text>
  );
}

export const inline: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
