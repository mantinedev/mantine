import { useState } from 'react';
import { Button, Group, Loader, Menu } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import { Button, Group, Loader, Menu } from '@mantine/core';

function getRecentFiles() {
  return new Promise<string[]>((resolve) => {
    setTimeout(
      () => resolve(['Quarterly report.pdf', 'Roadmap 2027.key', 'Invoices.xlsx', 'Logo.svg']),
      1500
    );
  });
}

function Demo() {
  const [files, setFiles] = useState<string[] | null>(null);
  const [loading, setLoading] = useState(false);

  const handleOpen = () => {
    setLoading(true);
    getRecentFiles().then((result) => {
      setFiles(result);
      setLoading(false);
    });
  };

  return (
    <Menu width={240} onOpen={handleOpen}>
      <Menu.Target>
        <Button variant="default">Recent files</Button>
      </Menu.Target>

      <Menu.Dropdown>
        {loading && (
          <Menu.Empty>
            <Group gap="xs" justify="center">
              <Loader size={14} />
              Loading recent files
            </Group>
          </Menu.Empty>
        )}

        {!loading && files?.length === 0 && <Menu.Empty>No recent files</Menu.Empty>}

        {!loading && files?.map((file) => <Menu.Item key={file}>{file}</Menu.Item>)}
      </Menu.Dropdown>
    </Menu>
  );
}
`;

function getRecentFiles() {
  return new Promise<string[]>((resolve) => {
    setTimeout(
      () => resolve(['Quarterly report.pdf', 'Roadmap 2027.key', 'Invoices.xlsx', 'Logo.svg']),
      1500
    );
  });
}

function Demo() {
  const [files, setFiles] = useState<string[] | null>(null);
  const [loading, setLoading] = useState(false);

  const handleOpen = () => {
    setLoading(true);
    getRecentFiles().then((result) => {
      setFiles(result);
      setLoading(false);
    });
  };

  return (
    <Menu width={240} onOpen={handleOpen}>
      <Menu.Target>
        <Button variant="default">Recent files</Button>
      </Menu.Target>

      <Menu.Dropdown>
        {loading && (
          <Menu.Empty>
            <Group gap="xs" justify="center">
              <Loader size={14} />
              Loading recent files
            </Group>
          </Menu.Empty>
        )}

        {!loading && files?.length === 0 && <Menu.Empty>No recent files</Menu.Empty>}

        {!loading && files?.map((file) => <Menu.Item key={file}>{file}</Menu.Item>)}
      </Menu.Dropdown>
    </Menu>
  );
}

export const asyncLoading: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
