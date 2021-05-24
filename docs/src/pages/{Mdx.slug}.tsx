import React from 'react';
import { graphql } from 'gatsby';
import Head from '../components/Head/Head';
import { MdxPage } from '../components/MdxPage/MdxPage';

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
        props: string[];
        import: string;
        docs: string;
        source: string;
        package: string;
      };
    };
  };
}

export default function DocPage({ data }: DocPageProps) {
  const post = data.mdx;

  return (
    <article>
      <Head title={post.frontmatter.title} description={post.frontmatter.description} />
      <MdxPage body={post.body} headings={post.headings} data={post.frontmatter} />
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
        props
        import
        docs
        source
        description
      }
      body
    }
  }
`;
