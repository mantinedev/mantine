import React, { useState } from 'react';
import cx from 'clsx';
import { Language } from 'prism-react-renderer';
import { useMantineTheme, Paper, Group, ActionIcon, Tooltip } from '@mantine/core';
import { CodeIcon, GitHubLogoIcon } from '@modulz/radix-icons';
import CodeHighlight from '../CodeHighlight/CodeHighlight';
import DocsSection from '../DocsSection/DocsSection';
import useStyles from './CodeDemo.styles';

interface CodeDemoProps {
  code?: string;
  language?: Language;
  demoBackground?: string;
  demoBorder?: boolean;
  children: React.ReactNode;
  toggle?: boolean;
  githubLink?: string;
  zIndex?: number;
}

export default function CodeDemo({
  code,
  language,
  children,
  demoBackground,
  demoBorder = true,
  toggle = false,
  githubLink,
  zIndex = 3,
}: CodeDemoProps) {
  const classes = useStyles();
  const [visible, setVisible] = useState(!toggle);
  const theme = useMantineTheme();

  return (
    <DocsSection>
      <Paper
        padding="md"
        className={cx(classes.demo, { [classes.withToggle]: toggle })}
        style={{
          backgroundColor:
            demoBackground || (theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white),
          borderColor: demoBorder ? undefined : 'transparent',
          zIndex,
        }}
      >
        {children}

        {toggle && (
          <Group position="center" direction="column" spacing={5} className={classes.controls}>
            {githubLink && (
              <Tooltip
                label="Source code"
                position="left"
                placement="center"
                transition="fade"
                withArrow
                arrowSize={4}
                gutter={8}
              >
                <ActionIcon
                  component="a"
                  href={githubLink}
                  variant={theme.colorScheme === 'dark' ? 'hover' : 'outline'}
                  color="gray"
                >
                  <GitHubLogoIcon />
                </ActionIcon>
              </Tooltip>
            )}

            <Tooltip
              label={`${visible ? 'Hide' : 'Show'} code`}
              position="left"
              placement="center"
              transition="fade"
              withArrow
              arrowSize={4}
              gutter={8}
            >
              <ActionIcon
                variant={theme.colorScheme === 'dark' ? 'hover' : 'outline'}
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
        <CodeHighlight code={code} language={language} className={classes.code} />
      )}
    </DocsSection>
  );
}
