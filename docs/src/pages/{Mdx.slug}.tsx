import React from 'react';
import { graphql } from 'gatsby';
import { PageHead } from '../components/PageHead/PageHead';
import { MdxPage } from '../components/MdxPage/MdxPage';
import { getDocsData, DocsQuery } from '../components/Layout/get-docs-data';
import { MdxPageProps, Frontmatter } from '../types';

interface DocPageProps {
  location: {
    pathname: string;
  };

  data: DocsQuery & {
    mdx: MdxPageProps;
  };
}

function findSiblings(data: ReturnType<typeof getDocsData>, pathname: string) {
  const pages = data.reduce((acc, group) => {
    const inner = group.groups.reduce<Frontmatter[]>((_acc, g) => [..._acc, ...g.pages], []);
    return [...acc, ...group.uncategorized, ...inner];
  }, []);

  const index = pages.findIndex((page) => page.slug === pathname);
  return { next: pages[index + 1] || null, prev: pages[index - 1] || null };
}

export default function DocPage({ data, location }: DocPageProps) {
  const { mdx } = data;
  const allMdx = getDocsData(data);
  const siblings = findSiblings(allMdx, location.pathname);

  return (
    <article>
      <MdxPage {...mdx} siblings={siblings} />
    </article>
  );
}

export const Head = ({ data }) => {
  const { mdx } = data;
  return <PageHead title={mdx.frontmatter.title} description={mdx.frontmatter.description} />;
};

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
        installation
        pageTitle
        license
        styles
        release
        date
        componentPrefix
        hideToc
        polymorphic
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
