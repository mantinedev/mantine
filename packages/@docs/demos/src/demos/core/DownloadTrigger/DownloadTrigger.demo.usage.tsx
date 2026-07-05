import { Button, DownloadTrigger } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Button, DownloadTrigger } from '@mantine/core';

const csv = \`name,role
Alice,Engineer
Bob,Designer\`;

function Demo() {
  return (
    <DownloadTrigger data={csv} fileName="report.csv" mimeType="text/csv">
      {({ download }) => <Button onClick={download}>Export CSV</Button>}
    </DownloadTrigger>
  );
}
`;

const csv = `name,role
Alice,Engineer
Bob,Designer`;

function Demo() {
  return (
    <DownloadTrigger data={csv} fileName="report.csv" mimeType="text/csv">
      {({ download }) => <Button onClick={download}>Export CSV</Button>}
    </DownloadTrigger>
  );
}

export const usage: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
