import { useState } from 'react';
import { Button, DownloadTrigger, Stack, Text } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import { Button, DownloadTrigger, Stack, Text } from '@mantine/core';

async function generateReport(): Promise<string> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  throw new Error('Server is not available');
}

function Demo() {
  const [error, setError] = useState<string | null>(null);

  return (
    <Stack align="center">
      <DownloadTrigger
        data={generateReport}
        fileName="report.json"
        onError={(err) => setError(err instanceof Error ? err.message : 'Download failed')}
        onDownloadComplete={() => setError(null)}
      >
        {({ download, loading }) => (
          <Button color="red" onClick={download} loading={loading}>
            Download (will fail)
          </Button>
        )}
      </DownloadTrigger>

      {error && <Text c="red" size="sm">{error}</Text>}
    </Stack>
  );
}
`;

async function generateReport(): Promise<string> {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  throw new Error('Server is not available');
}

function Demo() {
  const [error, setError] = useState<string | null>(null);

  return (
    <Stack align="center">
      <DownloadTrigger
        data={generateReport}
        fileName="report.json"
        onError={(err) => setError(err instanceof Error ? err.message : 'Download failed')}
        onDownloadComplete={() => setError(null)}
      >
        {({ download, loading }) => (
          <Button color="red" onClick={download} loading={loading}>
            Download (will fail)
          </Button>
        )}
      </DownloadTrigger>

      {error && (
        <Text c="red" size="sm">
          {error}
        </Text>
      )}
    </Stack>
  );
}

export const error: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
