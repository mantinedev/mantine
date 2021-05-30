import React from 'react';
import { graphql } from 'gatsby';
import Head from '../components/Head/Head';
import { MdxPage } from '../components/MdxPage/MdxPage';

interface DocPageProps {
  data: {
    mdx: MdxPage;
  };
}

export default function DocPage({ data }: DocPageProps) {
  const { mdx } = data;

  return (
    <article>
      <Head title={mdx.frontmatter.title} description={mdx.frontmatter.description} />
      <MdxPage {...mdx} />
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
        bundleSize
        installation
        pageTitle
        license
      }
      body
    }
  }
`;
