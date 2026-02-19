import {
  CalendarBlankIcon,
  CertificateIcon,
  PencilSimpleIcon,
  RobotIcon,
  ToggleLeftIcon,
} from '@phosphor-icons/react';
import { Text, Title } from '@mantine/core';
import { GithubIcon, NpmIcon } from '@mantinex/dev-icons';
import { DOCS_BASE, SOURCE_BASE } from '@/links';
import { Frontmatter } from '@/types';
import { LinkItem } from './LinkItem/LinkItem';
import classes from './MdxPageHeader.module.css';

interface MdxPageHeaderProps {
  meta: Frontmatter;
}

export function MdxPageHeader({ meta }: MdxPageHeaderProps) {
  const withTabs = Array.isArray(meta.props);
  const hasLinks = !!meta.source;
  const withTitle = !!meta.title;

  if (meta.hideHeader) {
    return null;
  }

  if (!hasLinks && !withTabs && !meta.release && !withTitle) {
    return null;
  }

  return (
    <div className={classes.wrapper} data-with-tabs={withTabs || undefined}>
      <div className={classes.header} data-with-tabs={withTabs || undefined}>
        <Title className={classes.title}>{meta.title}</Title>
        <Text className={classes.description}>{meta.description}</Text>

        {meta.polymorphic && (
          <LinkItem
            label="Polymorphic"
            icon={<ToggleLeftIcon size={14} />}
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

        {Array.isArray(meta.props) && (
          <LinkItem
            label="LLM docs"
            icon={<RobotIcon size={14} />}
            link={`https://mantine.dev/llms/${meta.slug.slice(1).replace(/\//g, '-')}.md`}
          >
            LLM documentation
          </LinkItem>
        )}

        {meta.date && meta.release && (
          <LinkItem label="Release date" icon={<CalendarBlankIcon size={14} />} link={meta.release}>
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
            icon={<PencilSimpleIcon size={14} />}
            link={`${DOCS_BASE}/${meta.docs}`}
          >
            Edit this page
          </LinkItem>
        )}

        {meta.package && (
          <LinkItem
            label="PackageIcon"
            icon={<NpmIcon size={14} />}
            link={`https://www.npmjs.com/package/${meta.package}`}
          >
            {meta.package}
          </LinkItem>
        )}

        {meta.license && (
          <LinkItem
            label="License"
            icon={<CertificateIcon size={14} />}
            link="https://github.com/mantinedev/mantine/blob/master/LICENSE"
          >
            MIT
          </LinkItem>
        )}
      </div>
    </div>
  );
}
