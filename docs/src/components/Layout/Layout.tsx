import React from 'react';
import { useMantineTheme, Container, Title } from '@mantine/core';
import { MDXProvider } from '@mdx-js/react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/dracula';
import AppContainer from '../AppContainer/AppContainer';
import Navbar from '../Navbar/Navbar';
import useStyles from './Layout.styles';

const components = {
  h1: (props: any) => <Title style={{ fontFamily: 'IBM Plex Mono, monospace' }} {...props} />,
  h2: (props: any) => (
    <Title order={2} style={{ fontFamily: 'IBM Plex Mono, monospace' }} {...props} />
  ),

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

export default function Layout({ children }: { children: React.ReactNode }) {
  const classes = useStyles({ theme: useMantineTheme() });
  return (
    <AppContainer>
      <main className={classes.layout}>
        <div className={classes.inner}>
          <Navbar className={classes.navbar} />
          <div className={classes.main}>
            <Container size="sm">
              <MDXProvider components={components}>{children}</MDXProvider>
            </Container>
          </div>
        </div>
      </main>
    </AppContainer>
  );
}
