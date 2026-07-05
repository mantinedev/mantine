import { DownloadIcon } from '@phosphor-icons/react';
import { ActionIcon, DownloadTrigger } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { DownloadIcon } from '@phosphor-icons/react';
import { ActionIcon, DownloadTrigger } from '@mantine/core';

const csv = \`name,role
Alice,Engineer
Bob,Designer\`;

function Demo() {
  return (
    <DownloadTrigger data={csv} fileName="report.csv" mimeType="text/csv">
      {({ download }) => (
        <ActionIcon variant="light" size="lg" aria-label="Download CSV" onClick={download}>
          <DownloadIcon size={20} />
        </ActionIcon>
      )}
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
      {({ download }) => (
        <ActionIcon variant="light" size="lg" aria-label="Download CSV" onClick={download}>
          <DownloadIcon size={20} />
        </ActionIcon>
      )}
    </DownloadTrigger>
  );
}

export const customTrigger: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
