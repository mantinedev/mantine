import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Tabs, Tab, Text, Title } from '@mantine/core';
import { Footer } from '../Footer/Footer';
import CodeHighlight from '../CodeHighlight/CodeHighlight';
import TableOfContents from '../TableOfContents/TableOfContents';
import PageHeader from '../MdxProvider/PageHeader/PageHeader';
import PropsTable from '../MdxProvider/PropsTable/PropsTable';
import useStyles from './MdxPage.styles';

interface MdxPageProps {
  headings: {
    depth: number;
    value: string;
  }[];

  body: string;

  data: {
    title: string;
    description?: string;
    props: string[];
    import: string;
    docs: string;
    source: string;
    package: string;
  };
}

export function MdxPage({ headings, body, data }: MdxPageProps) {
  const classes = useStyles();
  const shouldRenderTabs = Array.isArray(data.props);
  const props = shouldRenderTabs
    ? data.props.map((component) => (
        <div>
          {data.props.length > 1 && (
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
      {shouldRenderTabs && (
        <div className={classes.headerWrapper}>
          <div className={classes.header}>
            <Title className={classes.title}>{data.title}</Title>

            <Text size="lg" className={classes.description}>
              {data.description}
            </Text>

            {data.import && (
              <div className={classes.importCode}>
                <CodeHighlight language="tsx" code={data.import} style={{ paddingLeft: 0 }} />
              </div>
            )}

            <PageHeader
              source={data.source}
              docs={data.docs}
              package={data.package.replace('mantine-', '@mantine/')}
            />
          </div>
        </div>
      )}

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
              {props}
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
