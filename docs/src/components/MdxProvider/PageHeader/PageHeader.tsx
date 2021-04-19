import React from 'react';
import { Button, ElementsGroup } from '@mantine/core';
import { useMantineTheme } from '@mantine/theme';
import { GitHubLogoIcon } from '@modulz/radix-icons';
import NpmIcon from './NpmIcon';

interface PageHeaderProps {
  source: string;
  package: string;
  docs: string;
}

export default function PageHeader(props: PageHeaderProps) {
  const theme = useMantineTheme();
  const styles = {
    borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[3],
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
  };

  return (
    <ElementsGroup style={{ marginTop: theme.spacing.xs, marginBottom: theme.spacing.md }}>
      <Button
        component="a"
        variant="outline"
        color="gray"
        target="_blank"
        href={`https://github.com/mantinedev/mantine/blob/master/docs/src/docs/${props.docs}`}
        style={styles}
        title="Edit this page on Github"
      >
        Edit this page
      </Button>

      <Button
        component="a"
        variant="outline"
        color="gray"
        leftIcon={<GitHubLogoIcon />}
        target="_blank"
        rel="noopener noreferrer"
        href={`https://github.com/mantinedev/mantine/blob/master/src/${props.source}`}
        style={styles}
        title="Browse source page on Github"
      >
        Source code
      </Button>

      <Button
        component="a"
        variant="outline"
        color="gray"
        leftIcon={<NpmIcon />}
        target="_blank"
        rel="noopener noreferrer"
        href={`https://www.npmjs.com/package/${props.package}`}
        title="Open package page on npm"
        style={{
          textTransform: 'lowercase',
          fontFamily: 'Menlo, Monaco, Courier, monospace',
          ...styles,
        }}
      >
        {props.package}
      </Button>
    </ElementsGroup>
  );
}
