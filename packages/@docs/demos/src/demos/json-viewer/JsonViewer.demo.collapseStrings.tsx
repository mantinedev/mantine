import { JsonViewer } from '@mantine/code-highlight';
import { MantineDemo } from '@mantinex/demo';

const jsonData = {
  title: 'Short title',
  description:
    'This is a very long description that will be collapsed because it exceeds the configured character limit for string display in the JSON viewer component.',
  content:
    'Another long string value that demonstrates how the collapseStringsAfterLength prop works with different string lengths in the viewer.',
  short: 'ok',
};

const code = `
import { JsonViewer } from '@mantine/code-highlight';

function Demo() {
  return <JsonViewer value={data} collapseStringsAfterLength={30} />;
}
`;

function Demo() {
  return <JsonViewer value={jsonData} collapseStringsAfterLength={30} />;
}

export const collapseStrings: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
