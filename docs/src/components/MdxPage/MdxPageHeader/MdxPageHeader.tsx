import React from 'react';
import { Title, Text } from '@mantine/core';
import { Pencil2Icon, GitHubLogoIcon } from '@modulz/radix-icons';
import { MdxPageProps } from '../types';
import { ImportStatement } from './ImportStatement/ImportStatement';
import { NpmIcon } from './NpmIcon';
import { LinkItem } from './LinkItem/LinkItem';
import useStyles from './MdxPageHeader.styles';

const REPO_BASE = 'https://github.com/mantinedev/mantine/blob/master/';
const DOCS_BASE = `${REPO_BASE}/docs/src/docs`;
const SOURCE_BASE = `${REPO_BASE}/src`;
// https://github.com/mantinedev/mantine/blob/master/src/${props.source}

export function MdxPageHeader({ data }: MdxPageProps) {
  const classes = useStyles();

  return (
    <div className={classes.headerWrapper}>
      <div className={classes.header}>
        <Title className={classes.title}>{data.title}</Title>

        <Text size="lg" className={classes.description}>
          {data.description}
        </Text>

        {data.import && <ImportStatement code={data.import} />}

        {data.source && (
          <LinkItem
            label="Source"
            icon={<GitHubLogoIcon style={{ width: 14, height: 14 }} />}
            link={`${SOURCE_BASE}/${data.source}`}
          >
            View source code
          </LinkItem>
        )}

        {data.docs && (
          <LinkItem
            label="Docs"
            icon={<Pencil2Icon style={{ width: 14, height: 14 }} />}
            link={`${DOCS_BASE}/${data.docs}`}
          >
            Edit this page
          </LinkItem>
        )}

        {data.package && (
          <LinkItem
            label="Package"
            icon={<NpmIcon style={{ width: 14, height: 14 }} />}
            link={`${DOCS_BASE}/${data.docs}`}
          >
            {data.package.replace('mantine-', '@mantine/')}
          </LinkItem>
        )}
      </div>
    </div>
  );
}
