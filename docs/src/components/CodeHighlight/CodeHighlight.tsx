import React from 'react';
import cx from 'clsx';
import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/palenight';
import useStyles from './CodeHighlight.styles';

interface CodeHighlightProps {
  code: string;
  language: Language;
  className: string;
}

export default function CodeHighlight({ code, className, language }: CodeHighlightProps) {
  const classes = useStyles();
  return (
    <Highlight {...defaultProps} theme={theme} code={code} language={language}>
      {({ className: inheritedClassName, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={cx(classes.code, inheritedClassName, className)} style={style}>
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
}
