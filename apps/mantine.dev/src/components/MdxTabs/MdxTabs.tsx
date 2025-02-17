import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { IconAdjustments, IconCode, IconFileText } from '@tabler/icons-react';
import { Tabs } from '@mantine/core';
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
        variant="pills"
        value={activeTab}
        classNames={{ list: classes.tabsList, tab: classes.tab, tabSection: classes.tabSection }}
        keepMounted={false}
        radius="md"
        onChange={(value) => {
          router.replace(
            value === 'docs' ? router.pathname : `${router.pathname}?t=${value}`,
            undefined,
            { scroll: false }
          );
          setActiveTab(value!);
        }}
      >
        <div className={classes.tabsWrapper}>
          <Tabs.List>
            <Tabs.Tab value="docs">
              <div className={classes.tabInner}>
                <IconFileText size={20} stroke={1.5} className={classes.tabIcon} />
                Documentation
              </div>
            </Tabs.Tab>
            {hasProps && (
              <Tabs.Tab value="props">
                <div className={classes.tabInner}>
                  <IconCode size={20} stroke={1.5} className={classes.tabIcon} />
                  Props
                </div>
              </Tabs.Tab>
            )}
            {hasStyles && (
              <Tabs.Tab value="styles-api">
                <div className={classes.tabInner}>
                  <IconAdjustments size={20} stroke={1.5} className={classes.tabIcon} />
                  Styles API
                </div>
              </Tabs.Tab>
            )}
          </Tabs.List>
        </div>

        <Tabs.Panel value="docs">
          <div className={classes.contentWrapper}>
            <div className={classes.main} id="mdx">
              {children}
              <MdxSiblings meta={meta} />
            </div>

            <div className={classes.tableOfContents}>
              <TableOfContents withTabs />
            </div>
          </div>
        </Tabs.Panel>

        <Tabs.Panel value="props">
          <div className={classes.tabContent}>
            <PropsTablesList components={meta.props!} componentPrefix={meta.componentPrefix} />
          </div>
        </Tabs.Panel>

        <Tabs.Panel value="styles-api">
          <div className={classes.tabContent}>
            <StylesApiTablesList components={meta.styles!} componentPrefix={meta.componentPrefix} />
          </div>
        </Tabs.Panel>
      </Tabs>
    </PageBase>
  );
}
