import React from 'react';
import { Box, Title, Text, rem } from '@mantine/core';
import { GithubIcon, NpmIcon } from '@mantine/ds';
import { IconCalendar, IconLicense, IconPencil, IconSwitch2 } from '@tabler/icons-react';
import { Frontmatter } from '@/types';
import { LinkItem } from './LinkItem/LinkItem';
import classes from './MdxPageHeader.module.css';
import { ImportStatement } from './ImportStatement/ImportStatement';

const REPO_BASE = 'https://github.com/rtivital/mantine-v7/blob/master';
const DOCS_BASE = `${REPO_BASE}/docs/pages`;
const SOURCE_BASE = `${REPO_BASE}/src`;

interface MdxPageHeaderProps {
  meta: Frontmatter;
}

export function MdxPageHeader({ meta }: MdxPageHeaderProps) {
  const withTabs = Array.isArray(meta.props);
  const hasLinks = !!(meta.import || meta.source);
  const withTitle = !!meta.title;

  if (meta.hideHeader) {
    return null;
  }

  if (!hasLinks && !withTabs && !meta.release && !withTitle) {
    return null;
  }

  return (
    <div className={classes.wrapper}>
      <Box className={classes.header} mod={{ 'with-tabs': withTabs }}>
        <Title className={classes.title}>{meta.title}</Title>
        <Text className={classes.description}>{meta.description}</Text>

        {meta.import && <ImportStatement code={meta.import} />}

        {meta.polymorphic && (
          <LinkItem
            label="Polymorphic"
            icon={<IconSwitch2 style={{ width: rem(14), height: rem(14) }} stroke={1.5} />}
            link="/guides/polymorphic"
          >
            Polymorphic component
          </LinkItem>
        )}

        {meta.source && (
          <LinkItem
            label="Source"
            icon={<GithubIcon size={14} />}
            link={`${SOURCE_BASE}/${meta.source}`}
          >
            View source code
          </LinkItem>
        )}

        {meta.date && meta.release && (
          <LinkItem
            label="Release date"
            icon={<IconCalendar style={{ width: rem(14), height: rem(14) }} stroke={1.5} />}
            link={meta.release}
          >
            {meta.date}
          </LinkItem>
        )}

        {meta.release && (
          <LinkItem label="Source code" icon={<GithubIcon size={14} />} link={meta.release}>
            Release on GitHub
          </LinkItem>
        )}

        {meta.docs && (
          <LinkItem
            label="Docs"
            icon={<IconPencil style={{ width: rem(14), height: rem(14) }} stroke={1.5} />}
            link={`${DOCS_BASE}/${meta.docs}`}
          >
            Edit this page
          </LinkItem>
        )}

        {meta.package && (
          <LinkItem
            label="Package"
            icon={<NpmIcon size={14} />}
            link={`https://www.npmjs.com/package/${meta.package}`}
          >
            {meta.package}
          </LinkItem>
        )}

        {meta.license && (
          <LinkItem
            label="License"
            icon={<IconLicense style={{ width: rem(14), height: rem(14) }} stroke={1.5} />}
            link="https://github.com/mantinedev/mantine/blob/master/LICENSE"
          >
            MIT
          </LinkItem>
        )}
      </Box>
    </div>
  );
}
