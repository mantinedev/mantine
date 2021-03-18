import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Head from '../components/Head/Head';
import TableOfContents from '../components/TableOfContents/TableOfContents';

interface DocPageProps {
  data: {
    mdx: {
      headings: {
        depth: number;
        value: string;
      }[];

      body: string;

      frontmatter: {
        title: string;
        description?: string;
      };
    };
  };
}

export default function DocPage({ data }: DocPageProps) {
  const post = data.mdx;

  return (
    <article>
      <Head title={post.frontmatter.title} description={post.frontmatter.description} />
      <TableOfContents headings={post.headings} />
      <MDXRenderer>{post.body}</MDXRenderer>
    </article>
  );
}

export const query = graphql`
  query DocById($id: String) {
    mdx(id: { eq: $id }) {
      headings {
        depth
        value
      }
      frontmatter {
        title
        package
        slug
      }
      body
    }
  }
`;
