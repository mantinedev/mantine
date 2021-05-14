import React, { useState } from 'react';
import { Popover, ActionIcon, useMantineTheme } from '@mantine/core';
import { GearIcon } from '@modulz/radix-icons';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const code = `import React, { useState } from 'react';
import { Popover, ActionIcon, Group } from '@mantine/core';
import { GearIcon } from '@modulz/radix-icons';

function Demo() {
  const [opened, setOpened] = useState(false);
  const [values, setValues] = useState({
    name: 'Bob Handsome',
    email: 'bob@handsome.inc',
  });

  return (
    <Group>
      <User name={values.name} email={values.email} />

      <Popover
        opened={opened}
        onClose={() => setOpened(false)}
        position="bottom"
        placement="end"
        withArrow
        title="Edit user"
        target={
          <ActionIcon variant="light" onClick={() => setOpened(true)}>
            <GearIcon />
          </ActionIcon>
        }
      >
        <UserEditForm
          initialValues={values}
          onCancel={() => setOpened(false)}
          onSubmit={(data) => {
            setValues(data);
            setOpened(false);
          }}
        />
      </Popover>
    </Group>
  );
}`;

function Demo() {
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();

  return (
    <Popover
      opened={opened}
      onClose={() => setOpened(false)}
      position="bottom"
      placement="end"
      withArrow
      title="Edit user"
      target={
        <ActionIcon
          variant={theme.colorScheme === 'dark' ? 'hover' : 'light'}
          onClick={() => setOpened(true)}
        >
          <GearIcon />
        </ActionIcon>
      }
    >
      hover
    </Popover>
  );
}

export function PopoverHoverDemo() {
  return (
    <CodeDemo code={code} language="tsx">
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Demo />
      </div>
    </CodeDemo>
  );
}
