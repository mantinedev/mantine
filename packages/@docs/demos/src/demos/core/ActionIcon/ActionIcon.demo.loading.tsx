import { HeartIcon } from '@phosphor-icons/react';
import { ActionIcon, Group, Switch } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { ActionIcon, Group, Switch } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { HeartIcon } from '@phosphor-icons/react';

function Demo() {
  const [loading, { toggle }] = useDisclosure();
  return (
    <>
      <Group>
        <ActionIcon loading={loading} aria-label="Like">
          <HeartIcon size={18} />
        </ActionIcon>
        <ActionIcon variant="light" loading={loading} aria-label="Like">
          <HeartIcon size={18} />
        </ActionIcon>
        <ActionIcon variant="outline" loading={loading} aria-label="Like">
          <HeartIcon size={18} />
        </ActionIcon>
      </Group>

      <Switch checked={loading} onChange={toggle} label="Loading state" mt="md" />
    </>
  );
}
`;

function Demo() {
  const [loading, { toggle }] = useDisclosure();
  return (
    <>
      <Group>
        <ActionIcon loading={loading} aria-label="Like">
          <HeartIcon size={18} />
        </ActionIcon>
        <ActionIcon variant="light" loading={loading} aria-label="Like">
          <HeartIcon size={18} />
        </ActionIcon>
        <ActionIcon variant="outline" loading={loading} aria-label="Like">
          <HeartIcon size={18} />
        </ActionIcon>
      </Group>

      <Switch checked={loading} onChange={toggle} label="Loading state" mt="md" />
    </>
  );
}

export const loading: MantineDemo = {
  type: 'code',
  component: Demo,
  centered: true,
  code,
};
