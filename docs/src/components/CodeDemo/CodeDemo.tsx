import React, { useState } from 'react';
import { Language } from 'prism-react-renderer';
import { useMantineTheme, Paper, Button, Group } from '@mantine/core';
import { GitHubLogoIcon } from '@modulz/radix-icons';
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
        className={classes.demo}
        style={{
          backgroundColor:
            demoBackground || (theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white),
          borderColor: demoBorder ? undefined : 'transparent',
          zIndex,
        }}
      >
        {children}

        {toggle && (
          <Group position="center" style={{ marginTop: 20 }}>
            <Button variant="outline" onClick={() => setVisible((v) => !v)}>
              {visible ? 'Hide' : 'Show'} code
            </Button>
            {githubLink && (
              <Button
                component="a"
                href={githubLink}
                variant="outline"
                color="gray"
                leftIcon={<GitHubLogoIcon />}
              >
                View source on Github
              </Button>
            )}
          </Group>
        )}
      </Paper>

      {code && visible && (
        <CodeHighlight code={code} language={language} className={classes.code} />
      )}
    </DocsSection>
  );
}
