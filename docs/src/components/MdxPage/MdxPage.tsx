import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Tabs, Tab, Title } from '@mantine/core';
import { Footer } from '../Footer/Footer';
import TableOfContents from '../TableOfContents/TableOfContents';
import PropsTable from '../MdxProvider/PropsTable/PropsTable';
import { MdxPageHeader } from './MdxPageHeader/MdxPageHeader';
import { MdxPageProps } from './types';
import useStyles from './MdxPage.styles';

export function MdxPage(props: MdxPageProps) {
  const classes = useStyles();
  const { data, headings, body } = props;
  const shouldRenderTabs = Array.isArray(data.props);
  const propsTables = shouldRenderTabs
    ? props.data.props.map((component) => (
        <div>
          {props.data.props.length > 1 && (
            <Title order={2} style={{ fontWeight: 600, marginBottom: 20 }}>
              {component} component props
            </Title>
          )}
          <PropsTable key={component} component={component} />
        </div>
      ))
    : null;

  return (
    <div className={classes.wrapper}>
      <MdxPageHeader {...props} />

      {shouldRenderTabs ? (
        <Tabs
          variant="outline"
          className={classes.tabs}
          groupProps={{ className: classes.tabsList }}
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
                <TableOfContents headings={headings} />
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
      ) : (
        <>
          <div
            className={classes.rawContentWrapper}
            style={{
              display: 'flex',
              position: 'relative',
              justifyContent: 'space-between',
            }}
          >
            <div className={classes.rawContent}>
              <MDXRenderer>{body}</MDXRenderer>
              <Footer />
            </div>

            <div className={classes.tableOfContents}>
              <TableOfContents headings={headings} />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
