import { JsonViewer } from '@mantine/code-highlight';
import { MantineDemo } from '@mantinex/demo';

const jsonData = {
  user: {
    name: 'John Doe',
    address: {
      city: 'Springfield',
      state: 'IL',
    },
  },
  settings: {
    theme: 'dark',
    notifications: true,
  },
};

const dataCode = `
export const data = ${JSON.stringify(jsonData, null, 2)};
`;

const code = `
import { JsonViewer } from '@mantine/code-highlight';
import { data } from './data';

function Demo() {
  return <JsonViewer value={data} withChevrons />;
}
`;

function Demo() {
  return <JsonViewer value={jsonData} withChevrons />;
}

export const withChevrons: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { fileName: 'Demo.tsx', language: 'tsx', code },
    { fileName: 'data.ts', language: 'tsx', code: dataCode },
  ],
};
