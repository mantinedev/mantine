import React, { useState } from 'react';
import { useLocation } from '@reach/router';
import { navigate } from 'gatsby';
import { Tabs, Title, TextInput } from '@mantine/core';
import { MagnifyingGlassIcon } from '@modulz/radix-icons';
import { useMediaQuery } from '@mantine/hooks';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MdxSiblings } from '../MdxSiblings/MdxSiblings';
import TableOfContents from '../TableOfContents/TableOfContents';
import { MdxPageBase } from '../MdxPageBase/MdxPageBase';
import PropsTable from './PropsTable/PropsTable';
import { StylesApi } from './StylesApi/StylesApi';
import { MdxPageProps } from '../../../types';
import useStyles from './MdxPageTabs.styles';

export function MdxPageTabs({ body, frontmatter, headings, siblings }: MdxPageProps) {
  const [query, setQuery] = useState('');
  const { classes } = useStyles();
  const mobile = useMediaQuery('(max-width: 500px)');
  const location = useLocation();
  const initialTab = location.search.replace('?t=', '') || 'docs';
  const hasProps = Array.isArray(frontmatter.props);
  const hasStyles = Array.isArray(frontmatter.styles);

  if (!hasProps && !hasStyles) {
    return null;
  }

  const propsTables = hasProps
    ? frontmatter.props.map((component) => (
        <div key={component}>
          <Title order={2} sx={{ fontWeight: 600 }} mb={20}>
            {component} component props
          </Title>
          <PropsTable key={component} component={component} query={query} />
        </div>
      ))
    : null;

  return (
    <MdxPageBase>
      <Tabs
        variant="outline"
        defaultValue={initialTab}
        onTabChange={(value) => {
          navigate(`${location.pathname}?t=${value}`, { replace: true });
        }}
        classNames={{ tabsList: classes.tabsList, tab: classes.tab, tabActive: classes.tabActive }}
      >
        <div className={classes.tabsWrapper}>
          <Tabs.List>
            <Tabs.Tab value="docs">Documentation</Tabs.Tab>
            {hasProps && <Tabs.Tab value="props">{mobile ? 'Props' : 'Component props'}</Tabs.Tab>}
            {hasStyles && (
              <Tabs.Tab value="styles-api">{mobile ? 'Styles' : 'Styles API'}</Tabs.Tab>
            )}
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
              <MDXRenderer>{body}</MDXRenderer>
              <MdxSiblings siblings={siblings} />
            </div>

            <div className={classes.tableOfContents}>
              <TableOfContents headings={headings} withTabs />
            </div>
          </div>
        </Tabs.Panel>

        <Tabs.Panel value="props">
          <div
            style={{ maxWidth: 1178, marginLeft: 'auto', marginRight: 'auto', marginTop: 24 }}
            className={classes.tabContent}
          >
            <TextInput
              autoFocus
              icon={<MagnifyingGlassIcon />}
              placeholder="Search props"
              mb={20}
              value={query}
              onChange={(event) => setQuery(event.currentTarget.value)}
            />
            {propsTables}
          </div>
        </Tabs.Panel>

        <Tabs.Panel value="styles-api">
          <div
            style={{ maxWidth: 1178, marginLeft: 'auto', marginRight: 'auto', marginTop: 24 }}
            className={classes.tabContent}
          >
            <StylesApi components={frontmatter.styles} />
          </div>
        </Tabs.Panel>
      </Tabs>
    </MdxPageBase>
  );
}
