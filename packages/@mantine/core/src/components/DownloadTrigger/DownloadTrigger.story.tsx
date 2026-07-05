import { ActionIcon } from '../ActionIcon';
import { Button } from '../Button';
import { DownloadTrigger } from './DownloadTrigger';

export default { title: 'DownloadTrigger' };

const csv = `name,role
Alice,Engineer
Bob,Designer`;

const json = JSON.stringify({ hello: 'world', items: [1, 2, 3] }, null, 2);

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <DownloadTrigger data={csv} fileName="report.csv" mimeType="text/csv">
        {({ download }) => <Button onClick={download}>Export CSV</Button>}
      </DownloadTrigger>
    </div>
  );
}

export function JsonData() {
  return (
    <div style={{ padding: 40 }}>
      <DownloadTrigger data={json} fileName="data.json" mimeType="application/json">
        {({ download }) => (
          <Button variant="light" onClick={download}>
            Download JSON
          </Button>
        )}
      </DownloadTrigger>
    </div>
  );
}

export function AsyncData() {
  const producer = () =>
    new Promise<string>((resolve) => {
      setTimeout(() => resolve(csv), 1500);
    });

  return (
    <div style={{ padding: 40 }}>
      <DownloadTrigger
        data={producer}
        fileName="report.csv"
        mimeType="text/csv"
        onDownloadComplete={() => console.log('download complete')}
      >
        {({ download, loading }) => (
          <Button onClick={download} loading={loading}>
            Generate & download
          </Button>
        )}
      </DownloadTrigger>
    </div>
  );
}

export function AsyncError() {
  const producer = () =>
    new Promise<string>((_resolve, reject) => {
      setTimeout(() => reject(new Error('Failed to generate file')), 1500);
    });

  return (
    <div style={{ padding: 40 }}>
      <DownloadTrigger
        data={producer}
        fileName="report.csv"
        onError={(error) => console.error(error)}
      >
        {({ download, loading }) => (
          <Button color="red" onClick={download} loading={loading}>
            Fail to download
          </Button>
        )}
      </DownloadTrigger>
    </div>
  );
}

export function CustomTrigger() {
  return (
    <div style={{ padding: 40 }}>
      <DownloadTrigger data={csv} fileName="report.csv" mimeType="text/csv">
        {({ download }) => (
          <ActionIcon aria-label="Download CSV" variant="light" size="lg" onClick={download}>
            ⬇
          </ActionIcon>
        )}
      </DownloadTrigger>
    </div>
  );
}
