import { JsonViewer } from '@mantine/code-highlight';
import { MantineDemo } from '@mantinex/demo';

const jsonData = {
  user: {
    name: 'John Doe',
    address: {
      street: '123 Main St',
      city: 'Springfield',
      state: 'IL',
      zip: '62704',
      coordinates: {
        lat: 39.7817,
        lng: -89.6501,
      },
    },
    contacts: [
      { type: 'email', value: 'john@example.com' },
      { type: 'phone', value: '+1-555-0123' },
    ],
  },
};

const dataCode = `
export const data = ${JSON.stringify(jsonData, null, 2)};
`;

const code = `
import { JsonViewer } from '@mantine/code-highlight';
import { data } from './data';

function Demo() {
  return <JsonViewer value={data} defaultExpandDepth={3} />;
}
`;

function Demo() {
  return <JsonViewer value={jsonData} defaultExpandDepth={3} />;
}

export const expandDepth: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { fileName: 'Demo.tsx', language: 'tsx', code },
    { fileName: 'data.ts', language: 'tsx', code: dataCode },
  ],
};
