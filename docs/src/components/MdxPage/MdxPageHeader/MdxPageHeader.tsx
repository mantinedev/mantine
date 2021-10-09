import React from 'react';
import { Title, Text } from '@mantine/core';
import { MarkGithubIcon, PencilIcon, LawIcon, CalendarIcon } from '@primer/octicons-react';
import { ImportStatement } from './ImportStatement/ImportStatement';
import { NpmIcon } from './NpmIcon';
import { LinkItem } from './LinkItem/LinkItem';
import { MdxPageProps } from '../../../types';
import useStyles from './MdxPageHeader.styles';

const REPO_BASE = 'https://github.com/mantinedev/mantine/blob/master';
const DOCS_BASE = `${REPO_BASE}/docs/src/docs`;
const SOURCE_BASE = `${REPO_BASE}/src`;

export function MdxPageHeader({ frontmatter }: MdxPageProps) {
  const { classes, cx } = useStyles();

  const hasTabs = Array.isArray(frontmatter.props);
  const hasLinks = !!(frontmatter.import || frontmatter.source || frontmatter.installation);

  if (!hasLinks && !hasTabs && !frontmatter.release) {
    return null;
  }

  return (
    <div className={classes.wrapper}>
      <div className={cx(classes.header, { [classes.withTabs]: hasTabs })}>
        <Title className={classes.title}>{frontmatter.pageTitle || frontmatter.title}</Title>

        <Text size="lg" className={classes.description}>
          {frontmatter.description}
        </Text>

        {frontmatter.import && <ImportStatement code={frontmatter.import} />}

        {frontmatter.source && (
          <LinkItem
            label="Source"
            icon={<MarkGithubIcon size={14} />}
            link={`${SOURCE_BASE}/${frontmatter.source}`}
          >
            View source code
          </LinkItem>
        )}

        {frontmatter.release && (
          <LinkItem
            label="Source code"
            icon={<MarkGithubIcon size={14} />}
            link={frontmatter.release}
          >
            Release on GitHub
          </LinkItem>
        )}

        {frontmatter.date && (
          <LinkItem
            label="Release date"
            icon={<CalendarIcon size={14} />}
            link={frontmatter.release}
          >
            {frontmatter.date}
          </LinkItem>
        )}

        {frontmatter.docs && (
          <LinkItem
            label="Docs"
            icon={<PencilIcon size={14} />}
            link={`${DOCS_BASE}/${frontmatter.docs}`}
          >
            Edit this page
          </LinkItem>
        )}

        {frontmatter.package && (
          <LinkItem
            label="Package"
            icon={<NpmIcon />}
            link={`https://www.npmjs.com/package/${frontmatter.package.replace(
              'mantine-',
              '@mantine/'
            )}`}
          >
            {frontmatter.package.replace('mantine-', '@mantine/')}
          </LinkItem>
        )}

        {frontmatter.license && (
          <LinkItem
            label="License"
            icon={<LawIcon size={14} />}
            link="https://github.com/mantinedev/mantine/blob/master/LICENSE"
          >
            MIT
          </LinkItem>
        )}
      </div>
    </div>
  );
}
