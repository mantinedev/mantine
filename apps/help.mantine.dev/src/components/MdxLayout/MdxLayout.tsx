import Head from 'next/head';
import Link from 'next/link';
import { IconArrowLeft, IconBug, IconPencil } from '@tabler/icons-react';
import { Anchor, Center, Container, Text, Title } from '@mantine/core';
import { Frontmatter } from '@/types';
import { PageHeaderLink } from './PageHeaderLink/PageHeaderLink';
import { TableOfContents } from './TableOfContents';
import classes from './MdxLayout.module.css';

interface MdxLayoutProps {
  meta: Frontmatter;
  children: React.ReactNode;
}

export function MdxLayout({ meta, children }: MdxLayoutProps) {
  const title = `${meta.title} | Mantine`;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta itemProp="name" content={title} key="item-title" />
        <meta property="og:title" content={title} key="og-title" />
        <meta name="twitter:title" content={title} key="twitter-title" />
        <meta property="og:url" content={`https://help.mantine.dev/q/${meta.slug}`} key="og-url" />
      </Head>
      <article>
        <header className={classes.header}>
          <Container size="md">
            <Anchor component={Link} href="/" underline="hover" fz="sm">
              <Center inline component="span" style={{ gap: 5 }}>
                <IconArrowLeft size={18} stroke={1.5} />
                <span>Back to all questions</span>
              </Center>
            </Anchor>

            <Title className={classes.title}>{meta.title}</Title>

            <nav className={classes.links}>
              <PageHeaderLink
                icon={<IconPencil size={18} stroke={1.5} />}
                link={`https://github.com/mantinedev/mantine/blob/master/apps/help.mantine.dev/src/pages/q/${meta.slug}.mdx`}
              >
                Edit this page on GitHub
              </PageHeaderLink>
              <PageHeaderLink
                icon={<IconBug size={18} stroke={1.5} />}
                link={`https://github.com/mantinedev/mantine/issues/new?template=docs_report.yml&title=${encodeURIComponent(
                  `Issue with Help Center article "${meta.title}"`
                )}&link=${encodeURIComponent(`https://help.mantine.dev/q/${meta.slug}`)}`}
              >
                Report issue with the article
              </PageHeaderLink>
            </nav>

            <Text c="dimmed" fz="xs" mt="md">
              Last updated{' '}
              <Text
                component="time"
                dateTime={new Date(meta.last_updated_at).toLocaleDateString()}
                c="var(--mantine-color-text)"
                inherit
              >
                {meta.last_updated_at}
              </Text>
            </Text>
          </Container>
        </header>
        <Container size="md" className={classes.innerContainer}>
          <div className={classes.inner}>
            <div className={classes.content} id="mdx">
              {children}
            </div>
          </div>
          <TableOfContents />
        </Container>
      </article>
    </>
  );
}

export function Layout(meta: Frontmatter) {
  return ({ children }: { children: React.ReactNode }) => (
    <MdxLayout meta={meta}>{children}</MdxLayout>
  );
}
