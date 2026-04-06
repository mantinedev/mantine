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

const code = `
import { JsonViewer } from '@mantine/code-highlight';

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
  code,
};
