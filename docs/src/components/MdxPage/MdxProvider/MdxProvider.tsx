import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { Code, Text } from '@mantine/core';
import { Prism } from '@mantine/prism';
import { Demo } from '@mantine/demos';
import GatsbyLink from './GatsbyLink/GatsbyLink';
import DataTable from './DataTable/DataTable';
import MdxTitle from './MdxTitle/MdxTitle';

const h = (order: 1 | 2 | 3 | 4 | 5 | 6) => (props: any) => <MdxTitle order={order} {...props} />;

export const components = {
  GatsbyLink,
  DataTable,
  Demo,
  h1: h(1),
  h2: h(2),
  h3: h(3),
  h4: h(4),
  h5: h(5),
  h6: h(6),
  inlineCode: (props: any) => <Code {...props} />,
  a: ({ href, children }: { href: string; children: string }) => {
    const replaced = href.replace('https://mantine.dev', '');

    if (!replaced.startsWith('http') && replaced.trim().length > 0) {
      return <GatsbyLink to={href.replace('https://mantine.dev', '')}>{children}</GatsbyLink>;
    }

    return (
      <Text component="a" variant="link" href={href}>
        {children}
      </Text>
    );
  },
  p: (props: any) => <p {...props} style={{ lineHeight: 1.55 }} />,
  ul: (props: any) => (
    <ul {...props} style={{ lineHeight: 1.55, marginBottom: 20, marginTop: 10 }} />
  ),
  li: (props: any) => <li {...props} style={{ marginTop: 4 }} />,
  pre: (props: any) => {
    const matches = (props.children.props.className || '').match(/language-(?<lang>.*)/);

    return (
      <Prism
        language={matches && matches.groups && matches.groups.lang ? matches.groups.lang : ''}
        style={{ marginBottom: 20 }}
      >
        {props.children.props.children}
      </Prism>
    );
  },
};

export default function MdxProvider({ children }: { children: React.ReactNode }) {
  return <MDXProvider components={components}>{children}</MDXProvider>;
}
