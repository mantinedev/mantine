import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import TableOfContents from '../TableOfContents/TableOfContents';
import { MdxPageBase } from '../MdxPageBase/MdxPageBase';
import { MdxPageProps } from '../../../types';
import useStyles from './MdxRawContent.styles';

export function MdxRawContent({ body, headings }: MdxPageProps) {
  const { classes } = useStyles();
  return (
    <MdxPageBase>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <MDXRenderer>{body}</MDXRenderer>
        </div>

        <div className={classes.tableOfContents}>
          <TableOfContents headings={headings} withTabs={false} />
        </div>
      </div>
    </MdxPageBase>
  );
}
