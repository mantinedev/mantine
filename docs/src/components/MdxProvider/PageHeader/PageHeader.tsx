import React from 'react';
import { LinkButton, ElementsGroup } from '@mantine/core';
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

  return (
    <ElementsGroup style={{ marginTop: theme.spacing.xs, marginBottom: theme.spacing.md }}>
      <LinkButton
        variant="outline"
        color="gray"
        target="_blank"
        href={`https://github.com/mantinedev/mantine/blob/master/docs/src/docs/${props.docs}`}
        style={{ borderColor: theme.colors.gray[3], color: theme.colors.gray[7] }}
        title="Edit this page on Github"
      >
        Edit this page
      </LinkButton>

      <LinkButton
        variant="outline"
        color="gray"
        leftIcon={<GitHubLogoIcon />}
        target="_blank"
        href={`https://github.com/mantinedev/mantine/blob/master/src/${props.source}`}
        style={{ borderColor: theme.colors.gray[3], color: theme.colors.gray[7] }}
        title="Browse source page on Github"
      >
        Source code
      </LinkButton>

      <LinkButton
        variant="outline"
        color="gray"
        leftIcon={<NpmIcon />}
        target="_blank"
        href={`https://www.npmjs.com/package/${props.package}`}
        title="Open package page on npm"
        style={{
          textTransform: 'lowercase',
          fontFamily: 'IBM Plex Mono, monospace',
          borderColor: theme.colors.gray[3],
          color: theme.colors.gray[7],
        }}
      >
        {props.package}
      </LinkButton>
    </ElementsGroup>
  );
}
