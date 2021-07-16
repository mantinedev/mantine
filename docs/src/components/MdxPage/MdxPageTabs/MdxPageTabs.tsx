import React, { useState } from 'react';
import { Tabs, Tab, Title, Input } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import TableOfContents from '../TableOfContents/TableOfContents';
import { MdxPageBase } from '../MdxPageBase/MdxPageBase';
import PropsTable from './PropsTable/PropsTable';
import { StylesApi } from './StylesApi/StylesApi';
import useStyles from './MdxPageTabs.styles';

export function MdxPageTabs({ body, frontmatter, headings }: MdxPage) {
  const [searchValue, setSearchValue] = useState('');
  const classes = useStyles();
  const mobile = useMediaQuery('(max-width: 500px)');
  const hasProps = Array.isArray(frontmatter.props);
  const hasStyles = Array.isArray(frontmatter.styles);

  if (!hasProps && !hasStyles) {
    return null;
  }

  const propsTables = hasProps
    ? frontmatter.props.map((component) => (
        <div key={component}>
          <Title order={2} style={{ fontWeight: 600, marginBottom: 20 }}>
            {component} component props
          </Title>
          <PropsTable key={component} component={component} searchValue={searchValue} />
        </div>
      ))
    : null;

  return (
    <MdxPageBase>
      <Tabs
        variant="outline"
        className={classes.tabs}
        classNames={{
          root: classes.tabs,
          tabsList: classes.tabsList,
          tabsListWrapper: classes.tabsWrapper,
        }}
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
            </div>

            <div className={classes.tableOfContents}>
              <TableOfContents headings={headings} withTabs />
            </div>
          </div>
        </Tab>

        {hasProps && (
          <Tab label={mobile ? 'Props' : 'Component props'} className={classes.tab}>
            <div
              style={{ maxWidth: 1080, margin: 'auto', marginTop: 24 }}
              className={classes.tabContent}
            >
              <Input
                variant="default"
                placeholder="Search Props"
                style={{
                  marginBottom: 20,
                }}
                value={searchValue}
                onChange={(event: { currentTarget: { value: React.SetStateAction<string> } }) =>
                  setSearchValue(event.currentTarget.value)
                }
              />
              {propsTables}
            </div>
          </Tab>
        )}

        {hasStyles && (
          <Tab label={mobile ? 'Styles' : 'Styles API'} className={classes.tab}>
            <div
              style={{ maxWidth: 1080, margin: 'auto', marginTop: 24 }}
              className={classes.tabContent}
            >
              <StylesApi components={frontmatter.styles} />
            </div>
          </Tab>
        )}
      </Tabs>
    </MdxPageBase>
  );
}
