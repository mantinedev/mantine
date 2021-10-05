import React from 'react';
import { graphql } from 'gatsby';
import Head from '../components/Head/Head';
import { MdxPage } from '../components/MdxPage/MdxPage';
import { getDocsData, DocsQuery } from '../components/Layout/get-docs-data';
import { MdxPageProps } from '../types';

interface DocPageProps {
  data: DocsQuery & {
    mdx: MdxPageProps;
  };
}

export default function DocPage({ data }: DocPageProps) {
  const { mdx } = data;
  const allMdx = getDocsData(data);

  return (
    <article>
      <Head title={mdx.frontmatter.title} description={mdx.frontmatter.description} />
      <MdxPage {...mdx} allMdx={allMdx} />
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
        styles
        release
        date
      }
      body
    }

    allMdx {
      edges {
        node {
          id
          frontmatter {
            group
            title
            order
            slug
            category
            package
          }
        }
      }
    }
  }
`;
