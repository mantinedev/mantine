import React, { useState } from 'react';
import { Cross1Icon } from '@modulz/radix-icons';
import { Tooltip, Button, ActionIcon, Text, useMantineTheme } from '@mantine/core';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const code = `import React, { useState } from 'react';
import { Cross1Icon } from '@modulz/radix-icons';
import { Tooltip, Button, ActionIcon, Text, useMantineTheme } from '@mantine/core';

function Demo() {
  const [opened, setOpened] = useState(true);
  const theme = useMantineTheme();

  const tooltip = (
    <div style={{ display: 'flex', marginRight: -5 }}>
      <Text
        size="xs"
        style={{ color: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.white }}
      >
        Use this button to save this information in your profile, after that you will be able to
        access it any time and share it via email.
      </Text>
      <ActionIcon
        variant={theme.colorScheme === 'dark' ? 'light' : 'transparent'}
        style={{ marginLeft: 5 }}
        size="xs"
        onClick={() => setOpened(false)}
      >
        <Cross1Icon style={{ width: 12, height: 12 }} />
      </ActionIcon>
    </div>
  );

  return (
    <>
      <Tooltip
        label={tooltip}
        opened={opened}
        allowPointerEvents
        withArrow
        wrapLines
        transition="rotate-left"
        transitionDuration={250}
        width={220}
        gutter={theme.spacing.xs}
      >
        <Button onClick={() => setOpened(false)}>Save to profile</Button>
      </Tooltip>

      {!opened && (
        <Button
          variant="link"
          color="gray"
          style={{ marginTop: theme.spacing.xs }}
          onClick={() => setOpened(true)}
        >
          Reopen tooltip
        </Button>
      )}
    </>
  );
}`;

export function TooltipComplexDemo() {
  const [opened, setOpened] = useState(true);
  const theme = useMantineTheme();

  const tooltip = (
    <div style={{ display: 'flex', marginRight: -5 }}>
      <Text
        size="xs"
        style={{ color: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.white }}
      >
        Use this button to save this information in your profile, after that you will be able to
        access it any time and share it via email.
      </Text>
      <ActionIcon
        variant={theme.colorScheme === 'dark' ? 'light' : 'transparent'}
        style={{ marginLeft: 5 }}
        size="xs"
        onClick={() => setOpened(false)}
      >
        <Cross1Icon style={{ width: 12, height: 12 }} />
      </ActionIcon>
    </div>
  );

  return (
    <CodeDemo code={code} language="tsx">
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          paddingBottom: opened ? 40 : 0,
        }}
      >
        <Tooltip
          label={tooltip}
          opened={opened}
          allowPointerEvents
          withArrow
          wrapLines
          transition="rotate-left"
          transitionDuration={250}
          width={220}
          gutter={theme.spacing.xs}
        >
          <Button onClick={() => setOpened(false)}>Save to profile</Button>
        </Tooltip>
        {!opened && (
          <Button
            variant="link"
            color="gray"
            style={{ marginTop: theme.spacing.xs }}
            onClick={() => setOpened(true)}
          >
            Reopen tooltip
          </Button>
        )}
      </div>
    </CodeDemo>
  );
}
