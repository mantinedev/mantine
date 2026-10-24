import { useState } from 'react';
import { Button, Group, Loader, Menu } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import { Button, Group, Loader, Menu } from '@mantine/core';

function getProjects() {
  return new Promise<string[]>((resolve) => {
    setTimeout(() => resolve(['Marketing site', 'Mobile app', 'Design system', 'Internal tools']), 1500);
  });
}

function Demo() {
  const [projects, setProjects] = useState<string[] | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubChange = (opened: boolean) => {
    if (opened && projects === null && !loading) {
      setLoading(true);
      getProjects().then((result) => {
        setProjects(result);
        setLoading(false);
      });
    }
  };

  return (
    <Menu width={200} position="bottom-start">
      <Menu.Target>
        <Button variant="default">File actions</Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item>Rename</Menu.Item>
        <Menu.Item>Duplicate</Menu.Item>

        <Menu.Sub onChange={handleSubChange}>
          <Menu.Sub.Target>
            <Menu.Sub.Item>Move to project</Menu.Sub.Item>
          </Menu.Sub.Target>

          <Menu.Sub.Dropdown miw={200}>
            {loading && (
              <Menu.Empty>
                <Group gap="xs" justify="center">
                  <Loader size={14} />
                  Loading projects
                </Group>
              </Menu.Empty>
            )}

            {projects?.length === 0 && <Menu.Empty>No projects yet</Menu.Empty>}

            {projects?.map((project) => <Menu.Item key={project}>{project}</Menu.Item>)}
          </Menu.Sub.Dropdown>
        </Menu.Sub>

        <Menu.Divider />
        <Menu.Item color="red">Delete</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
`;

function getProjects() {
  return new Promise<string[]>((resolve) => {
    setTimeout(
      () => resolve(['Marketing site', 'Mobile app', 'Design system', 'Internal tools']),
      1500
    );
  });
}

function Demo() {
  const [projects, setProjects] = useState<string[] | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubChange = (opened: boolean) => {
    if (opened && projects === null && !loading) {
      setLoading(true);
      getProjects().then((result) => {
        setProjects(result);
        setLoading(false);
      });
    }
  };

  return (
    <Menu width={200} position="bottom-start">
      <Menu.Target>
        <Button variant="default">File actions</Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item>Rename</Menu.Item>
        <Menu.Item>Duplicate</Menu.Item>

        <Menu.Sub onChange={handleSubChange}>
          <Menu.Sub.Target>
            <Menu.Sub.Item>Move to project</Menu.Sub.Item>
          </Menu.Sub.Target>

          <Menu.Sub.Dropdown miw={200}>
            {loading && (
              <Menu.Empty>
                <Group gap="xs" justify="center">
                  <Loader size={14} />
                  Loading projects
                </Group>
              </Menu.Empty>
            )}

            {projects?.length === 0 && <Menu.Empty>No projects yet</Menu.Empty>}

            {projects?.map((project) => (
              <Menu.Item key={project}>{project}</Menu.Item>
            ))}
          </Menu.Sub.Dropdown>
        </Menu.Sub>

        <Menu.Divider />
        <Menu.Item color="red">Delete</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}

export const asyncSub: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
