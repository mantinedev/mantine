import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import TableOfContents from '../TableOfContents/TableOfContents';
import { MdxPageBase } from '../MdxPageBase/MdxPageBase';
import { MdxSiblings } from '../MdxSiblings/MdxSiblings';
import { MdxPageProps } from '../../../types';
import useStyles from './MdxRawContent.styles';

export function MdxRawContent({ body, headings, siblings, frontmatter }: MdxPageProps) {
  const { classes } = useStyles({ withToc: !frontmatter.hideToc });
  return (
    <MdxPageBase>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <MDXRenderer>{body}</MDXRenderer>
          {!frontmatter.hideToc && <MdxSiblings siblings={siblings} />}
        </div>

        {!frontmatter.hideToc && (
          <div className={classes.tableOfContents}>
            <TableOfContents headings={headings} withTabs={false} />
          </div>
        )}
      </div>
    </MdxPageBase>
  );
}
