import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { Title } from '@mantine/core';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/dracula';

const h = (order: 1 | 2 | 3 | 4 | 5 | 6) => ({ ...others }: any) => (
  <Title order={order} themeOverride={{ fontFamily: 'IBM Plex Mono, monospace' }} {...others} />
);

const components = {
  h1: h(1),
  h2: h(2),
  h3: h(3),
  h4: h(4),
  h5: h(5),
  h6: h(6),
  pre: (props: any) => {
    const matches = (props.children.props.className || '').match(/language-(?<lang>.*)/);

    return (
      <Highlight
        {...defaultProps}
        theme={theme}
        code={props.children.props.children}
        language={matches && matches.groups && matches.groups.lang ? matches.groups.lang : ''}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={className}
            style={{
              ...style,
              fontFamily: 'IBM Plex Mono, monospace',
              lineHeight: 1.4,
              padding: '15px 20px',
              borderRadius: 4,
            }}
          >
            {tokens
              .map((line, i) => {
                if (i === tokens.length - 1 && line.length === 1 && line[0].content === '\n') {
                  return null;
                }

                return (
                  <div {...getLineProps({ line, key: i })}>
                    {line.map((token, key) => (
                      <span {...getTokenProps({ token, key })} />
                    ))}
                  </div>
                );
              })
              .filter(Boolean)}
          </pre>
        )}
      </Highlight>
    );
  },
};

export default function MdxProvider({ children }: { children: React.ReactNode }) {
  return <MDXProvider components={components}>{children}</MDXProvider>;
}
