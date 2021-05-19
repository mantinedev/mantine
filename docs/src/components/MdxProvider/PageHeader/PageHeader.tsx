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
  const buttonProps = {
    style: {
      color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : undefined,
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
    },
    color: theme.colorScheme === 'dark' ? 'dark' : 'gray',
    variant: theme.colorScheme === 'dark' ? 'light' : 'outline',
  } as const;

  return (
    <Group style={{ marginTop: theme.spacing.xs, marginBottom: theme.spacing.md }}>
      <Button
        component="a"
        target="_blank"
        href={`https://github.com/mantinedev/mantine/blob/master/docs/src/docs/${props.docs}`}
        title="Edit this page on Github"
        {...buttonProps}
      >
        Edit this page
      </Button>

      <Button
        component="a"
        leftIcon={<GitHubLogoIcon />}
        target="_blank"
        rel="noopener noreferrer"
        href={`https://github.com/mantinedev/mantine/blob/master/src/${props.source}`}
        title="Browse source page on Github"
        {...buttonProps}
      >
        Source code
      </Button>

      <Button
        component="a"
        leftIcon={<NpmIcon />}
        target="_blank"
        rel="noopener noreferrer"
        href={`https://www.npmjs.com/package/${props.package}`}
        title="Open package page on npm"
        {...buttonProps}
        style={{
          textTransform: 'lowercase',
          fontFamily: theme.fontFamilyMonospace,
          ...buttonProps.style,
        }}
      >
        {props.package}
      </Button>
    </Group>
  );
}
