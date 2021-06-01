import React from 'react';
import { Tabs, Tab, Title } from '@mantine/core';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import TableOfContents from '../TableOfContents/TableOfContents';
import { Footer } from '../../Footer/Footer';
import PropsTable from './PropsTable/PropsTable';
import useStyles from './MdxPageTabs.styles';

export function MdxPageTabs({ body, frontmatter, headings }: MdxPage) {
  const classes = useStyles();

  if (!Array.isArray(frontmatter.props)) {
    return null;
  }

  const propsTables = Array.isArray(frontmatter.props)
    ? frontmatter.props.map((component) => (
        <div key={component}>
          <Title order={2} style={{ fontWeight: 600, marginBottom: 20 }}>
            {component} component props
          </Title>
          <PropsTable key={component} component={component} />
        </div>
      ))
    : null;

  return (
    <Tabs
      variant="outline"
      className={classes.tabs}
      groupProps={{ className: classes.tabsList }}
      tabsListProps={{ className: classes.tabsWrapper }}
    >
      <Tab label="Documentation" className={classes.tab}>
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
            <Footer />
          </div>

          <div className={classes.tableOfContents}>
            <TableOfContents headings={headings} withTabs />
          </div>
        </div>
      </Tab>

      <Tab label="Component props" className={classes.tab}>
        <div
          style={{ maxWidth: 1080, margin: 'auto', marginTop: 24 }}
          className={classes.tabContent}
        >
          {propsTables}
        </div>
      </Tab>
    </Tabs>
  );
}
