import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Head from '../components/Head/Head';

interface DocPageProps {
  data: {
    mdx: {
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
      <MDXRenderer>{post.body}</MDXRenderer>
    </article>
  );
}

export const query = graphql`
  query DocById($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        package
        slug
      }
      body
    }
  }
`;
