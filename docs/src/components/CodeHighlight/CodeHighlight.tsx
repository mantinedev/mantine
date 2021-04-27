import React from 'react';
import cx from 'clsx';
import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import { ClipboardIcon, CheckIcon } from '@modulz/radix-icons';
import { ActionIcon, useMantineTheme } from '@mantine/core';
import { useClipboard } from '@mantine/hooks';
import { theme } from './theme';
import useStyles from './CodeHighlight.styles';

interface CodeHighlightProps {
  code: string;
  language: Language;
  className?: string;
}

export default function CodeHighlight({ code, className, language }: CodeHighlightProps) {
  const classes = useStyles();
  const clipboard = useClipboard();
  const _theme = useMantineTheme();

  return (
    <div className={classes.wrapper}>
      <ActionIcon
        className={classes.copy}
        title={clipboard.copied ? 'Copied' : 'Copy code to clipboard'}
        onClick={() => clipboard.copy(code)}
      >
        {clipboard.copied ? <CheckIcon /> : <ClipboardIcon />}
      </ActionIcon>

      <Highlight
        {...defaultProps}
        theme={
          _theme.colorScheme === 'dark'
            ? { ...theme, plain: { ...theme.plain, backgroundColor: _theme.colors.dark[9] } }
            : theme
        }
        code={code}
        language={language}
      >
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
    </div>
  );
}
