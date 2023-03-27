import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Alert } from '@mantine/core';
import { MdxPageBase } from '../MdxPageBase/MdxPageBase';
import MdxTitle from '../MdxProvider/MdxTitle/MdxTitle';
import { MdxPageProps } from '../../../types';
import useStyles from './MdxErrorPage.styles';

export function MdxErrorPage({ body, frontmatter }: MdxPageProps) {
  const { classes } = useStyles();
  return (
    <MdxPageBase>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <MdxTitle order={1}>{frontmatter.title}</MdxTitle>
          <Alert className={classes.error} color="red" title="Error message">
            {frontmatter.error}
          </Alert>
          <MDXRenderer>{body}</MDXRenderer>
        </div>
      </div>
    </MdxPageBase>
  );
}
