import React from 'react';
import { Title, Text, Badge, rem } from '@mantine/core';
import { GithubIcon, NpmIcon } from '@mantine/ds';
import { IconPencil, IconLicense, IconCalendar } from '@tabler/icons-react';
import { Link } from 'gatsby';
import { ImportStatement } from './ImportStatement/ImportStatement';
import { LinkItem } from './LinkItem/LinkItem';
import { getGradient } from '../../HomePage/get-gradient';
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
        <Title className={classes.title}>
          {frontmatter.pageTitle || frontmatter.title}
          {frontmatter.polymorphic && (
            <Badge
              component={Link}
              to="/guides/polymorphic/"
              variant="gradient"
              sx={(theme) => ({ backgroundImage: getGradient(theme, 'bg'), cursor: 'pointer' })}
            >
              polymorphic
            </Badge>
          )}
        </Title>

        <Text size="lg" className={classes.description}>
          {frontmatter.description}
        </Text>

        {frontmatter.import && <ImportStatement code={frontmatter.import} />}

        {frontmatter.source && (
          <LinkItem
            label="Source"
            icon={<GithubIcon size={rem(14)} />}
            link={`${SOURCE_BASE}/${frontmatter.source}`}
          >
            View source code
          </LinkItem>
        )}

        {frontmatter.release && (
          <LinkItem
            label="Source code"
            icon={<GithubIcon size={rem(14)} />}
            link={frontmatter.release}
          >
            Release on GitHub
          </LinkItem>
        )}

        {frontmatter.date && (
          <LinkItem
            label="Release date"
            icon={<IconCalendar size={rem(14)} stroke={1.5} />}
            link={frontmatter.release}
          >
            {frontmatter.date}
          </LinkItem>
        )}

        {frontmatter.docs && (
          <LinkItem
            label="Docs"
            icon={<IconPencil size={rem(14)} stroke={1.5} />}
            link={`${DOCS_BASE}/${frontmatter.docs}`}
          >
            Edit this page
          </LinkItem>
        )}

        {frontmatter.package && (
          <LinkItem
            label="Package"
            icon={<NpmIcon size={rem(14)} />}
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
            icon={<IconLicense size={rem(14)} stroke={1.5} />}
            link="https://github.com/mantinedev/mantine/blob/master/LICENSE"
          >
            MIT
          </LinkItem>
        )}
      </div>
    </div>
  );
}
