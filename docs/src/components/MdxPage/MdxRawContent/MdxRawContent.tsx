import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import TableOfContents from '../TableOfContents/TableOfContents';
import { Footer } from '../../Footer/Footer';
import useStyles from './MdxRawContent.styles';

export function MdxRawContent({ body, headings }: MdxPage) {
  const classes = useStyles();
  return (
    <div
      className={classes.wrapper}
      style={{
        display: 'flex',
        position: 'relative',
        justifyContent: 'space-between',
      }}
    >
      <div className={classes.container}>
        <MDXRenderer>{body}</MDXRenderer>
        <Footer />
      </div>

      <div className={classes.tableOfContents}>
        <TableOfContents headings={headings} withTabs={false} />
      </div>
    </div>
  );
}
