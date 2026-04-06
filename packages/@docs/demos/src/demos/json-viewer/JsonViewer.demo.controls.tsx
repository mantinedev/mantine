import { JsonViewer } from '@mantine/code-highlight';
import { MantineDemo } from '@mantinex/demo';

const jsonData = {
  users: [
    { id: 1, name: 'Alice', roles: ['admin', 'user'] },
    { id: 2, name: 'Bob', roles: ['user'] },
    { id: 3, name: 'Charlie', roles: ['moderator', 'user'] },
  ],
  settings: {
    theme: 'dark',
    notifications: { email: true, push: false },
  },
};

const code = `
import { JsonViewer } from '@mantine/code-highlight';

function Demo() {
  return (
    <JsonViewer
      value={data}
      withControls
      defaultExpandDepth={0}
    />
  );
}
`;

function Demo() {
  return <JsonViewer value={jsonData} withControls defaultExpandDepth={0} />;
}

export const controls: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
