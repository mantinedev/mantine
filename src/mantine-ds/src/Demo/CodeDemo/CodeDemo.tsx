import React, { useState } from 'react';
import { Language } from 'prism-react-renderer';
import { IconCode } from '@tabler/icons-react';
import { Paper, Stack, ActionIcon, Tooltip, Box, MantineNumberSize } from '@mantine/core';
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
  radius?: MantineNumberSize;
  zIndex?: React.CSSProperties['zIndex'];
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
  radius = 'sm',
}: CodeDemoProps) {
  const { classes, cx, theme } = useStyles({ radius }, { name: 'CodeDemo' });
  const [visible, setVisible] = useState(!toggle);

  if (inline) {
    return <div>{children}</div>;
  }

  return (
    <Box className={classes.root} mb="xl" mt="md">
      <Paper
        p={spacing ? 'md' : 0}
        className={cx(classes.demo, { [classes.withToggle]: toggle })}
        radius={radius}
        style={{
          backgroundColor:
            demoBackground || (theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white),
          borderColor: demoBorder ? undefined : 'transparent',
          zIndex,
        }}
      >
        {children}

        {!!code && toggle && (
          <Stack justify="center" spacing={5} className={classes.controls}>
            <Tooltip
              label={`${visible ? 'Hide' : 'Show'} code`}
              position="left"
              withArrow
              arrowSize={6}
              offset={6}
              positionDependencies={[visible]}
            >
              <ActionIcon onClick={() => setVisible((v) => !v)} aria-label="Toggle code">
                <IconCode size={16} />
              </ActionIcon>
            </Tooltip>
          </Stack>
        )}
      </Paper>

      {code && visible && (
        <Prism
          language={language}
          className={classes.prism}
          classNames={{ code: classes.code }}
          radius={radius}
        >
          {code}
        </Prism>
      )}
    </Box>
  );
}
