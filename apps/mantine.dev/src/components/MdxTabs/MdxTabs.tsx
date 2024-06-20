import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { rem, Tabs } from '@mantine/core';
import { MdxSiblings } from '@/components/MdxSiblings';
import { PageBase } from '@/components/PageBase';
import { PropsTablesList } from '@/components/PropsTable';
import { StylesApiTablesList } from '@/components/StylesApiTable';
import { TableOfContents } from '@/components/TableOfContents';
import { Frontmatter } from '@/types';
import classes from './MdxTabs.module.css';

interface MdxTabsProps {
  children: React.ReactNode;
  meta: Frontmatter;
}

export function MdxTabs({ children, meta }: MdxTabsProps) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('docs');
  const hasProps = Array.isArray(meta.props);
  const hasStyles = Array.isArray(meta.styles);

  useEffect(() => {
    setActiveTab(window.location.search.replace('?t=', '') || 'docs');
  }, []);

  if (!hasProps && !hasStyles) {
    return null;
  }

  return (
    <PageBase>
      <Tabs
        variant="outline"
        value={activeTab}
        classNames={{ list: classes.tabsList, tab: classes.tab }}
        keepMounted={false}
        radius="md"
        onChange={(value) => {
          router.replace(value === 'docs' ? router.pathname : `${router.pathname}?t=${value}`);
          setActiveTab(value!);
        }}
      >
        <div className={classes.tabsWrapper}>
          <Tabs.List>
            <Tabs.Tab value="docs">Documentation</Tabs.Tab>
            {hasProps && <Tabs.Tab value="props">Props</Tabs.Tab>}
            {hasStyles && <Tabs.Tab value="styles-api">Styles API</Tabs.Tab>}
          </Tabs.List>
        </div>

        <Tabs.Panel value="docs">
          <div
            className={classes.tabContent}
            style={{
              display: 'flex',
              position: 'relative',
              justifyContent: 'space-between',
            }}
          >
            <div className={classes.main}>
              {children}
              <MdxSiblings meta={meta} />
            </div>

            <div className={classes.tableOfContents}>
              <TableOfContents withTabs />
            </div>
          </div>
        </Tabs.Panel>

        <Tabs.Panel value="props">
          <div
            style={{
              maxWidth: rem(1178),
              marginLeft: 'auto',
              marginRight: 'auto',
              marginTop: rem(24),
            }}
            className={classes.tabContent}
          >
            <PropsTablesList components={meta.props!} componentPrefix={meta.componentPrefix} />
          </div>
        </Tabs.Panel>

        <Tabs.Panel value="styles-api">
          <div
            style={{
              maxWidth: rem(1178),
              marginLeft: 'auto',
              marginRight: 'auto',
              marginTop: rem(24),
            }}
            className={classes.tabContent}
          >
            <StylesApiTablesList components={meta.styles!} componentPrefix={meta.componentPrefix} />
          </div>
        </Tabs.Panel>
      </Tabs>
    </PageBase>
  );
}
