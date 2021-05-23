import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Head from '../components/Head/Head';
import { Footer } from '../components/Footer/Footer';
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
      <div
        style={{
          display: 'flex',
          position: 'relative',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ width: 'calc(100% - 280px)', maxWidth: 800, margin: 'auto' }}>
          <MDXRenderer>{post.body}</MDXRenderer>
          <Footer />
        </div>
        <div style={{ flex: '0 0 260px' }}>
          <TableOfContents headings={post.headings} />
        </div>
      </div>
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
