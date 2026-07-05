import { Button, DownloadTrigger } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Button, DownloadTrigger } from '@mantine/core';

// Data is generated (or fetched) on trigger, the render function exposes the
// loading state while the async function is resolving
async function generateReport(): Promise<string> {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return JSON.stringify({ value: 42, items: [1, 2, 3] }, null, 2);
}

function Demo() {
  return (
    <DownloadTrigger data={generateReport} fileName="report.json" mimeType="application/json">
      {({ download, loading }) => (
        <Button onClick={download} loading={loading}>
          Generate & download
        </Button>
      )}
    </DownloadTrigger>
  );
}
`;

async function generateReport(): Promise<string> {
  await new Promise((resolve) => {
    setTimeout(resolve, 1500);
  });
  return JSON.stringify({ value: 42, items: [1, 2, 3] }, null, 2);
}

function Demo() {
  return (
    <DownloadTrigger data={generateReport} fileName="report.json" mimeType="application/json">
      {({ download, loading }) => (
        <Button onClick={download} loading={loading}>
          Generate & download
        </Button>
      )}
    </DownloadTrigger>
  );
}

export const async: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
