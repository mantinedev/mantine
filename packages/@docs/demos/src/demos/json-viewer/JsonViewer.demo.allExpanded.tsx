import { JsonViewer } from '@mantine/code-highlight';
import { MantineDemo } from '@mantinex/demo';

const jsonData = {
  user: {
    name: 'John Doe',
    address: {
      street: '123 Main St',
      city: 'Springfield',
    },
    contacts: [
      { type: 'email', value: 'john@example.com' },
      { type: 'phone', value: '+1-555-0123' },
    ],
  },
  settings: {
    theme: 'dark',
    notifications: { email: true, push: false },
  },
};

const dataCode = `
export const data = ${JSON.stringify(jsonData, null, 2)};
`;

const code = `
import { JsonViewer } from '@mantine/code-highlight';
import { data } from './data';

function Demo() {
  return <JsonViewer value={data} allExpanded />;
}
`;

function Demo() {
  return <JsonViewer value={jsonData} allExpanded />;
}

export const allExpanded: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { fileName: 'Demo.tsx', language: 'tsx', code },
    { fileName: 'data.ts', language: 'tsx', code: dataCode },
  ],
};
