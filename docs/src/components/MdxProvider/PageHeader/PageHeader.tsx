import React from 'react';
import { Button, Group, useMantineTheme } from '@mantine/core';
import { GitHubLogoIcon } from '@modulz/radix-icons';
import NpmIcon from './NpmIcon';

interface PageHeaderProps {
  source: string;
  package: string;
  docs: string;
}

export default function PageHeader(props: PageHeaderProps) {
  const theme = useMantineTheme();

  return (
    <Group style={{ marginTop: theme.spacing.xs, marginBottom: theme.spacing.md }}>
      <Button
        component="a"
        variant="outline"
        color="gray"
        target="_blank"
        href={`https://github.com/mantinedev/mantine/blob/master/docs/src/docs/${props.docs}`}
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
          fontFamily: theme.fontFamilyMonospace,
        }}
      >
        {props.package}
      </Button>
    </Group>
  );
}
