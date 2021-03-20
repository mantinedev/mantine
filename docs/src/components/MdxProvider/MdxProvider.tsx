import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { Code, Text } from '@mantine/core';
import GatsbyLink from './GatsbyLink/GatsbyLink';
import PropsTable from './PropsTable/PropsTable';
import PageHeader from './PageHeader/PageHeader';
import DataTable from './DataTable/DataTable';
import MdxTitle from './MdxTitle/MdxTitle';
import CodeHighlight from '../CodeHighlight/CodeHighlight';

const h = (order: 1 | 2 | 3 | 4 | 5 | 6) => (props: any) => <MdxTitle order={order} {...props} />;

const components = {
  GatsbyLink,
  PropsTable,
  PageHeader,
  DataTable,
  h1: h(1),
  h2: h(2),
  h3: h(3),
  h4: h(4),
  h5: h(5),
  h6: h(6),
  inlineCode: (props: any) => <Code {...props} />,
  a: (props: any) => <Text<'a'> component="a" variant="link" {...props} />,
  p: (props: any) => <p {...props} style={{ lineHeight: 1.6 }} />,
  ul: (props: any) => (
    <ul {...props} style={{ lineHeight: 1.4, marginBottom: 15, marginTop: 15 }} />
  ),
  pre: (props: any) => {
    const matches = (props.children.props.className || '').match(/language-(?<lang>.*)/);

    return (
      <CodeHighlight
        code={props.children.props.children}
        language={matches && matches.groups && matches.groups.lang ? matches.groups.lang : ''}
      />
    );
  },
};

export default function MdxProvider({ children }: { children: React.ReactNode }) {
  return <MDXProvider components={components}>{children}</MDXProvider>;
}
