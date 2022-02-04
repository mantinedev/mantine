import React, { useState } from 'react';
import { Language } from 'prism-react-renderer';
import { CodeIcon } from '@modulz/radix-icons';
import { useMantineTheme, Paper, Group, ActionIcon, Tooltip } from '@mantine/core';
import { Prism } from '@mantine/prism';
import useStyles from './CodeDemo.styles';

interface CodeDemoProps {
  code?: string;
  language?: Language;
  demoBackground?: string;
  demoBorder?: boolean;
  children?: React.ReactNode;
  toggle?: boolean;
  inline?: boolean;
  spacing?: boolean;
  zIndex?: number;
}

export default function CodeDemo({
  code,
  language,
  children,
  demoBackground,
  demoBorder = true,
  toggle = false,
  inline = false,
  spacing = true,
  zIndex = 3,
}: CodeDemoProps) {
  const { classes, cx } = useStyles();
  const [visible, setVisible] = useState(!toggle);
  const theme = useMantineTheme();

  if (inline) {
    return <div>{children}</div>;
  }

  return (
    <div style={{ marginBottom: theme.spacing.xl, marginTop: theme.spacing.md }}>
      <Paper
        padding={spacing ? 'md' : 0}
        className={cx(classes.demo, { [classes.withToggle]: toggle })}
        style={{
          backgroundColor:
            demoBackground || (theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white),
          borderColor: demoBorder ? undefined : 'transparent',
          zIndex,
        }}
      >
        {children}

        {!!code && toggle && (
          <Group position="center" direction="column" spacing={5} className={classes.controls}>
            <Tooltip
              label={`${visible ? 'Hide' : 'Show'} code`}
              position="left"
              placement="center"
              transition="fade"
              withArrow
              arrowSize={4}
              gutter={8}
              positionDependencies={[visible]}
            >
              <ActionIcon
                variant="hover"
                onClick={() => setVisible((v) => !v)}
                aria-label="Toggle code"
              >
                <CodeIcon />
              </ActionIcon>
            </Tooltip>
          </Group>
        )}
      </Paper>

      {code && visible && (
        <Prism language={language} className={classes.prism} classNames={{ code: classes.code }}>
          {code}
        </Prism>
      )}
    </div>
  );
}
